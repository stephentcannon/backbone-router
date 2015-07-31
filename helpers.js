/**
 *  Loads the template according to the route
 *  @return {string} HTML String
 */
Template.registerHelper('content', function(){
    /* This does nothing but triggers the Meteor.Template.chunk HTML automatic update on route change */
    // console.log("******* Template.registerHelper('content'");
    Session.get('route');
    return Template[Meteor.getTemplate()];
});

Template.registerHelper('isActiveRoute', function(options){
  var cssClass = options.hash.class ? options.hash.class : 'active'
  return Meteor.request.route === options.hash.name ? cssClass : ''
});

Template.registerHelper('isActiveAction', function(options){
  var cssClass = options.hash.class ? options.hash.class : 'active'
  return Meteor.request.action === options.hash.name ? cssClass : ''
});

Template.registerHelper('isActiveTemplate', function(options){
  var cssClass = options.hash.class ? options.hash.class : 'active'
  return (Meteor.request.controller + '_' + Meteor.request.action) === options.hash.name ? cssClass : ''
});

Template.registerHelper('getRoute', function(){
  return Meteor.request.route;
});

Template.registerHelper('getReactiveRoute', function(){
  return Session.get('route');
});


Template.registerHelper('getController', function(){
  return Meteor.request.controller;
});

Template.registerHelper('getReactiveController', function(){
  return Session.get('routeController');
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
  return Meteor.request.queryString;
});

Template.registerHelper('getReactiveQueryString', function(){
  return Session.get('routeQueryString');
});

Template.registerHelper('getParam', function(name){
  return Meteor.request.queryString[name];
});

Template.registerHelper('getReactiveParam', function(name){
  if (Meteor.request.queryString[name])
    return Session.get('routeQueryString')[name];
});

