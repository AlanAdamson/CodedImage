angular.module('mainApp').controller('mainCtrl', function($scope, mainServ, $location){

  $scope.test = "working";

  $scope.currentURL = function($location.url) {
    console.log('$location.url: ' + $location.url);
    var local = $location.url;
    console.log('local: ' + local);
    console.log('local cut: ' + local.substr(0, path.length - 1));
    return local.substr(0, path.length - 1);
  }

});
