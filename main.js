//  1-masala
// let obj = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4]
//   ]);
  
//   function deleteMany(...keys) {
//     keys.forEach(key => {
//       obj.delete(key);
//     });
//   }
  
//   deleteMany('a', 'c');
//   console.log(obj); 

// 2-masala
// let obj = new Map ([['a',2],['b',5],['c',3]])

// function mapSum(obj){
//     let sum = 0;
//     for(let [key,value] of obj){
//         sum += value;
//     }
//     return sum;
// }

// console.log(mapSum(obj));

// 3-masala
// let map1 = new Map([['apple',1],['banana',2],['orange',3]])
// let map2 = new Map([['apple',4],['orange',5],['grape',6]])

// function getMapIntersection(map1,map2){
//     let intersection = new Map();
//     for(let [key,value] of map1){
//         if(map2.has(key)){
//         }else if(map1){
//             intersection.set(key,value);
//         }
//     }
//     for(let [key,value] of map2){
//         if(map1.has(key)){
//         }else if(map2){
//             intersection.set(key,value);
//         }
//     }
//     return intersection;
// }
// console.log(getMapIntersection(map1,map2));

// 4-masala
// let obj =  ([[{id:1},'John'],[{id:2},'Jane'],[{id:3},'Alice']])
// function getMapIntersection(obj){
//     let intersection = new Map();
//     for(let [key,value] of obj){
//         intersection.set(key,value);
//     }
//     return intersection;
// }
// console.log(getMapIntersection(obj));


// 5-masala
// let set1=new Set([1,2,3])
// let set2=new Set([2,3,4])

// function setUnion(){
//     let union = new Set([...set1,...set2]);
//     return union;
// }
// console.log(setUnion(set1,set2));

// 6-masala
// let set1=new Set([1,2,3])
// let set2=new Set([2,3,4])

// function setIntersection(set1,set2){
//     let intersection = new Set();
//     for(let value of set1){
//         if(set2.has(value)){
//             intersection.add(value);
//         }
//     }
//     return intersection;
// }

// console.log(setIntersection(set1,set2));

// 7-masala
// let set1=new Set([1,2])
// let set2=new Set([1,2,3,4])

// function checkSetSubset(set1,set2){
//     let isSubset = true;
//     for(let value of set1){
//         if(!set2.has(value)){
//             isSubset = false;
//         }
//     }
//     return isSubset;
// }
// console.log(checkSetSubset(set1,set2));

// 8-masala
// let arr=[1,2,2,3,4,4,5]

// function removeDuplicates(arr){
//     let set = new Set(arr);
//     return set;
// }
// console.log(removeDuplicates(arr));

// 9-masala
// let arr1=[1,5,8]
// let arr2=[7,9,10]

// function mergeArr(arr1,arr2){
//     let mergedArr = [...arr1,...arr2];
//     return mergedArr;
// }
// console.log(mergeArr(arr1,arr2));

// 10-masala
// function concatArrays(...arrays){
//     return [].concat(...arrays)
// }
// console.log(concatArrays([1,2],[3,4],[5,6]));