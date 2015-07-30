Meteor.get_template = function() {
  // console.log('**** Meteor.get_template ****');
  // console.log('Meteor.request.controller: ' + Meteor.request.controller);
  Meteor.view = Meteor.request.controller;
 
  // console.log('Meteor.view: ' + Meteor.view);
  // console.log('Meteor.request.action: ' + Meteor.request.action);
  // console.log('Meteor.request.id: ' + Meteor.request.id);
  // console.log('Meteor.request.query: ' + JSON.stringify(Meteor.request.query) );

  Meteor.view += Meteor.request.action ? '_' + Meteor.request.action : '' ;

  try {
    if ( !_.has(Template, Meteor.view) )
      throw new Meteor.Error(404, "Not found", "The page does not exists.");
  } catch (e) {
    console.log(e);
    Template.error.informations = function () {
        return e;
    }
    return 'error';
  }

  return Meteor.view;
}