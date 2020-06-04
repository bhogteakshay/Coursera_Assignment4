(function () {

  'use strict';

  angular.module('data')
  .controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['category'];
  function MenuCategoriesController(category){

      var categoryList = this;

      categoryList.categoryitems = [];
      categoryList.categoryitems = category;


  }

})();
