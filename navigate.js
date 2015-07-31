/**
 * Redirect to another page
 * @param route
 */
Meteor.navigate = function(route) {

  // BackboneRouter.navigate(route, {trigger: true});
  BackboneRouter.navigate(route, true);

};
