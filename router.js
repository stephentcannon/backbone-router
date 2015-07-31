ClientRouter = Backbone.Router.extend({

    routes: {
        "" : "default_route",
        ":route/": "setRoute",
        ":route?*querystring": "setRouteAndQueryString",
        ":route": "setRoute",
        ":route/:action?*querystring": "setRouteActionAndQueryString",
        ":route/:action": "setRoute",
        ":route/:action/:id?*querystring": "setRoute",
        ":route/:action/:id": "setRoute",
    },

    /* Default route */
    default_route: function() {
        Meteor.navigate('/');
    },
    setRouteAndQueryString: function(route, queryString){

      Meteor.request.setController(route);
      Meteor.request.setQueryString(queryString);
    },
    setRouteActionAndQueryString: function(route, action, queryString){
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setQueryString(queryString);
    },
    /* Generic routes */
    setRoute: function( route, action, id, queryString ) {
      // console.log('*** setRoute ***');
      // console.log(route);
        Meteor.request.setController(route);
        Meteor.request.setAction(action);
        Meteor.request.setId(id);
        Meteor.request.setQueryString(queryString);

    },

    /* Every time a route is called we set it in the Session */
    initialize: function() {
      this.bind("all", function() {
          Session.set('routeController', Meteor.request.controller);//Backbone.history.fragment);
          Session.set('routeAction', Meteor.request.action);
          Session.set('routeId', Meteor.request.id);
          Session.set('routeQueryString', Meteor.request.queryString);
      });
    },
    notFound: function(name){
      name ? Meteor.request.setNotFound(name) : Meteor.request.setNotFound('EtherPOSRouterDefault404');
    }
});

EtherPOSRouter = new ClientRouter;

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
