// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: ['es2015']
});

let path = require('path');
let repo = require(path.resolve('./testData/index.js'));

exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    // seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    specs: ['specs/*Spec.js'],
    baseUrl: 'inspire.ceros.com',
    framework: 'jasmine',

    onPrepare: () => {
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        // for non-angular to angular page navigation
        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };

        browser.driver.manage().window().maximize(); // maximizes browser after intialization
    },




    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
            args: [
                // disable chrome's wackiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
            }
        }
    },

    suites: {
        func: './specs/swaglabsSpec.js',
    },

    // Default suite
    suite: 'func', // Will be executed if no suite is provided 


    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => { },
        defaultTimeoutInterval: 50000
    },

    params: {
        postDeploy: false,
        username: '',
        password: '',

        loginData: repo.loginData,
        testData: repo.testData

    }

};