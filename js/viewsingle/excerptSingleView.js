var ExcerptSingleView = Backbone.View.extend({

	tagName: 'li',
	className: 'single-excerpt',

	template: _.template($('#single-excerpt').html()),

	render: function() {
		this.$el.html(this.template(this.model));
		return this;
	}
});