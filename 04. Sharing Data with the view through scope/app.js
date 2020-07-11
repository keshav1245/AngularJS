// IIFE : Immediately invoked FunctionExpression !
//We want no Local variables bleed into the global
// scope.

(function (){
'use strict';
// var x = "hello";

angular.module("myFirstApp", [])
// module(name of the app , dependencies as array),returns module instance
.controller('myFirstController',function($scope){

// $scope : This is something reserved for angular , something that angular
// provides

  $scope.name = "Zukayu";
  $scope.sayHello = function(){
    return "Hello Coursera";
  }
  $scope.textBox = "Sample Text in Here !";


});
// .controller is used to define the view model of our view being index.html
// takes in name of the controller , function and this is now ready to be bound
// to our view

})()
