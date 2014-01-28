define([
  'jquery',
  'underscore',
  'backbone',
  //App Files
  'app/AppRouter',
  'app/models/PostItem',
  'app/collections/PostList',
  'app/views/ExcerptListView',
  'app/viewsingle/PostSingleView'
], function($, _, Backbone, AppRouter, PostItem, PostList, ExcerptListView, PostSingleView){

  'use strict';
  
var MainView = Backbone.View.extend({

	el: '#main',

	initialize: function() {

		this.render();
	},

	render: function() {

		//Collection
		var postList = new PostList();

    this.excerptListView = new ExcerptListView({
      collection: postList
    });

    this.postSingleView = new PostSingleView({
      collection: postList
    });

		return this;
	}
});

  return MainView;

});