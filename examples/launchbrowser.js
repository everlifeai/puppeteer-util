const puppeteerUtil = require('./index')
async function test() {
  let browser =  await puppeteerUtil.launch({ headless: false, slowMo:       100, args: [ '--proxy-server="direct://"', '--proxy-bypass-list=*']})
  let page = await browser.newPage()
}
test()
