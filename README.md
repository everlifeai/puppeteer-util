# Puppeteer Util

This package downloads and uses puppeteer at runtime.

This gives us two benefits:

1. It does not need to be packaged with any installer (packaging puppeteer causes Apple to refuse to sign the installer)
2. Multiple components can use the same installed puppeteer (useful for [Everlife Skills](https://everlife.ai))

## Example:

```js
const puppeteerUtil = require('./index')
async function test() {
  let browser =  await puppeteerUtil.launch({ headless: false, slowMo:       100, args: [ '--proxy-server="direct://"', '--proxy-bypass-list=*']})
  let page = await browser.newPage()
}
test()
```

