'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var AppRouter = Backbone.Router.extend({
    
    routes: {
        '': 'index',
        'posts/:id': 'getPost',
        'tags/:tag': 'getPostsByTag'
    }

  });

  // Instantiate the router
  var app_router = new AppRouter;

  app_router.on('route:index', function (id) {
      //alert( "index");
  });

  app_router.on('route:getPost', function (id) {
      // Note the variable in the route definition being passed in here
      //alert( "Get post number " + id );
      //Dispatcher.trigger('changePage', this.model);
  });

  app_router.on('route:getPostByTag', function (tag) {
      // Note the variable in the route definition being passed in here
      //alert( "Get post by tag " + tag );
  });

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

  return app_router;

});