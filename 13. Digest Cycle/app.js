(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

  $scope.onceCounter =0 ;
  $scope.counter =0 ;

  $scope.showNumberOfWatchers = function () {
    console.log($scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function(){
    $scope.counter += 1;
  };

  $scope.$watch('onceCounter',function(newVal,oldVal){
    console.log('old : '+oldVal);
    console.log('new : '+newVal);
  });

  $scope.$watch('counter',function(newVal,oldVal){
    console.log('old : '+oldVal);
    console.log('new : '+newVal);
  });



}

})();
