var app = angular
  .module('Highwind', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider){
    console.log('angular working');

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
