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
      dispatcher: this.options.dispatcher
		});
		this.$el.append(view.render().el);
	}

});