/*eslint-disable */
module.exports = {
    template : require('./dashboard.html'),
    controller : dashboardController,
    controllerAs : 'dashboardCtrl' 
};

function dashboardController(healthMonitoringServices, $state, $stateParams){
    
    self = this;
    self.criticalItems = [];
    self.healthParams= [];
    
     var promise = healthMonitoringServices.getHealthData();            
     promise.then(function(response){
                    self.healthParams = response.data.value;
                    for(item in self.healthParams){
                        if(self.healthParams[item].batteryvoltage <8 || self.healthParams[item].videoloss > 20 || self.healthParams[item].freedisk < 20){
                            self.criticalItems.push(self.healthParams[item])
                        }
                    console.log(self.healthParams);
                    }
                },
                function(error){
                    console.error("Some error occured");
                });
    
    setInterval(function(){
    self.criticalItems = [];
      var promise = healthMonitoringServices.getHealthData();
             promise.then(function(response){
                    self.healthParams = response.data.value;
                    for(item in self.healthParams){
                        if(self.healthParams[item].batteryvoltage <8 || self.healthParams[item].videoloss > 20 || self.healthParams[item].freedisk < 20){
                            self.criticalItems.push(self.healthParams[item])
                        }
                    console.log(self.healthParams);
                    }
                },
                function(error){
                    console.error("Some error occured");
                });
    }, 30000)
}