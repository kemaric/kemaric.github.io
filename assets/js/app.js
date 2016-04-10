var myApp = angular.module("MySite", ["firebase", 'ngAnimate', 'ui.bootstrap']);
var firebaseURL = "https://kemario.firebaseio.com";
var debug = true;

myApp.controller("MySiteCtrl", ["$scope", "$firebaseObject",
  function($scope, $firebaseObject) {
     var ref = new Firebase(firebaseURL);
     $scope.myInterval = 5000;
     $scope.noWrapSlides = false;
     $scope.active = 0;
     var obj = $firebaseObject(ref);
     // to take an action after the data loads, use the $loaded() promise
     obj.$loaded().then(function() {
        console.log("loaded record:", obj.$id);

       // To iterate the key/value pairs of the object, use angular.forEach()
       console.log("Going over the key and values.");
       angular.forEach(obj, function(value, key) {
          console.log(key, value);
          $scope[key] = value;
       });
     });

     // To make the data available in the DOM, assign it to $scope
     $scope.data = obj;

     // For three-way data bindings, bind it to the scope instead
     //obj.$bindTo($scope, "data");
  }
]);
