var MainView = Backbone.View.extend({

	el: '#main',

	initialize: function() {
		this.render();
	},

	render: function() {

    //Easy Events Dispatcher
    var dispatcher = _.clone(Backbone.Events);

		//Collection
		var postList = new PostList();

    this.excerptListView = new ExcerptListView({
      collection: postList,
      dispatcher: dispatcher
    });

    this.postSingleView = new PostSingleView({
      collection: postList,
      dispatcher: dispatcher
    });

		return this;
	}
});