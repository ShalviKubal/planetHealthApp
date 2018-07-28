/*eslint-disable */
var loginComponent = require('./login-component.js');
var loginModule = 'loginModule';

angular.module(loginModule, [])
        .component('login', loginComponent);

module.exports = loginModule;