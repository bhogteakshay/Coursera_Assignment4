(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject=['$q', '$http'];
  function MenuDataService($q, $http) {

      var service = this;

      var categoryitems = [];

      // Get All Menu Categories
      service.getAllCategories =  function(){

         var deferred = $q.defer();

        var response = $http({
           method:"GET",
           url:("https://davids-restaurant.herokuapp.com/categories.json"),
         });

         deferred.resolve(response);

         return deferred.promise;
      };

      // Get Menu Items category wise
      service.getItemsForCategory = function(categoryShortName){

        var deferred = $q.defer();

       var response = $http({
          method:"GET",
          url:("https://davids-restaurant.herokuapp.com/menu_items.json"),
          params:{
            category:categoryShortName
          },
        });

        deferred.resolve(response);

        return deferred.promise;
      }
  }

})();
