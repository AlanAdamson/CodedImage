angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

//   .state('home', {
//     url: '/',
//     templateUrl: './views/home.html',
//     onEnter: function($state) {
//       $state.go('about');
//     },
//   })

  .state('about', {
    url: '/',
    templateUrl: './views/about.html'
  })

  .state('work', {
    url: '/work',
    templateUrl: './views/work.html'
  })

  .state('404', {
    url: '/404',
    templateUrl: './views/404.html'
  });

  $urlRouterProvider.otherwise('404');

  $locationProvider.html5Mode(true);

});
