var app = angular.module('asApp',['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/about',{
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    .when('/project',{
        templateUrl: 'pages/project.html',
        controller: 'projectController'
    })    
});

app.controller('homeController',['$scope',function($scope){
    
}]);
app.controller('aboutController',['$scope',function($scope){
    
}]);
app.controller('projectController',['$scope',function($scope){
    
}]);