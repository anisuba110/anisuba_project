var app = angular.module('asApp',['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/home.html',
    })
    .when('/about',{
        templateUrl: 'pages/about.html',
    })
    .when('/project',{
        templateUrl: 'pages/project.html',
    })    
});