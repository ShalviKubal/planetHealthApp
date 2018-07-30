/*eslint-disable */
module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/login');

  var checkAuth = function ($q, healthMonitoringServices, $state) {
      var deferred = $q.defer();
      if (healthMonitoringServices.isAuthenticated()) {
          deferred.resolve();
      } else {
          deferred.reject();
          $state.go('login');
      }
      return deferred.promise;
  };
  checkAuth.$inject = ['$q', 'healthMonitoringServices', '$state'];

  $stateProvider
    .state('app', {
      url: '/planet-health',
      component: 'app',
      resolve: {
        'session': checkAuth
      }
    })
    .state('app.dashboard' , {
      url : '/dashboard',
      component : 'dashboard'
    })
    .state('login' , {
      url : '/login',
      component : 'login'
    });
}
