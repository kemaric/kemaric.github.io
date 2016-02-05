var myApp = angular.module('MySite', []);
var fireBaeUrl = "https://kemario.firebaseio.com/";
myApp.controller('mySiteCtrl', ['$scope', "$window", "firebase"], function($scope){
  $scope.ref = new Firebase(firebaseURL);
  $scope.aboutMe = "";
  $scope.education;
  $scope.interests;
  $scope.languages;
  $scope.skills;
  $scope.work;
  debug = 1;

  $scope.ref.on("value",
  function(snapshot){
    if(debug == 1)
      console.log("Getting about me: "+ snapshot.About);
    $scope.aboutMe = snapshot.About;

    if(debug == 1)
      console.log("Getting education: "+ snapshot.Education);
    $scope.education = snapshot.Education;

    if(debug == 1)
      console.log("Getting interests: "+ snapshot.Interests);
    $scope.interests = snapshot.Interests;

    if(debug == 1)
      console.log("Getting languages: "+ snapshot.Languages);
    $scope.languages = snapshot.Languages;

    if(debug == 1)
      console.log("Getting skills: "+ snapshot.Skills);
    $scope.skills = snapshot.Skills;

    if(debug == 1)
      console.log("Getting work: "+ snapshot.Work);
    $scope.work = snapshot.Work;

  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
});
