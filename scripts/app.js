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
      .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'PortfolioController'
      })
      .when('/art', {
        templateUrl: 'templates/art.html',
        controller: 'ArtController'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
      })


      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
