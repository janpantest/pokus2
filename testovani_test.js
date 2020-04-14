Feature('testovani');


Scenario('GOOGLE - iliteratura', async (I) => {
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

Scenario('SEZNAM - iliteratura', async (I) => {
    const assert = require('assert');
    I.amOnPage('https://seznam.cz')
    I.seeInTitle('Seznam');
    I.waitForElement({xpath: "(//input[@name='q'])[3]"});
    I.fillField({xpath: "(//input[@name='q'])[3]"}, 'iliteratura');
    I.click({xpath: "//button[@class='search-form__button button button--submit button--with-input']"})
    I.waitForElement({xpath: "//a[./text()='Seznam']"})
    I.waitForClickable({xpath: "//span[./text()='Recenze']"})
    I.click({xpath: "//span[./text()='Recenze']"})
    I.waitForElement({xpath: "//span[./text()='Robb, Alice: Proč sníme?']"})
    I.click({xpath: "//span[./text()='Robb, Alice: Proč sníme?']"})
    I.seeInTitle('Robb')
})


Scenario('DNES - hover', async(I) => {
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


Scenario('M KLUB - hover', async(I) => {
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

Scenario('KZvalmez - hover', async(I) => {
    var assert = require('assert')
    I.amOnPage('https://kzvalmez.cz')
    I.seeInTitle('Kulturní zařízení')
    I.moveCursorTo({xpath: "//a[@class='current-site kz-color-kz']"})
    I.waitForClickable({xpath: "//span[./text()='M-klub']"})
    I.click({xpath: "//span[./text()='M-klub']"})
    I.seeInTitle('M-Klub')
    // I.seeInSource('M-klub')

})

Scenario('String Assert', async(I) => {
    var assert = require('assert')
    I.amOnPage('https://seznam.cz')
    let svatek = await I.grabTextFrom({xpath: '//span[@class="style-tags style-tags--gadget-title"]'})
    svatek = svatek.split(' ')
    svatek = svatek[1]
    console.log(`hledany string je ${svatek}`)
    assert.equal(svatek, 'má')
})


