define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  'use strict';

  var Dispatcher = _.clone(Backbone.Events);

  return Dispatcher;

});