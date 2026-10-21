// there are two types of scoping 
//1 lexical scoping --> ap kha par pyhical avaible hoo ya puri takrika saa depend karta hai ka ap kia access kar sakta hoo

// lexical mean physical


// 2 Dynamic scoping
//kahan sa call kar rha hoon aus pa depend kara gaa kia value mila gii

// let a= 12;

// function abcd(){
//     console.log(a);
// }

// function defg(){
//     let a=13;
//     abcd();
// }

// defg();

// js dynamic is dynamic scoped so the ansewer will be 13 because a=13 in defg() but because it is lexical scope it will goto
//abcd() function if this function has value of 'let a' so it will take abcd() function value for a but because this func has no
//  value of a it will check global value for a and put that valur which is 12

// js read code line by line 
// so they use lixical scoping method


// closures in js

//ya sahi bath hai ka function ka khatam hona paa aus ka func and var khatam hojata hain par jab closure hota ya function ka 
// khatam hona ka bad bhi aun ka aik backlink banaya jata ahai jsa [[environment]] ketha hain

//faida
// 1 private vaible 
// 2 global polution

//example 1

// function abcd(){
//     let a =12;
//     return function (){
//         console.log(a)
//     }
// }

// let func= abcd();
// func();


// example 2

// function createShoppingBag() {
//   let bag = []; // This is your private bag

//   return function(item) {
//     bag.push(item); // Put the new item into the bag
//     console.log("Your bag now has:", bag);
//   };
// }

// // 1. You get your bag
// const myBag = createShoppingBag();

// // 2. You go shopping later (the store is long gone, but your bag remembers!)
// myBag("Apple");   // Output: Your bag now has: ["Apple"]
// myBag("Banana");  // Output: Your bag now has: ["Apple", "Banana"]
// myBag("Chocolate");// Output: Your bag now has: ["Apple", "Banana", "Chocolate"]


//example 3

// function countForMe(){
//     let c=0;
//     return function(){
//         c++;
//         console.log(c)
//     }
// }

// let func=countForMe(); // here it only return function not give backlink value
// func();// here it will give backlink value
// func();
// func();
// func();


// let func2=countForMe(); // here it only return function not give backlink value and 
// func2();// here it will give backlink value
// func2();
// func2();
// func2();

// every time you assign countForMe in a new variable and make it return function it will create new space in the memory for 
// that backlink new access mean always when you run countforme it will always make new c for that function

//example 4 closure in encapsulation

// function clicklimiter(){
//     let click=0;
//     return function(){
//         if(click <5){
//             click++
//             console.log(`clicked : ${click} times `)
//         }
//         else{
//             console.log("LIMIT EXCEDDED, TRY AFTER SOME TIME")
//         }
//     }
// }

// let func=clicklimiter()
// func();
// func();
// func();
// func();
// func();
// func();


//now the click inside the fuc clicklimiter is private you can not access it out side the function you can now only access
//  or use it through closure not original one its backlinks 


//THIS KEY WORD

// this keyword is special keyword,jassie ka baki saari value ya aun ka nature same retha hai "this"
//  keyword ka value ar nature badal jata hai is baat sa ka ap ausa kahan use kar raha hoo

//global scope
//window - prime minister - supreme
// console.log(this);

//function scope / function ka andar
// function abcd(){
//     console.log(this);
// }

// abcd();

//A function inside a object is called method
//method scope
// let obj = {
//     name: "Danish",
//     age : 23,
//     sayName: function(){
//         console.log(this.name);
//     },
// };

// obj.sayName();

// let obj = {
//     name: "Danish",
//     age : 23,
//     sayName: function(){
//         function defg(){
//         console.log(this);
//         }
//         defg();
//     },
// };

// obj.sayName();


//arrow fuction scope
// let obj = {
//     name: "Danish",
//     age : 23,
//     sayName: () =>{
//         console.log(this.name);
//     },
// };

// obj.sayName();
// this keyword lose his value




//event handler scope / event handler ka andar
// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this.style.color = "blue");
// })

// //class scope
// class Abcd{
//     constructor(){
//         console.log("Danish");
//         this.a=15;
//     }
// }

// let val = new Abcd();
//new Abcd(); make blank object

