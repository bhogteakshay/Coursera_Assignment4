(function () {


  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

     $urlRouterProvider.otherwise('/');

     $stateProvider
     .state('home',{
       url:'/',
       templateUrl:'src/template/menuapp.home-template.html'
     })

     .state('categories',{
       url:'/categories',
       templateUrl:'src/template/menuapp.menuCategory-template.html',
       controller:'MenuCategoriesController as categoryList',
       resolve:{
         category: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {

                  return MenuDataService.getAllCategories()
                  .then(function (categoryList) {
                              return categoryList.data;
                  });
            }]
       }
     })

     .state('items',{
       url:'/items/{categoryShortName}',
       templateUrl:'src/template/menuapp.menuItems-template.html',
       controller:'ItemDetailController as menudetail',
       resolve:{
         item: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {

                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                  .then(function (items) {
                              return items.data.menu_items;
                  });
            }]
       }
     });
  }

})();
