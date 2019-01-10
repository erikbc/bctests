exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/functionalTests/orders-spec.js'],

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        print: function () { /* Prevent the default spec dots from appearing in the output */ }
    },

    onPrepare: function () {
        const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
  };