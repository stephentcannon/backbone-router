ClientRouter = Backbone.Router.extend({

    routes: {
        "" : "default_route",
        ":route/": "get_route",
        ":route?*querystring": "getRouteAndQueryString",
        ":route": "get_route",
        ":route/:action?*querystring": "getRouteActionAndQueryString",
        ":route/:action": "get_route",
        ":route/:action/:id?*querystring": "get_route",
        ":route/:action/:id": "get_route",
    },

    /* Default route */
    default_route: function() {
        Meteor.navigate('/');
    },
    getRouteAndQueryString: function(route, queryString){
      Meteor.request.setController(route);
      Meteor.request.setQuery(queryString);
    },
    getRouteActionAndQueryString: function(route, action, queryString){
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setQuery(queryString);
    },
    /* Generic routes */
    get_route: function( route, action, id, queryString ) {
        Meteor.request.setController(route);
        Meteor.request.setAction(action);
        Meteor.request.setId(id);
        Meteor.request.setQuery(queryString);

    },

    /* Every time a route is called we set it in the Session */
    initialize: function() {
      this.bind("all", function() {
          Session.set('route', Backbone.history.fragment);
          Session.set('routeAction', Meteor.request.action);
          Session.set('routeId', Meteor.request.id);
          Session.set('routeQuery', Meteor.request.query);
      });
    }
});

Router = new ClientRouter;

/* Starts the backbone history, and thus the Router */
Backbone.history.start({pushState: true});

/*
 * After DOM is loaded we bind the click event on internal links to call the Meteor.navigate method
 * (This way we don't reload the session and fully use the backbone routing)
 */
Meteor.startup(function() {
    $('body').on('click', 'a[data-link="internal"]', function(e){
        e.preventDefault();
        Meteor.navigate($(this).attr('href'));
    });
   
})
