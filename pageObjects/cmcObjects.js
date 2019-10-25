var topSel = '((//span[@class="js-global-stats-'

var sel1 = [
    topSel + 'cryptocurrencies"])[1])',
    topSel + 'markets"])[1])',
    topSel + 'market-cap"])[1])',
    topSel + 'volume"])[1])',
    topSel + 'btc-dominance"])[1])'
]

module.exports = {
    url: 'https://coinmarketcap.com/',
    // commands: [
    //     {
    //         tabSwitch: function (tab) {
    //             console.log(tab)
    //             var brows = this
    //             this
    //                 .api.windowHandles(function (result) {
    //                     var originalTab = result.value[0]
    //                     var newTab = result.value[1]
    //                     brows
    //             this.api.switchWindow(tab)
    //             return this
    //                 })
    //         }
    //     }
    // ],
    elements: {
        navbar: { selector: '(//div[@class="container"])[1]', locateStrategy: 'xpath' },
        cryptos: { selector: (sel1[0]), locateStrategy: 'xpath' },
        markets: { selector: (sel1[1]), locateStrategy: 'xpath' },
        marketCap: { selector: (sel1[2]), locateStrategy: 'xpath' },
        volume: { selector: (sel1[3]), locateStrategy: 'xpath' },
        dominance: { selector: (sel1[4]), locateStrategy: 'xpath' },
        heading: { selector: ('//div/*/*/*[text()="Total Market Capitalization"]'), locateStrategy: 'xpath' },
        container: { selector: '.cmc-main-content' },
        home: { selector: ('(//span[@class="cmc-logo cmc-logo_color_black cmc-navbar__logo"])[3]'), locateStrategy: 'xpath' },
        rankings: { selector: ('((//div/*/*/div[1][text()="Rankings"])[2])'), locateStrategy: 'xpath' },
        tools: { selector: ('((//div/*/*/div[1][text()="Tools"])[2])'), locateStrategy: 'xpath' },
        resources: { selector: ('((//div/*/*/div[1][text()="Resources"])[2])'), locateStrategy: 'xpath' },
        blog: { selector: ('(//a[@href="https://blog.coinmarketcap.com"])[2]'), locateStrategy: 'xpath' },
        dots: { selector: ('//span[@class="icon-ellipsis-h cmc-navbar-ellipsis"]'), locateStrategy: 'xpath' },
        drop1: { selector: '(//div[@class="cmc-navsubmenu js-nav-dropdown-menu"])', locateStrategy: 'xpath' },
        drop2: { selector: '(//div[@class="cmc-nav-dropdown cmc-nav-desktop js-nav-dropdown cmc-nav-dropdown-leave"])', locateStrategy: 'xpath' },
        drop3: { selector: '(//h6[text()="Methodology"])[2]', locateStrategy: 'xpath' },
        blogBody: { selector: ('//body[@class="home blog custom-background two-column has-widgets"]'), locateStrategy: 'xpath'}
    }
}