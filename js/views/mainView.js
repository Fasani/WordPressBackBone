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