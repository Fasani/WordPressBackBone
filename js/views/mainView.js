var MainView = Backbone.View.extend({

	el: '#main',

	initialize: function() {
		this.render();
	},

	render: function() {

		//Collection
		var postList = new PostList();

		this.postListView = new PostListView({
			collection: postList
		});

		return this;
	}
});