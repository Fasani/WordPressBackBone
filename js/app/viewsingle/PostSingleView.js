'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'rainbow',
  //App Files
  'app/Dispatcher',
  //Templates
  'text!app/templates/template.html'
], function($, _, Backbone, Rainbow, Dispatcher, templateHTML){

  var PostSingleView = Backbone.View.extend({

	el: '#content',
	className: 'single-post',

	template: _.template($('#single-post').html()),

  render: function() {
    this.$el.html(this.template(this.collection.models[0].attributes));
    this.$el.find('code').attr('data-language', 'javascript');
    Rainbow.color();
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(Dispatcher, 'changePage', this.changePage);
  },

  changePage: function(model) {
    this.$el.html(this.template(model));
    return this;
  }
});

  return PostSingleView;

});