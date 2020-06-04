(function () {

  'use strict';

  angular.module('data')
  .controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item'];
  function ItemDetailController(item) {

      var menudetail = this;
      menudetail.menuitems = item;
  }

})();
