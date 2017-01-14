angular.module('mainApp').controller('mainCtrl', function($scope, mainServ){

  $scope.test = "working";

  $scope.currentURL = $location.url().split('?')[0];

});
