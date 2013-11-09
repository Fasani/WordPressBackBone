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
    }
  },
  paths: {
      jquery: 'libs/jquery-2.0.3.min',
      underscore: 'libs/underscore-min',
      backbone: 'libs/backbone-min',
      text: 'libs/text'
  }
});

//Start up our App
require([
  'js/app/views/MainView.js',
], function (MainView) {
  // Initialize the application view
  new MainView();
});