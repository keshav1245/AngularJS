var numArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Num Array : ",numArray);


function above5(value){
  return value > 5;
}

var newArray = numArray.filter(above5);
console.log("Filtered Array : ",newArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping List: ", shoppingList);

var searchVal = "Bismol";

function containsFilter(value){
  return value.indexOf(searchVal) !== -1;
}

var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("searchedShoppingList : ",searchedShoppingList);
