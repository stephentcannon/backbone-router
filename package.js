Package.describe({
  name: 'steeve:backbone-router',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'a simple implied router based on backbone',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stephentcannon/backbone-router',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  api.use(['templating', 'backbone', 'session'], 'client');
  
  api.addFiles([
    'BackboneRouterDefault404.html',
    'base.js',
    'navigate.js',
    'request.js',
    'router.js',
    'Meteor.getTemplate.js',
    'helpers.js'
    ], 'client');

  api.export('BackboneRouter');
});


