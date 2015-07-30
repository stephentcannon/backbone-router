Package.describe({
  name: 'steeve:etherpos-router',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'a simple implied router based on backbone',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stephentcannon/etherpos-router',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  api.use(['templating', 'backbone', 'session'], 'client');
  
  api.addFiles([
    'base.js',
    'navigate.js',
    'request.js',
    'router.js',
    'Meteor.get_template.js',
    'helpers.js'
    ], 'client');
});


