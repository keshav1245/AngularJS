(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope','$timeout'];
function CounterController($scope,$timeout) {
  $scope.counter = 0;

  // $scope.upCounter = function () {
  //   setTimeout(function(){
  //     $scope.counter++;
  //     console.log("Counter Incremented !");
  //     $scope.$digest(); //Because Timeout is not in angular context
  //   },2000);
  // };

  // $scope.upCounter = function () {
  //   setTimeout(function(){
  //     $scope.$apply(function(){ // will catch exceptions and will be in angu scope
  //       $scope.counter++;
  //       console.log("Counter Incremented !");
  //     });
  //   },2000);
  // };

  $scope.upCounter = function () {
    $timeout(function(){
      $scope.counter++;
      console.log("Counter Incremented !");
    },2000);
  };


}

})();
