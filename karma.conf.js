module.exports = function (config) {
  var webdriverConfig = {
    hostname: 'selenium',
    port: 4444,
  };

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-selenium-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    customLaunchers: {
      'firefox': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'firefox',
        name: 'ff',
        platform: 'WIN8_1',
        platformName: 'windows',
        version: '54',
      },
      'chrome': {
        base: 'WebDriver',
        config: webdriverConfig,
        browserName: 'chrome',
        name: 'Chrome',
        platform: 'VISTA',
        platformName: 'windows',
        version: 'latest',
      },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
    port: 4444,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['firefox','chrome'],
    singleRun: false,
    browserNoActivityTimeout: 60000
  });
};
