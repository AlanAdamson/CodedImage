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

  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  });

  $urlRouterProvider.otherwise('/about');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
