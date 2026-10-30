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


//this keyword value
// 1 global - window
// 2 function - window
// 3 method with es5 function - object
// 4 method with es6 arrow function - window
// 5 arrow fucntion inside es5 method - object
// 6 es5 function inside es5 method - window
// 7 event handler - element
// 8 class -blank object


// CALL APPLY BIND
//function ko call karta waqt ap set kar sakta hoo ka aus ki this ki value kia hogi

// let obj={
//     name : "harsh",
//     age : 22
// };
// function abcd(){
//     // console.log(this);
//     console.log(this.name);
// }
// abcd();
// abcd.call(obj);
//always function will be call

// let obj={
//     name : "Danish",
//     age : 23
// };
// function abcd(a,b,c){
//     // console.log(this);
//     console.log(this,a,b,c);
// }
// abcd();
// abcd.call(obj,1,2,3);

// APPLY
// Now apply is rule is that if you are sending more than one parameter apply can you will only send 2 parameter first one is
// obiect and second is your all values in an array
// abcd.apply(obj,[1,2,3]);

//BIND
//bind call ua apply ki tara function ko run nahi karta . ya aus function ki aik new copy banata hai aur aur aus ma jo by defualt this jo window retha hai aus ko change kar ka object kar deta hai
// abcd.bind(obj,1,2,3);
// let func =abcd.bind(obj,1,2,3);
// func();


//OOP

// humein seekna hai factories banana matlab,ki aap ek baar blueprint bana do har object kaisa dikhana gaa aur hum log naye naye
// objects with different values bana paayege , yahi upar upar sa OOPS ka pura kam hai


//constructor function way of making class

// function CreatePencil(name,price,color,company){

//     this.name=name;
//     this.price = price;
//     this.color=color;
//     this.company=company;

//     this.write= function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent= text;
//         h1.style.color=color
//         document.body.append(h1);
//     }
// }

// let pencil1 = new CreatePencil("d1",50,"blue","dollar");
// let pencil2 = new CreatePencil("m2",100,"black","piano");
// pencil1.write("hello");
// pencil2.write("world");

//constructor fuction are those function who start with Capital letters and to prnt the or save them we use new keyword


//syntactic sugar way (a nicer way of writing it) same as C++ and java abd a better way

// class Pencil {
//     // This is the exact same function you wrote
//     constructor(name, price, color, company) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//         this.company = company;
//     }

//     // Methods are usually added outside the constructor in class syntax
//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     }
// }

// let pencil1 = new Pencil("d1", 50, "blue", "dollar");
// let pencil2 = new Pencil("m2", 100, "black", "piano");

// pencil1.write("hello");

//Prototype class

// agar tumhara constructor fuction koi field apne prototype par attach karle to us constructor se banne  waale sabhi new instances
// yaani ki objects, ke paas wo field automatically chali jaati hai

// function CreatePencil(name,price,color){
//     this.name=name;
//     this.price=price;
//     this.color=color;
//     this.write= function(text){
//         let h1= document.createElement("h1");
//         h1.textContent=text;
//         h1.style.color="blue";
//         document.body.append(h1);
//     }
// }

// CreatePencil.prototype.company="Sheryians";

// let pencil1 = new CreatePencil("dolar",20,"blue")


// function CreatePencil(name,price,color,company){
//     this.name=name;
//     this.price=price;
//     this.color=color;
//     this.company=company;
// }

// CreatePencil.prototype.write= function(text){
//         let h1= document.createElement("h1");
//         h1.textContent=text;
//         h1.style.color=this.color;
//         document.body.append(h1);
//     }


// let pencil1 = new CreatePencil("dolar",20,"blue","dollar");
// let pencil2 = new CreatePencil("dolar",20,"blue","cigale");


// class CreatePencil{
//     constructor(name,company,color,price){
//         this.name=name;
//         this.company=company;
//         this.color=color;
//         this.price=price;
//     }
//     write(text){
//         let h1= document.createElement("h1");
//         h1.textContent=text;
//         h1.style.color=this.color;
//         document.body.append(h1);
//     }

//     erase(){
//         // document.querySelectorAll("h1").forEach(function(element){
//         // // this will not work because here this value became
//         // undefined
//         document.querySelectorAll("h1").forEach((element)=>{
//             // element.remove();//directly reomve all
//             if(element.style.color === this.color){
//                 element.remove();
//             };// reomve element according to that istance/object colo
//         })
//     }
// }


// let p1 = new CreatePencil("dolar","dollar","black",20);
// let p2 = new CreatePencil("dolar","dollar","blue",20);


//extends in class initial

// class User {
//     constructor(name,address,username,email,role){
//         this.name=name;
//         this.address=address;
//         this.username=username;
//         this.email=email;
//         this.role=role;
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent=`${this.name} : ${text}`;
//         document.body.appendChild(h1);

//     }
// }


// let u1 = new User("Danish","hyd","ddk","dd@gmail.com","user");
// u1.write("hello");
// let u2 = new User("wajahat","hyd","dwk","dw@gmail.com","user");
// u2.write("hi");

// extends class full understanding

// class User {
//     constructor(name,address,username,email){
//         this.name=name;
//         this.address=address;
//         this.username=username;
//         this.email=email;
//         this.role="user";
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent=`${this.name} : ${text}`;
//         document.body.appendChild(h1);

//     }

//     checkRole(){
//         return `You are a ${this.role}`;
//     }
// }

// class Admin extends User{
//     constructor(name,address,username,email){
//         super(name,address,username,email);
//         this.role= "admin"
//     }

//     remove(){
//         document.querySelectorAll("h1").forEach(function(element){
//             element.remove();
//         })
//     }
// }


// let u1 = new User("Danish","hyd","ddk","dd@gmail.com","user");
// u1.write("hello");
// let u2 = new User("wajahat","hyd","dwk","dw@gmail.com","user");
// u2.write("hi");
// u1.write("ma theek  ap kesa hoo");
// u2.write("ma bhi theek");
// let a1 = new Admin("Papa","hyd","Papa","Papa@gmail.com");
// a1.write("parai karo");



// INHERITANCE - class -> class

//CLASICAL INHERITANCE - IS PRESENT IN ALL LANGUAGE js, cpp, java
//extends is classical inheritance
//making classes and extends them this is called classical inheritance


// PROTOTYPAL INHERITANCE  - THIS IS ONLY IN JAVASCRIPT
//obj to obj inheritance

// let coffee={
//     color : "black",
//     drink : function(){
//         console.log("good");
//     },
// };

// let arabicaCoffee =Object.create(coffee);
// console.log(arabicaCoffee);
// arabicaCoffee.taste="sweet";
// console.log(arabicaCoffee)
// arabicaCoffee.drink();

//ek object hai aap chaaho to uski saari props/method ko inherit kara deta hoo dusra object mein

// Synchronous and Asynchronous JS

// koi bhi code js ma line by line chelaga aur ya natural pattern bhi hota hai ki code line by line chale , but kabhi kabar aise
// hota hai life mein jaha par apka code  wait karta utni der mein agla code chal gata hai

//example
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// console.log(3);
// console.log(4);
// console.log(5);


// CALLBACKS FUNCTION EXAMPLES


// asa code joo line by line chala hota  hai synchronous code
// asa code joo chalna ka lia ready hogai tab chala wo hai Asynchronous

// function aftersometime(fnc) {
//     setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// }

// aftersometime(/*from here*/function () {
//     console.log(i);
// }/*to here */);//this is callback function

// ek function ko agar aap ek aur function bhej dee raha hoo parameter ma ,  to wo parameter wala
// fuction callback function kehalata hai


// CALLBACK HELL


// function profilelekaraao(username, cb) {
//     setTimeout(() => {
//         console.log(`profile fetched of ${username}`)
//         cb("lieutienent Danish khan")
//     }, 2000)
// }
// IN REAL WORLD THIS FUNCTION WILL BE IN LIBRARY MEANS IT CAN BE ANY WHERE IN THE WORLD WE NOT KNOW BUT WE USE IT SAME AS ALERT 
// WE USE IT BUT WE NOT NOO WHERE JS DEVELOPER WRITTEN AND SAVE IT

// function profilelekaraao(username, cb) {
//     setTimeout(() => {
//         cb({_id: 97529,username,age:22,email:"ali@gmail.com"})
//     }, 2000)
// }

// profilelekaraao("danish", function (data) {
//     console.log(data);
// });
// profilelekaraao accept kar raha hai danish koo aur jab profilelekaraao danish ka data nikal laa to aus ko mera callback ma rak 
// dee (callback ma rakna ka kam bhi profilelekaraao kar raha hai) jo callback function mana beja hua hai to phir profilelekaraao 
// naa callback ma data rak dia

// function profilelekaraao(username, cb) {
//     console.log("fetching Profile Data...");
//     setTimeout(() => {
//         cb({_id: 97529,username,age:22,email:"ali@gmail.com"})
//     }, 2000)
// }

// function SareePostLekarAoo(id,cb){
//     console.log("fetching All posts...");
//     setTimeout(() => {
//         cb({_id:id,posts:["hey","hello","bye"]})
//     },3000);
// }

// function savedPostsNikaloo(id,cb){
//     console.log("fetching Saved posts...")
//     setTimeout(() => {
//         cb({_id:id,saved:[1,2,3,4,5,6,7,8,9]})
//     }, 3000); 
// }

// profilelekaraao("danish", function (data) {
//     console.log(data)
//     SareePostLekarAoo(data._id,function(posts){
//         console.log(posts);
//         savedPostsNikaloo(data.id,function(saved){
//             console.log(saved);
//         })
//     });
// });

// PROMISE

// aap ek promise banate hoo jo ki doo states ma sa ek state ma ja sakta hai and wo ya to resolve hoga ya to reject hoga ab wo kya 
// hoga ye to waqt batai gaa par humein dono ke liye code likhna hai 

let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) res("resolved with " + rn);
        else rej("reject with " + rn);
    }, 1000);
});

// pr
// .then
// (function(val){
//     console.log(val);
// })
// .catch
// (function(val){
//     console.log(val);
// });


// try and catch for Synchronous program
// then and catch for Asynchronous program
// async and await with try 


async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch (err) {
        console.log(err);
    }

}

abcd();