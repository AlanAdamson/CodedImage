angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    onEnter: function($state) {
      $state.go('about');
    },
  })

  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
  })

  .state('projects', {
    url: '/projects',
    templateUrl: './views/projects.html'
  })

  .state('work', {
    url: '/work',
    templateUrl: './views/work.html'
  })
  
  .state('404', {
    url: '/404',
    templateUrl: './views/404.html'
  });

  $urlRouterProvider.otherwise(function ($injector, $location) {
    $injector.invoke(['$state', function ($state) { $state.go('404'); }]);
    return true;
  });

  $locationProvider.html5Mode(true);
  
});
