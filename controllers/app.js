angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    data: {
      css: '../css/style.css'
    }
  })

  .state('connect', {
    url: '/connect',
    templateUrl: './views/connect.html'
  });

  $urlRouterProvider.otherwise('/');

  // $locationProvider.html5Mode(true);

});
