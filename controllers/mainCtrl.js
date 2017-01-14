angular.module('mainApp').controller('mainCtrl', function($scope, mainServ, $location){

  $scope.test = "working";

  $scope.currentURL = function($location.url) {
    var local = $location.url;
    return local.substr(0, path.length - 1);
  }

});
