var MainView = Backbone.View.extend({

	el: '#main',

	initialize: function() {
		this.render();
	},

	render: function() {

		//Collection
		var blogList = new BlogList();

		this.blogListView = new BlogListView({
			collection: blogList
		});

		return this;
	}
});