// (function(){
//   'use strict';
//
//   angular.module('DIApp',[])
//   .controller('DIController', ['$scope', '$filter' ,DIController]);
//
//    function DIController($scope , $filter , $injector){
//
//     $scope.name = "Zukayu";
//
//     $scope.upper = function(){
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     }
//
//   }
//
// })();

// !function(){"use strict";angular.module("DIApp",[]).controller("DIController",function(n,e,u){n.name="Zukayu",n.upper=function(){var u=e("uppercase");n.name=u(n.name)}})}();
// // will give error as it has removed the $scop and $filter names from the code


// !function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(e,n,r){e.name="Zukayu",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}])}();
// This wont give error because we have already specified scope names as string
// Minifier wont change string literals as it is real data.


// (function(){
//   'use strict';
//
//   angular.module('DIApp',[])
//   .controller('DIController', DIController);
//
//   DIController.$inject = ['$scope' , '$filter'];
//
//    function DIController($scope , $filter , $injector){
//
//     $scope.name = "Zukayu";
//
//     $scope.upper = function(){
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     }
//
//   }
//
// })();
//

!function(){"use strict";function e(e,n,r){e.name="Zukayu",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
