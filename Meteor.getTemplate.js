Meteor.getTemplate = function() {
  // console.log('**** Meteor.get_template ****');
  // console.log('Meteor.request.controller: ' + Meteor.request.controller);
  Meteor.view = Meteor.request.controller;
 
  // console.log('Meteor.view: ' + Meteor.view);
  // console.log('Meteor.request.action: ' + Meteor.request.action);
  // console.log('Meteor.request.id: ' + Meteor.request.id);
  // console.log('Meteor.request.queryString: ' + JSON.stringify(Meteor.request.queryString) );

  Meteor.view += Meteor.request.action ? '_' + Meteor.request.action : '' ;
  Meteor.request.setRoute(Meteor.request.controller, Meteor.request.action);
  // console.log('Meteor.view: ' + Meteor.view);
  // console.log('**********************')
  try {
    if ( !_.has(Template, Meteor.view) ){
      Meteor.view = Meteor.request.notFound;
      if ( !_.has(Template, Meteor.view) ){
        Meteor.view = 'BackboneRouterDefault404';
        Meteor.request.setRoute('BackboneRouterDefault404');
      }
    }
  } catch (e) {
    Meteor.view = 'BackboneRouterDefault404';
    Meteor.request.setRoute('BackboneRouterDefault404');
  } finally{

    return Meteor.view;
  }
}