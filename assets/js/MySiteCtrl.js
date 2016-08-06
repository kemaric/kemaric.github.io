var myApp = angular.module('MySite');
myApp.controller('MySiteCtrl', ['$scope', 'MyService',
    function($scope, MyService) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.vm = new ViewModel();
     

    
    // $scope.Kemari = {
    //     About: {},
    //     Interests: {},
    //     Education:{},
    //     Projects: {},
    //     Contact: {},
    //     Experience:{}
    // }

     $scope.loadModel = function(){
          $scope.vm.load();
     };

      $scope.loadModel();

    // MyService.getGetModel().then(function(resp){
    //     //MyService.logSuccess(resp);
    //     var data = resp.data;
    //     vm.About = AboutMeView(data.About.details);
    //     vm.Interests = InterestView(data.Interests);
    //     vm.Edu = EduView(data.Education);
    //     vm.Work = WorkView(data.Work, data.Languages, data.Skills );

    // });
    // to take an action after the data loads, use the $loaded() promise
    // obj.$loaded().then(function() {
    //     console.log("loaded record:", obj.$id);

    // // To iterate the key/value pairs of the object, use angular.forEach()
    // console.log("Going over the key and values.");
    // angular.forEach(obj, function(value, key) {
    //     console.log(key, value);
    //     $scope[key] = value;
    // });
    // });

    // To make the data available in the DOM, assign it to $scope

    function AboutMeView(str){
        _this = this;
        _this.details = str != null? str: "No Data!";
        return _this; 
    }
    function InterestView(things){
        _this = this;
        _this.things = things != null? things:[];
        return _this; 
    }
    function EduView(arg){
        _this = this;
        _this.school = arg;
        return _this; 
    }
    function WorkView(emp, langs, skills){
        _this = this;
        _this.jobs = emp != null? emp:[];
        _this.skills = skills != null? skills:[];
        _this.langs = langs != null? langs:[];

        return _this; 
    }
    function model(){
        _this = this;
        _this.About = null;
        _this.Interests = null;
        _this.Education = null;
        _this.Projects = null;
        _this.Experience = null;
        return _this;
    }
    function ViewModel(about, hobby, edu, work, proj){
        var _this = this;
        _this.model = null;
        var myModel = new model();

        //Main parameters of the model. 
        myModel.About = about;
        myModel.Interests = hobby;
        myModel.Education = edu;
        myModel.Projects = proj;
        myModel.Experience = work;

        //This function loads the model needed for the view.
        _this.load = function(){
             MyService.getGetModel().then(function(resp){
                var data = resp.data;
                myModel.About = new AboutMeView(data.About.details);
                myModel.Interests = new InterestView(data.Interests);
                myModel.Edu = new EduView(data.Education);
                myModel.Work = new WorkView(data.Work, data.Languages, data.Skills);
                return myModel;
            });
        }


        // function getModel(){
        //     var myModel = new ViewModel();
        //     MyService.getGetModel().then(function(resp){
        //         var data = resp.data;
        //         myModel.About = new AboutMeView(data.About.details);
        //         myModel.Interests = new InterestView(data.Interests);
        //         myModel.Edu = new EduView(data.Education);
        //         myModel.Work = new WorkView(data.Work, data.Languages, data.Skills);
        //         return myModel;
        //     });
        // }
        
        _this.model = myModel;
        return _this;
    }



 
    
}
]);
