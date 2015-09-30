(function() {
  'use strict';

  require.config({
    baseUrl: '../app',
    paths: {
      "jquery": "../vendors/jquery.min",
      'jasmine': '../vendors/jasmine-core/jasmine',
      'jasmine-html': '../vendors/jasmine-core/jasmine-html',
      'boot': '../vendors/jasmine-core/boot'
    },
    shim: {
      'jasmine-html': {
        deps: ['jasmine'],
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
      }
    }
  });


  var specs = [
    "../tests/TranslationSpec"
  ];


  require(['boot'], function () {

    // load the specs
    require(specs, function () {
      window.onload();
    });
  });
})();
