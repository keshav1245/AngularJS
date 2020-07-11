(function(){
  'use strict';

  angular.module('DIApp',[])
  .controller('DIController', DIController);

   function DIController($scope , $filter , $injector){

    $scope.name = "Zukayu";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }


    console.log($injector.annotate(DIController));

  }

  function Sample(name , job , blah){
    return "Blah !";
  }

  console.log(DIController.toString());


})();
