/**
 * Redirect to another page
 * @param route
 */
Meteor.navigate = function(route) {

  EtherPOSRouter.navigate(route, {trigger: true});

};
