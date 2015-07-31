#etherpos-router
a simple implied router

#usage


##requirements
you must have a <b>home</b> template

by default the router routes <b>/</b> to the <b>home</b> template


##building routes
the router will attempt to route all requests to a template by name

if the template cannot be found it will route to the Meteor.request.notFound

if you do not set the Meteor.request.notFound by call EtherPOSRouter.notFound(templatename) then it will route to the packages internal EtherPOSRouterDefault404.html not found

The route expression is limited to the following.

/controller/action(/id)(?queryString)

###name
is the name of the route and will automatically render a template of that name.  Just create templates and the router will automatically render them.  It is available as Meteor.request.controller, a Session var and through a reactive and non-reactive template helper.

###action
is the action and will render a template of name.action. Just create templates of <b>name.action</b> and the router will automatically render them.  It is available as Meteor.request.action, a Session var and through a reactive and non-reactive template helper.

###id
is optional and is available as a parameter on the request controller and as a session variable along witih a reactive and non-reactive template helper.  It is available as Meteor.reqeust.id, a Session var and through a reactive and non-reactive template helper.

###queryString
is optional and is available as a parameter on the request controller and as a session variable along witih a reactive and non-reactive template helper.  It is available as Meteor.request.queryString, a Session var and through a reactive and non-reactive template helper.

Addtionally, you can get the queryString parameters from Meteor.request.params and through a reactive and non-reactive template helper.

#rendering your routes
Put this in your body somewhere and render whatever template is in the /controller or /controller/action.  See above if you do not understand.

````
{{> content}} 
````

#Meteor.request object

````
{
  controller: "items", 
  action: "update", 
  id: "a3432dafs",
  queryString: {
    name1: "value1"
  },  
}

````

#Template helpers


<h4>Non reactive</h4>
  <p>
    getController: {{getController}}<br/>
  </p>
  <p>
    getAction: {{getAction}}<br/>
  </p>
  <p>
    getId: {{getId}}<br/>
  </p>
  <p>
    getQueryString: {{getQueryString}}<br/>
  </p>
  <p>
    getParam: {{getParam "name1"}}<br/>
  </p>

  <h4>Reactive</h4>
  <p>
    getController: {{getReactiveController}}<br/>
  </p>
  <p>
    getReactiveAction: {{getReactiveAction}}<br/>
  </p>
  <p>
    getReactiveId: {{getReactiveId}}<br/>
  </p>
  <p>
    getReactiveQueryString: {{getReactiveQueryString}}<br/>
  </p>
  <p>
    getReactiveParam: {{getReactiveParam "name1"}}<br/>
  </p>

#local testing linking

* cd to your project
* mkdir packages
* ln -s /path/to/my:package packages/my:package
  * ln -s ~/projects/meteor-packages/steeve:etherpos-router packages/steeve:etherpos-router
* meteor add steeve:etherpos-router

