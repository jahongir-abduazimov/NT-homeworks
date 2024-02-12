// 1-masala

// function createHelloWorld() {
//     return function() {
//       return "Hello World";
//     };
//   }

// const helloWorldFunction = createHelloWorld();
// console.log(helloWorldFunction());


// 2-masala 

// function createCounter(n) {
//     return function() {
//       return n++;
//     };
//   }
  
//   const counterFunc = createCounter(5);
//   console.log(counterFunc());
//   console.log(counterFunc());
//   console.log(counterFunc());
  


// 5-masala

// function applyMapping(arr, fn) {
//     let transformedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       transformedArray[i] = fn(arr[i], i);
//     }
//     return transformedArray;
//   }
//   let arr = [1, 2, 3, 4, 5];
//   let mappedArray = applyMapping(arr, function(element, index) {
//     return element * index;
//   });
  
//   console.log(mappedArray);
  
// 6-masala

// function applyFilter(arr, fn) {
//     let filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (fn(arr[i], i)) {
//         filteredArr.push(arr[i]);
//       }
//     }
//     return filteredArr;
//   }
  
//   let arr = [1, 2, 3, 4, 5];
//   let filteredArray = applyFilter(arr, function(element, index) {
//     return element > 2 && index % 2 === 0;
//   });
  
//   console.log(filteredArray);
  
