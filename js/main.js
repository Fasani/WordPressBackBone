'use strict';
//Configure require.js
require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    generic: {
      deps: [
        'rainbow'
      ]
    },
    rainbow: {
      exports: 'Rainbow'  
    } 
  },
  paths: {
      jquery: 'libs/jquery-2.0.3.min',
      underscore: 'libs/underscore-min',
      backbone: 'libs/backbone-min',
      text: 'libs/text',
      rainbow: 'libs/rainbow.min',
      generic: 'libs/language/generic',
      rainbowJavaScript: 'libs/language/javascript',
      rainbowLineNumbers: 'libs/rainbow.linenumbers.min'
  }
});

//Start up our App
require([
  'js/app/views/MainView.js',
], function (MainView) {
  // Initialize the application view
  new MainView();
});