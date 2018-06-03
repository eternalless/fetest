const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('随风而行', Key.RETURN);
        await driver.wait(until.titleIs('随风而行'), 1000);
    } finally {
        await driver.quit();
    }
})();