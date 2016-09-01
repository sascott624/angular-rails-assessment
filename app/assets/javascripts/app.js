angular
    .module('app', ['templates', 'ui.router'])
    .config(function($httpProvider) {

        // for CSRF errors
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');


    });
