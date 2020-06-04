(function () {

  'use strict';

  angular.module('data')
  .component('categories', {
      templateUrl:'src/menuCategoriesListing.template.html',
      bindings:{
        categoryitems:'<'
      }
  })

})();
