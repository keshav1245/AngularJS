(function(){

  angular.module("LunchCheck",[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchitems = "";
    $scope.message = "";

    $scope.check = function(){
      var len = $scope.lunchitems.length;
      if (len == 0){
        $scope.message = "Please enter data first";
      }else{

        if ($scope.lunchitems.split(',').length <= 3){
          $scope.message = "Enjoy!";
        }else{
          $scope.message = "Too Much";
        }

      }
    }

  }

})();
