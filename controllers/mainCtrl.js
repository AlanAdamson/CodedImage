angular.module('mainApp').controller('mainCtrl', function($scope, mainServ, $location){

  $scope.test = "working";

  $scope.currentURL = $location.url().split('?')[0];

});
