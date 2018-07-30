/*eslint-disable */
module.exports = {
    template : require('./login.html'),
    controller : loginController,
    controllerAs : 'loginCtrl'
};

function loginController(healthMonitoringServices, $state){
    self = this;
    self.message = "Please Enter One of the Keywords";
    self.login = function(){
        console.log("calles m")
        self.errorMessage = "";
        if(self.email == ""|| self.email == null || self.email == undefined)
            self.errorMessage = "Please enter email Id";
        else if(self.password == ""|| self.password == null || self.password == undefined)
            self.errorMessage ="Please enter password";
        else{
            var promise = healthMonitoringServices.login(self.email, self.password);
            promise.then(function(response){
                    var results = response.data;
                    if(results.errorCode && results.errorCode == "healthapp.login.invalid.usernamepassword"){
                        healthMonitoringServices.setAuthenticated(false);
                        self.errorMessage ="Invalid username/password";
                    }
                    else if(results.message && results.message == "successful.login"){
                        healthMonitoringServices.setAuthenticated(true);
                        $state.go('app.dashboard');
                    }
                    else{
                        healthMonitoringServices.setAuthenticated(false);
                        self.errorMessage ="Some error occured";
                    }
                },
                function(error){
                    console.error("Some error occured");
                });
        }
    }
}
