Feature('testovani');


Scenario('test run', async (I) => {
    const assert = require('assert');
    I.amOnPage('https://google.cz')
    I.waitForElement({xpath: "//input[@name='q']"});
    I.seeElement({xpath: "//input[@name='q']"});
    I.click({xpath: "//input[@name='q']"});
    I.fillField({xpath: "//input[@name='q']"}, "iliteratura");
    I.click({xpath: "(//div[@class='sbtc'])[1]"});
    I.click({xpath: "//a[./text()='Recenze']"});
    I.waitForElement({xpath: "//div/span[./text()='Robb, Alice: Proč sníme?']"})
    I.click({xpath: "//div/span[./text()='Robb, Alice: Proč sníme?']"});
    let title = await I.grabTitle(); 
    console.log(`Current title is ${title}`);
    assert.equal(title, 'Robb, Alice: Proč sníme? - iLiteratura.cz');
    I.seeInTitle('Proč sníme')

})

// Scenario('test run dva', async (I) => {
//     const assert = require('assert');
//     I.amOnPage('https://seznam.cz')
//     I.seeInTitle('Seznam');
//     I.waitForElement({xpath: "(//input[@name='q'])[3]"});
//     I.fillField({xpath: "(//input[@name='q'])[3]"}, 'iliteratura');
//     I.click({xpath: "//button[@class='search-form__button button button--submit button--with-input']"})
//     I.waitForElement({xpath: "//a[./text()='Seznam']"})
//     I.click({xpath: "//span[./text()='Recenze']"})
//     I.waitForElement({xpath: "//span[./text()='Robb, Alice: Proč sníme?']"})
//     I.click({xpath: "//span[./text()='Robb, Alice: Proč sníme?']"})
//     I.seeInTitle('Robb')


Scenario('another test', async(I) => {
    var assert = require('assert');
    I.amOnPage('https://www.idnes.cz/')
    I.moveCursorTo({xpath: "//a[@score-id='kraje']"})
    I.waitForClickable({xpath: "(//a[@href='https://www.idnes.cz/brno'])[1]"})
    // pause()
    I.click({xpath: "(//a[@href='https://www.idnes.cz/brno'])[1]"})
    let region = await I.grabTextFrom({xpath: "(//h3/a)[1]"})
    assert.equal(region, 'Brno')
    I.seeInSource('Jihomorav')
    // pause()
})


Scenario('xxx', async(I) => {
    var assert = require('assert')
    I.amOnPage('https://google.com')
    I.waitForElement({xpath: "//input[@name='q']"});
    I.fillField({xpath: "//input[@name='q']"}, 'kzvalmez')
    I.click({xpath: "(//div[@class='sbtc'])[1]"})
    I.waitForElement({xpath: "//h3[./text()='kz valmez']"})
    I.click({xpath: "//h3[./text()='kz valmez']"})
    // I.amOnPage('https://kzvalmez.cz')
    I.seeInTitle('Kulturní zařízení')
    I.moveCursorTo({xpath: "(//a[./text()='Pronájmy'])[1]"})
    I.waitForClickable({xpath: "(//a[./text()='M-klub'])[1]"})
    I.click({xpath: "(//a[./text()='M-klub'])[1]"})
    I.seeInTitle('M-klub')
    I.seeInSource('M-klub')

})

