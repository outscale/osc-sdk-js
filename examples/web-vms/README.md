# Introduction

This basic is a simple web application using Outscale API.

Provide your [Access Key and Secret Key](https://docs.outscale.com/en/userguide/Managing-Your-Access-Keys.html) and hit "Show Virtual Machines" button.


# Build

```
npm install
npm run build
```

You should now have `dist/index.bundle.js` generated and be able to access `/dist` folder with your browser.

# Next step?

If you want to use this example as a starting point, don't forget to set `outscale-api` reference path in [package.json](package.json) from `file:../..` to `github:outscale/osc-sdk-js`.
You might also want to edit [webpack.config.js](webpack.config.js) to set `mode` from `development` to `production` if you are planning to make a real application.