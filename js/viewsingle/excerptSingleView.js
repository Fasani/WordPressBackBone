var ExcerptSingleView = Backbone.View.extend({

	tagName: 'li',
	className: 'single-excerpt',

  events: {
    "click" : "changePage"
  },

	template: _.template($('#single-excerpt').html()),

	render: function() {
		this.$el.html(this.template(this.model));
		return this;
	},

  changePage: function() {
    this.options.dispatcher.trigger('changePage', this.model);
  }

});