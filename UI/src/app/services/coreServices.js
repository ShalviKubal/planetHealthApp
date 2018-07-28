/*eslint-disable */
var coreServices = "coreServices";

angular.module(coreServices, [])
    .service('healthMonitoringServices',function($http){
        self = this;
        var name = "Shalvi";
        return {
            login : function(email,password){
                var data = {
                    'email': email,
                    'password': password
                };
                var result = $http.post("http://localhost:8000/login",data,{});
                return result;
            },
            getHealthData : function(){
                var result = $http.get("http://localhost:8000/getHealthData");
                return result;
            }
            
        }
    });

module.exports = coreServices;
