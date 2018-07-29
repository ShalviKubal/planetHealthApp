/*eslint-disable */
var angular = require('angular');

var hello = require('./app/hello');

var dashboardModule = require('./app/dashboard/index');
var loginModule = require('./app/login/index');
var coreServices = require('./app/services/coreServices');

require('angular-ui-bootstrap');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.css');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', 'ui.bootstrap', 'googlechart', dashboardModule, loginModule, coreServices])
  .config(routesConfig)
  .component('app', hello)    
  .filter("groupBy",["$parse","$filter",function($parse,$filter){
  return function(array,groupByField){
    var result	= [];
            var prev_item = null;
            var groupKey = false;
            var filteredData = $filter('orderBy')(array,groupByField);
            for(var i=0;i<filteredData.length;i++){
              groupKey = false;
              if(prev_item !== null){
                if(prev_item[groupByField] !== filteredData[i][groupByField]){
                  groupKey = true;
                }
              } else {
                groupKey = true;  
              }
              if(groupKey){
                filteredData[i]['group_by_key'] =true;  
              } else {
                filteredData[i]['group_by_key'] =false;  
              }
              result.push(filteredData[i]);
              prev_item = filteredData[i];
            }
            return result;
  }
}]);
