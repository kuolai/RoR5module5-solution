(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['$localStorage'];
function MyinfoController($localStorage, ApiPath) {
  var $ctrl = this;
  $ctrl.user = $localStorage.user;
  $ctrl.basePath
 };
})();