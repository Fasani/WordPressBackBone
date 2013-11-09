'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  // 'rainbow',
  //App Files
  'app/Dispatcher',
  //Templates
  'text!app/templates/single-post.html'
], function($, _, Backbone, Dispatcher, templateHTML){

  var PostSingleView = Backbone.View.extend({

  	el: '#content',

  	className: 'single-post',

  	template: _.template(templateHTML),

    initialize: function() {
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(Dispatcher, 'changePage', this.changePage);
    },

    render: function() {
      this.$el.html(this.template(this.collection.models[0].attributes));
      Rainbow.color();
      return this;
    },

    changePage: function(model) {
      this.$el.html(this.template(model));
      Rainbow.color();
      return this;
    }

  });

  return PostSingleView;

});