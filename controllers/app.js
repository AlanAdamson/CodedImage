angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

//   .state('home', {
//     url: '/',
//     templateUrl: './views/home.html',
//     data: {
//       css: '../css/style.css'
//     }
//   })

  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  })
  
  .state('404', {
    url: '/404',
    templateUrl: './views/404.html'
  });

  $urlRouterProvider.otherwise('/404');

//   $locationProvider.html5Mode(true);

});
