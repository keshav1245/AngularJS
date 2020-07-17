(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){

    var itemAdder = this;

    itemAdder.buyListItems = ShoppingListCheckOffService.getItems(0);
    itemAdder.len = itemAdder.buyListItems.length;

    itemAdder.removeItem = function(index){
        ShoppingListCheckOffService.removeItem(index);

    }


  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){

    var bought = this;
    bought.data = ShoppingListCheckOffService.getItems(1);

    bought.boughtListItems = bought.data[0];
    bought.len = bought.data[1];



  }




  function ShoppingListCheckOffService(){
    var service = this;


    var buyListItems = [
      {
        name : "Cake",
        quantity : "10Kg"
      },

      {
        name : "Chips",
        quantity : "5 Large"
      },

      {
        name : "Maggi",
        quantity : "20 pkt"
      },

      {
        name : "Pizza",
        quantity : "4 Large"
      },

      {
        name : "Coca Cola",
        quantity : "40L"
      }

    ];

    var boughtListItems = [];

    service.getItems = function(control){
      if (control === 0)
        return buyListItems;
      else if (control === 1)
        return [boughtListItems,boughtListItems.length];

    };

    service.removeItem = function(index){

        var tempItem = buyListItems[index];
        boughtListItems.push(tempItem);
        buyListItems.splice(index,1);

    }


  }


})();
