var appArticle = angular.module('sharperSharp.articles',[  'ui.router',
    'placeholders',
    'ui.bootstrap']);

appArticle.config(function config( $stateProvider) {
    $stateProvider.state( 'articles', {
        url: '/articles',
        views: {
            "main": {
                controller: 'ArticleCtrl',
                templateUrl: 'articles/articles.tpl.html'
            }
        },
        data:{ pageTitle: 'Articles' }
    });
});


appArticle.controller('ArticleCtrl',function($scope){

});