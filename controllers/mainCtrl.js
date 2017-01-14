angular.module('mainApp').controller('mainCtrl', function($scope, mainServ, $location){

  $scope.test = "working";

  var local = $location.url;
  $scope.currentURL = getLocal(local);
  var getLocal = function(local) {
    console.log('$location.url: ' + $location.url);
    console.log('local: ' + local);
    console.log('local cut: ' + local.substr(0, path.length - 1));
    return local.substr(0, path.length - 1);
  }

});
