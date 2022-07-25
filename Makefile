API_VERSION=$(shell cat api_version)
SDK_VERSION=$(shell cat sdk_version)
USER_ID=$(shell id -u)
GROUP_ID=$(shell id -g)
OPENAPI_IMG=outscale/openapi-generator:ts-fetch-aws-v4
SHELL := /bin/bash

all: help

.PHONY: help
help:
	@echo "help:"
	@echo "- make gen   : regenerate SDK"
	@echo "- make test  : run all tests"

.PHONY: gen
gen: clean osc-generate

.PNONY: openapi-generator-help
openapi-generator-help:
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) config-help -g typescript-fetch

.PHONY: osc-generate
osc-generate: osc-api/outscale.yaml
	@echo start generating SDK...
	rm -rf .sdk || true
	mkdir .sdk
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) generate -i /sdk/osc-api/outscale.yaml -g typescript-fetch -c /sdk/gen.yml -o /sdk/.sdk --additional-properties=npmVersion=$(SDK_VERSION)
	# Set sdk version using reproductible sed.
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) sed -i "s/\"version\".*/\"version\": \"$(SDK_VERSION)\",/" /sdk/package.json
	docker run -v $(PWD):/sdk --rm $(OPENAPI_IMG) chown -R $(USER_ID).$(GROUP_ID) /sdk/.sdk
	mv .sdk/src ./
	@echo SDK generated
	@echo testing SDK build...
	@source ~/.nvm/nvm.sh; \
	echo "nvm --version:"; \
	nvm --version; \
	echo "nvm install..."; \
	nvm install; \
	echo "nvm use..."; \
	nvm use; \
	echo "npm version..."; \
	npm version; \
	echo "npm install..."; \
	npm install --local

osc-api/outscale.yaml:
	@echo getting osc-api description...
	git clone https://github.com/outscale/osc-api.git && cd osc-api && git checkout -b $(API_VERSION) $(API_VERSION)

.PHONY: clean
clean:
	@echo cleaning build artifacts...
	rm -rf .sdk osc-api src node_modules dist || true

.PHONY: test
test: reuse-test examples-test regen-test
	@echo all tests OK...

.PHONY: reuse-test
reuse-test:
	@echo testing licensing with reuse...
	docker run --rm --volume $(PWD):/data fsfe/reuse:0.11.1 lint

.PHONY: examples-test
examples-test: example-web-vms example-node-volumes
	@echo examples are OK

.PHONY: example-web-vms
example-web-vms:
	@echo testing examples/web-vms example...
	@source ~/.nvm/nvm.sh; \
	cd examples/web-vms; \
	echo "nvm --version:"; \
	nvm --version; \
	echo "installing nvm..."; \
	nvm install; \
	echo "using nvm..."; \
	nvm use; \
	echo "npm version:"; \
	npm version; \
	echo "npm install..."; \
	npm install --local --install-links

.PHONY: example-node-volumes
example-node-volumes:
	@echo testing examples/node-volumes example...
	@source ~/.nvm/nvm.sh; \
	cd examples/node-volumes; \
	echo "nvm version:"; \
	nvm --version; \
	echo "nvm install..."; \
	nvm install; \
	echo "nvm use..."; \
	nvm use; \
	echo "npm version:"; \
	npm version; \
	echo "npm install..."; \
	npm install --local --install-links; \
	echo "running node example..."; \
	node ./src/index.js > /dev/null

# try to regen, should not have any difference
.PHONY: regen-test
regen-test: gen
	@echo SDK regeneration test...
	git add src dist
	git diff --cached -s --exit-code
	git diff -s --exit-code

# Used by bot to auto-release
# GH_TOKEN and SSH_PRIVATE_KEY are needed
.PHONY: auto-release
auto-release: auto-release-cleanup osc-api-check release-check-duplicate release-build release-push release-pr
	@echo OK

.PHONY: auto-release-cleanup
auto-release-cleanup:
	rm -rf .auto-release-abort || true

.PHONY: osc-api-check
osc-api-check:
	bash .github/scripts/osc-api-check.sh

.PHONY: release-check-duplicate
release-check-duplicate:
	bash .github/scripts/release-check-duplicate.sh

.PHONY: release-build
release-build:
	bash .github/scripts/release-build.sh

.PHONY: release-push
release-push:
	bash .github/scripts/release-push.sh

.PHONY: release-pr
release-pr:
	bash .github/scripts/release-pr.sh
