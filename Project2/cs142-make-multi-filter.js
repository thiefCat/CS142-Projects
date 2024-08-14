"use strict";

function cs142MakeMultiFilter (originalArray) {
  let currentArray = [...originalArray];
  const arrayFilterer = (filterCriteria, callback) => {
    // console.log(typeof filterCriteria);
    if (typeof filterCriteria !== "function") {
      return currentArray;
    }
    currentArray = currentArray.filter(e => filterCriteria(e));
    if (typeof callback === "function") {
      callback.bind(originalArray)(currentArray);
    }
    return arrayFilterer;
  };
  return arrayFilterer;
}




// var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);

// arrayFilterer1(function (elem) {
//   return elem !== 2; // check if element is not equal to 2
// }, function (currentArray) {
//   // 'this' within the callback function should refer to originalArray which is [1, 2, 3]
//   console.log(this); // prints [1, 2, 3]
//   console.log(currentArray); // prints [1, 3]
// });