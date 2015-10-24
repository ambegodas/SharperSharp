var appContact = angular.module('sharperSharp.contact',['ui.router',
    'placeholders',
    'ui.bootstrap']);

appContact.config(function config($stateProvider){

    $stateProvider.state('contact',{
        url: '/contact',
        views: {
            "main": {
                controller: 'ContactCtrl',
                templateUrl: 'contact/contact.tpl.html'
            }
        },
        data:{ pageTitle: 'Contact Us'}
    });
});

appContact.controller('ContactCtrl', function($scope){

});