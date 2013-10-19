var PostListView = Backbone.View.extend({

	el: '#post-list',

  events: {
    "click .single-excerpt" : "changePage"
  },
	
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
		var view = new PostSingleView({
			model: singleExcerpt.attributes
		});
		this.$el.append(view.render().el);
	},

  changePage: function() {
    console.log('chnagepage: ', 'yep');
  }

});