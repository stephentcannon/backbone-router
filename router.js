ClientRouter = Backbone.Router.extend({

    routes: {
        "" : "setDefaultRoute",
        "/" : "setDefaultRoute",
        ":route": "setRoute",
        ":route/": "setRoute",
        ":route?*querystring": "setRouteQueryString",
        ":route/:action": "setRouteAction",
        ":route/:action?*querystring": "setRouteActionQueryString",
        ":route/:action/:id?*querystring": "setRouteActionIdQueryString",
        ":route/:action/:id": "setRouteActionId",
    },
    /* Default route */
    setDefaultRoute: function() {
      // console.log('*** setDefaultRoute ***');
      Meteor.navigate('/home');
      
    },
    /* Generic routes */
    setRoute: function(route) {
      // console.log('*** setRoute ***');
      // console.log(route);
      Meteor.request.setController(route);
      Meteor.request.setAction(null);
      Meteor.request.setId(null);
      Meteor.request.setQueryString(null);
      // console.log('***********************');
    },
    setRouteQueryString: function(route, queryString){
      // console.log('*** setRouteQueryString ***')
      Meteor.request.setController(route);
      Meteor.request.setAction(null);
      Meteor.request.setId(null);
      Meteor.request.setQueryString(queryString);
      // console.log('***********************');
    },
    setRouteAction: function(route, action){
      // console.log('*** setRouteAction ***')
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setId(null);
      Meteor.request.setQueryString(null);
      //console.log('***********************');
    },
    setRouteActionQueryString: function(route, action, queryString){
      //console.log('*** setRouteActionQueryString ***')
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setId(null);
      Meteor.request.setQueryString(queryString);
      //console.log('***********************');
    },
    setRouteActionId: function(route, action, id){
      //console.log('*** setRouteActionId ***')
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setId(id);
      Meteor.request.setQueryString(null);
      //console.log('***********************');
    },
    setRouteActionIdQueryString: function(route, action, id, queryString){
      //console.log('*** setRouteActionIdQueryString ***')
      Meteor.request.setController(route);
      Meteor.request.setAction(action);
      Meteor.request.setId(id);
      Meteor.request.setQueryString(queryString);
      //console.log('***********************');
    },
    

    /* Every time a route is called we set it in the Session */
    initialize: function() {
      //console.log('*** Router initialize ***');
      this.bind("all", function() {
          Session.set('route', Backbone.history.fragment); //NEVER CHNAGE THIS THIS IS WHAT KICKS ROUTING 
          Session.set('routeController', Meteor.request.controller);
          Session.set('routeAction', Meteor.request.action);
          Session.set('routeId', Meteor.request.id);
          Session.set('routeQueryString', Meteor.request.queryString);
      });
    },
    notFound: function(name){
      name ? Meteor.request.setNotFound(name) : Meteor.request.setNotFound('BackboneRouterDefault404');
    }
});

BackboneRouter = new ClientRouter;



/*
 * After DOM is loaded we bind the click event on internal links to call the Meteor.navigate method
 * (This way we don't reload the session  fully use the backbone routing)
 */
Meteor.startup(function() {
  /* Starts the backbone history,  thus the Router */
  Backbone.history.start({pushState: true});
  //[data-link="internal"]
  $('body').on('click', 'a', function(e){
    // console.log('********* body on click ************')
    // console.log(this);
    // console.log( $(this).attr('href') );
    // console.log('******************************')
    e.preventDefault();
    Meteor.navigate($(this).attr('href'));
  });
});
