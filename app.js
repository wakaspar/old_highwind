var app = angular
  .module('highwind', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider){
    console.log('angular working');
  }
