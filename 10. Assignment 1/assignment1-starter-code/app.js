(function(){

  angular.module("LunchCheck",[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchitems = "";
    $scope.message = "";
    $scope.styleMessage = "";
    $scope.styleBorder = "";

    $scope.check = function(){
      var len = 0;
      items = $scope.lunchitems.split(',');

      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() != "") {
          len += 1; //Checking for the option case 3 : item1 ,item2  , , item and item1, item2,,item3
        }
      }

      if (len == 0){
        $scope.message = "Please enter data first";
        $scope.styleMessage = {"color" : "red"}; //optional case 1
        $scope.styleBorder = {"border" : "1px solid red"}; //optional case 2
      }else{

        if (len <= 3){
          $scope.styleMessage = {
                                    "color" : "green", // optional case 1

                                };
          $scope.styleBorder = {"border" : "1px solid green"}; // optional case 2
          $scope.message = "Enjoy!";

        }else{
          $scope.styleMessage = {"color" : "green"}; // optional case 1
          $scope.styleBorder = {"border" : "1px solid green"}; // optional case 2
          $scope.message = "Too Much";

        }

      }
    }

  }

})();
