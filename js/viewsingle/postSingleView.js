var PostSingleView = Backbone.View.extend({

	el: '#content',
	className: 'single-post',

	template: _.template($('#single-post').html()),

	render: function() {
    console.log('this: ', this);
		this.$el.html(this.template(this.collection.models[1].attributes));
		return this;
	},

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  }
});