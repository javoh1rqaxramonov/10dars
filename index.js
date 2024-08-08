// let arr = 'apple orange banana';
// let resarr = arr.split(' ');

// let res = resarr.map(function(value){
//     return value[0].toUpperCase()+value.slice(1);
// })
// console.log(res.join(" "));

// let user = {
//     name : 'john',
//     age : -1,
//     phone : ['+998905371070','+9985371010'],
// }
// delete user.phone[1];
// console.log(user);
// let sum =0;
// let newarr = [];
// let users = [
//     {name:"john",age:32},
//     {name:"alex",age:32},
//     {name:"john",age:32},
// ];
// users.find(function(value){
//     if (value.name=="alex") {
//         newarr.push(value.name);
//     }
// })
// console.log(newarr);

// 1-masala
// let str = 'salomat';
// function test(str) {
//     let counter = 0;
//     for (let i = 0; i< str.length; i++) {
//         if (str[i]=='a') {
//           counter++;  
//         }
   
//     }
//     return counter;
// }

// 2-masala 
// let str = 'salom';
// function test(arg) {
//     if (arg.length<3) {
//         return arg;
//     }
//     return arg.slice(-3);
// }
// console.log(test(str));

// 3-masala
// let str = 'salom hammaga';
// function test(str) {
//     return str
//         .split(' ')  
//         .map(word => 
//             word.charAt(0).toUpperCase() + word.slice(1)  
//         )
//         .join(' ');  
// }


// console.log(test(str));

// 4-masala 
// let str = 'assalom akaykum';
// function test(str) {
//     return str.replace(' ','');

// }
// console.log(test(str));

// 5-masala 
// let str = 'salom';
// function test(str) {
//     let res = str.split('').reverse().join('');
//     return res;
// }
// console.log(test(str));

// 6-masala 
// let str = 'salom';
// function test(arg) {
//     return arg.length;
// }

// console.log(test(str)); 


// 7-masala
// let str = ' salom';
// function test (str){
//     return str.repeat(3);
// }
// console.log(test(str));

// 8-masala 
// let str = 'salom145'
// function test(str) {
//     let arr = [];
//     for (const iterator of str) {
//         if (iterator>0) {
//             arr.push(iterator);
//         }
//     }
//     return arr;
// }
// console.log(test(str));

// 9-masala 
// let str = 'salom dunyo hello world';
// function test(arg) {
//     let res = arg.split(' ');
//     return res[0];
// }
// console.log(test(str));

// 1-masala 
// let arr = [1,2,4,5,9,0,6,8];
// function test(arg) {
//     let res = arg.sort((a, b) => a - b).reverse();
//     return res[0] ;
// }
// console.log(test(arr));

// 2-masala 
// let arr = [1,2,3,4,6,78];
// function test(arg) {
//     let res = arg.filter(function(value){
//        return value%2==0;
//     })
// }
// console.log(test(arr));

// 3-masala 
// let arr = [1,2,3,4,6,7,8];
// function test(arg) {
//     let sum = 0;
//     for (const iterator of arg) {
//         sum+=iterator;
//     }
//     return sum;
// }
// console.log(test(arr));

// 4-masala 
// let arr = [1,2,3,4,6,7,8];
// function test(arg) {
//     let res = arg.map(function(value){
//         return value*2;
//     })
//     return res;
// }
// console.log(test(arr));

// 5-masala 
// let arr = [1,2,3,4,5,6,7,8];
// function test(arg) {
//     let res = arg.filter(function(value){
//         return value>=0
//     })
//     return res;
// }
// console.log(test(arr));

// 6-masala 
// let arr = [1,2,3,2,4,5,2,7];
// let res =  [];
// arr.forEach(function (value,index){
//     let isExist = arr.find(function(valueF,indexF){
//         return value == valueF && index != indexF
//     })
//     if (!isExist) {
//        res.push(value) 
//     }
//     return res
// })
// console.log(res);

// 7-masala 
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [0,9,8,7];
// function test(arg1,arg2) {
//     return arg1.concat(arg2);
// }
// console.log(test(arr1,arr2));

// 8-masala 
// let arr = [1,2,3,4,5,6,7,8];
// function test(arg) {
//     return   arg.reverse();
// }
// console.log(test(arr));

// 9-masala 
// let arr = [1,2,3,4,5,6,7,8,9,0];
// function test(arg) {
//     let res = arg.filter(function(value,index){
//         return index%2==1;
//     })
//     return res;
// }
// console.log(test(arr));

// 10-masala 
// let arr = [1,2,3,4,6,7,8];
// function test(arg) {
//     let sum =0 ;
//     let counter =0 ;
//     let res =0 ;
//     for (let i = 0; i < arg.length; i++) {
//         sum+=arg[i];
//         counter++;
//         res=(sum/counter);
//     }
   
//     return res;
// }
// console.log(test(arr));
