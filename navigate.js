/**
 * Redirect to another page
 * @param route
 */
Meteor.navigate = function(route) {

  Router.navigate(route, {trigger: true});

};
