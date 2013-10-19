var AppRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "getPost",
        "tags/:tag": "getPostsByTag"
    }
});
// Instantiate the router
var app_router = new AppRouter;

app_router.on('route:getPost', function (id) {
    // Note the variable in the route definition being passed in here
    alert( "Get post number " + id );
});

app_router.on('route:getPostByTag', function (tag) {
    // Note the variable in the route definition being passed in here
    alert( "Get post by tag " + tag );
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();