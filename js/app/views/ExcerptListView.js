define([
  'jquery',
  'underscore',
  'backbone',
  //App Files
  'app/Dispatcher',
  'app/viewsingle/ExcerptSingleView',
], function($, _, Backbone, Dispatcher, ExcerptSingleView){

'use strict';

var ExcerptListView = Backbone.View.extend({

	el: '#post-list',
	
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
    this.collection.fetch();
	},

	render: function() {
		this.$el.html('');
		this.collection.each(this.addOne, this);
		return this;
	},

	addOne: function(singleExcerpt) {
		var view = new ExcerptSingleView({
			model: singleExcerpt.attributes,
      dispatcher: Dispatcher
		});
		this.$el.append(view.render().el);
	}

});

  return ExcerptListView;

});