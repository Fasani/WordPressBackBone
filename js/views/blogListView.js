var BlogListView = Backbone.View.extend({

	el: '#blog-list',

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
		var view = new BlogSingleView({
			model: singleExcerpt
		});
		this.$el.append(view.render().el);
	},

  changePage: function() {
    console.log('chnagepage: ', 'yep');
  }

});