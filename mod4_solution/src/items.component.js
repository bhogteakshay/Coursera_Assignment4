(function () {

  'use strict';

  angular.module('data')
  .component('items', {
      templateUrl:'src/menuItemsListing.template.html',
      bindings:{
        menuitems:'<'
      }
  })

})();
