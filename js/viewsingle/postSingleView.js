var PostSingleView = Backbone.View.extend({

	el: '#content',
	className: 'single-post',

	template: _.template($('#single-post').html()),

  render: function() {
    this.$el.html(this.template(this.collection.models[2].attributes));
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.options.dispatcher, 'changePage', this.changePage);
  },

  amaze: function() {
    console.log('this: ', 'noshit');
  },

  changePage: function(myModel) {
    this.$el.html(this.template(myModel));
    return this;
  }
});