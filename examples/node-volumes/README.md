# Introduction

This is a basic node application using Outscale API using typescript.

You will need an [Access Key and Secret Key](https://docs.outscale.com/en/userguide/Managing-Your-Access-Keys.html).

# Build & Run

First, generate `src/index.js`:
```
nvm install
npm install --local --install-links
```

You can now set your AK/SK and run the example:
```
export OUTSCALE_ACCESS_KEY="XXX"
export OUTSCALE_SECRET_KEY="XXX"
node src/index.js
```

# Next step?

If you want to use this example as a starting point, don't forget to set `outscale-api` reference path in [package.json](package.json) from `file:../..` to `github:outscale/osc-sdk-js`.