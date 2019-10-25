var coin = {}

//Top navbar selectors
var navSels1 = [
    '@cryptos',
    '@markets',
    '@marketCap',
    '@volume',
    '@dominance'
]

//Assertion selectors
var asserts1 = [
    'h1',
    'h1',
    '@heading',
    '@container',
    '@container'
]

//Texts to check assertions
var textChecker = [
    'All Cryptocurrencies',
    '24 Hour Volume Rankings',
    'Total Market Capitalization',
    '24h Vol',
    'Percentage of Total Market Capitalization (Dominance)'
]

var cryptoText = [
    'All Cryptocurrencies',
    'Cryptocurrencies',
    'Cryptos'
]

//Main navbar selectors
var navSels2 = [
    '@home',
    '@rankings',
    '@tools',
    '@resources',
    '@dots'
]

//Assertion selectors
var asserts2 = [
    'h1',
    '@drop1',
    '@drop1',
    '@drop2',
    '@drop3'
]

//Texts to check assertions
var textChecker2 = [
    'Top 100 Cryptocurrencies by Market Capitalization',
    'Gainers & Losers',
    'Charts',
    'API',
    'Methodology'
]

module.exports = {
    beforeEach: browser => {
        coin = browser.page.cmcObjects()
        coin.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Check top navbar links': browser => {
        for (i = 0; i < navSels1.length; i++) {
            coin
                .waitForElementVisible(navSels1[i])
                .pause(5000)
                .click(navSels1[i])
                .pause(5000)
            coin.expect.element(asserts1[i]).text.to.contain(`${textChecker[i]}`)
        }
    },
    'Check main navbar links': browswer => {
        for (j = 0; j < navSels2.length; j++) {
            coin
                .waitForElementVisible(navSels2[j])
                .pause(10000)
                .click(navSels2[j])
                .pause(10000)
            coin.expect.element(asserts2[j]).text.to.contain(`${textChecker2[j]}`)
        }
    },
    'Check Blog link': browser => {
        coin
            .waitForElementVisible('@blog')
            .click('@blog')
            .pause(5000)
            browser.windowHandles(function (result) {
                var oldTab = result.value[0];
                var newTab = result.value[1];
                browser.switchWindow(newTab);
                console.log('*****************************')
                coin.waitForElementVisible('@blogBody', 10000)
            });
    }

}