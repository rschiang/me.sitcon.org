(function() {

  require.config({
    baseUrl: 'javascripts',
    paths: {
      jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', 'vendor/jquery-1.9.1.min'],
      mustache: 'vendor/mustache',
      markdown: 'vendor/markdown',
      backbone: 'vendor/backbone-min',
      underscore: 'vendor/underscore-min',
      text: 'vendor/require-text'
    },
    shim: {
      'jquery': {
        exports: '$'
      },
      markdown: {
        exports: 'markdown'
      },
      underscore: {
        deps: ['jquery'],
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      }
    }
  });

  require(['App'], function(App) {
    new App;
    return Backbone.history.start({
      pushState: true
    });
  });

}).call(this);
