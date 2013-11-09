'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  //App Files
  'app/models/PostItem',
  'app/collections/PostList',
  'app/views/ExcerptListView',
  'app/viewsingle/PostSingleView'
], function($, _, Backbone, PostItem, PostList, ExcerptListView, PostSingleView){

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