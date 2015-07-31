/**
 * Redirect to another page
 * @param route
 */
Meteor.navigate = function(route) {
  console.log('*** Meteor.navigate ***');
  console.log(route);
  console.log('***********************');
  // BackboneRouter.navigate(route, {trigger: true});
  BackboneRouter.navigate(route, true);

};
