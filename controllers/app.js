angular.module('mainApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    redirectTo: 'about'
  })

  .state('about', {
    url: '/about',
    templateUrl: './views/about.html'
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
  
  .run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
  
});
