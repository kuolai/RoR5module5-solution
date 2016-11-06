(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
	console.log("Entering meunu.service.getMenuItems(), category= ", category);
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getMenuItem = function (short_name) {
	console.log("Entering meunu.service.getMenuItem(), short_name= ", short_name);
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json')
    .then(
      function (response) {
        return response;
      },
      function(error) {
        return error;
      }
    );
  };
}



})();
