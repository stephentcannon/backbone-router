/**
 *  Loads the template according to the route
 *  @return {string} HTML String
 */
Template.registerHelper('content', function(){
    /* This does nothing but triggers the Meteor.Template.chunk HTML automatic update on route change */
    // console.log("******* Template.registerHelper('content'");
    // Session.get('route');
    return Template[Meteor.get_template()];
});

Template.registerHelper('getController', function(){
  return Meteor.request.controller;
});

Template.registerHelper('getReactiveController', function(){
  return Session.get('route');
});

Template.registerHelper('getAction', function(){
  return Meteor.request.action;
});

Template.registerHelper('getReactiveAction', function(){
  return Session.get('routeAction');
});

Template.registerHelper('getId', function(){
  return Meteor.request.id;
});

Template.registerHelper('getReactiveId', function(){
  return Session.get('routeId');
});

Template.registerHelper('getQueryString', function(){
  return Meteor.request.query;
});

Template.registerHelper('getReactiveQueryString', function(){
  return Session.get('routeQuery');
});