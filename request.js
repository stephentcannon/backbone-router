/**
 * Request Class
 * @property {string} controller The current request controller
 * @property {string} action     The current request action
 * @property {string} id         The id of the current item in the orl
 * @property {string} query      The current request query
 * @property {string} notFound
 */
var Request = Base.extend({
    constructor: function() {
        
    },

    setController: function( controller ) {
        // console.log('*** Request.setController ***');
        // console.log('controller: ' + controller);
        this.controller = controller;
    },
    setNotFound:function(name){
      this.notFound = name;
    },
    setAction: function( action ) {
        this.action = action;
    },
    setId: function(id){
        this.id = id;
    },  
    setQueryString: function( query ) {
        if (query) {
            var query_object = {};
            query.replace(
                new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                function($0, $1, $2, $3) { query_object[$1] = $3; }
            );
        }
        
        // for(var propt in query_object){
        //   this.pushParam(propt, query_object[propt]);
        // }
        this.queryString = query_object;

    },

    // pushParam: function(key, value ) {
    //     this.params[key] = value;
    // },

});

Meteor.request = new Request;
