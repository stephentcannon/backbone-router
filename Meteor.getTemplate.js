Meteor.getTemplate = function() {
  // console.log('**** Meteor.get_template ****');
  // console.log('Meteor.request.controller: ' + Meteor.request.controller);
  Meteor.view = Meteor.request.controller;
 
  // console.log('Meteor.view: ' + Meteor.view);
  // console.log('Meteor.request.action: ' + Meteor.request.action);
  // console.log('Meteor.request.id: ' + Meteor.request.id);
  // console.log('Meteor.request.query: ' + JSON.stringify(Meteor.request.query) );

  Meteor.view += Meteor.request.action ? '.' + Meteor.request.action : '' ;
  

  try {
    if ( !_.has(Template, Meteor.view) ){

      Meteor.view = Meteor.request.notFound;
      if ( !_.has(Template, Meteor.view) ){
        Meteor.view = 'EtherPOSRouterDefault404';
      }
    }
  } catch (e) {

    Meteor.view = 'EtherPOSRouterDefault404';
  } finally{

    return Meteor.view;
  }
}