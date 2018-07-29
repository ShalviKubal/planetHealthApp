/*eslint-disable */
var dashboardComponent = require('./dashboard-component.js');
var dashboardModule = 'dashboardModule';

angular.module(dashboardModule, ['googlechart'])
        .component('dashboard', dashboardComponent);

module.exports = dashboardModule;