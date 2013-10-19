var PostSingleView = Backbone.View.extend({

	tagName: 'li',
	className: 'single-post',

	template: _.template($('#single-post').html()),

	render: function() {
		this.$el.html(this.template(this.model));
		return this;
	}
});