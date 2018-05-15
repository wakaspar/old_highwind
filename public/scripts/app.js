/* Angular Application Definition - Highwind */
var app = angular
  .module('Highwind', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider){
    /* AngularJS sanity check */
    console.log('angular working');

    /* Defines AngularJS client-side routing.  When the templateUrl is reached
    by a user, the corresponding controller & template are engaged. */
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

      /* Enables HTML5 mode */
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
