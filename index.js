
const install = require('./install')
const path = require('path')
const puppeteer = require('puppeteer-core')

async function launch(options){
    if(!(typeof options === 'object')) {
        options = {}
    }

    if(!options.hasOwnProperty('executablePath')) {
        options['executablePath'] = require('os').homedir()
    }
    await install.download(options)
    return  puppeteer.launch(options)
}

module.exports =  {
    launch
}
