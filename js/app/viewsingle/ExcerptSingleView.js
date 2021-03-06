define([
  'jquery',
  'underscore',
  'backbone',
  //App Files
  'app/Dispatcher',
  //Templates
  'text!app/templates/single-excerpt.html'
], function($, _, Backbone, Dispatcher, templateHTML){

  'use strict';

  var ExcerptSingleView = Backbone.View.extend({

	tagName: 'li',
	className: 'single-excerpt',

  events: {
    "click" : "changePage"
  },

	template: _.template(templateHTML),

	render: function() {
		this.$el.html(this.template(this.model));
		return this;
	},

  changePage: function() {
    Dispatcher.trigger('changePage', this.model);
    $(".active").removeClass("active");
    this.$el.addClass("active");
  }

});

  return ExcerptSingleView;

});