var appProject = angular.module('sharperSharp.projects',['ui.router',
    'placeholders',
    'ui.bootstrap']);

appProject.config(function config ($stateProvider){

    $stateProvider.state('projects',{
        url: '/projects',
        views: {
            "main": {
                controller: 'ProjectCtrl',
                templateUrl: 'projects/projets.tpl.html'
            }
        },
        data:{ pageTitle: 'Projects'}
    });
});

appProject.controller('ProjectCtrl',function($scope){


});