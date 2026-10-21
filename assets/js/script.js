// there are two types of scoping 
//1 lexical scoping --> ap kha par pyhical avaible hoo ya puri takrika saa depend karta hai ka ap kia access kar sakta hoo

// lexical mean physical


// 2 Dynamic scoping
//kahan sa call kar rha hoon aus pa depend kara gaa kia value mila gii

let a= 12;

function abcd(){
    console.log(a);
}

function defg(){
    let a=13;
    abcd();
}

defg();

// js read code line by line 
// so they use lixical scoping method