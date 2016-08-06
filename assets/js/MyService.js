var myApp = angular.module('MySite');
var data = {d: null};
myApp.service('MyService',['$log', '$http', function($log, $http){
    _this = this;
    _this.logError = function(str){
        $log.log("Error: "+ str);
        return str;
    }
    
    _this.logSuccess = function(str){
            $log.log("Success: "+ str.data);
            return str;
    }
    _this.getGetModel = function(){
        return $http.get("assets/MyData.json").then(_this.logSuccess, _this.logError);
    }
    return _this;
}]);     

