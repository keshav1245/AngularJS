(function(){

  'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController',MsgFunc);

  MsgFunc.$inject = ['$scope'];
  function MsgFunc($scope){
    $scope.name = "Keshav Tangri";
    $scope.sayMessage = function(){

      return "The quick brown fox jumps over the lazy dog";
    }

    $scope.stateOfBeing = "hungry";
    $scope.feedYaakov = function(){
      $scope.stateOfBeing = "fed";
    }

  }

})();
