/* 
In javascript, Object is one of basic data types. 
Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
*/

function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.'
 }

 const a1 = [1, 2, 7];
 const b1 = [1, 2, 6];
 let a2 = a1.join()
 let b2 = b1.join()
 
 console.log(JSON.stringify(a1) == JSON.stringify(b1)) // compare string
  console.log(JSON.stringify(a1))
 console.log(b.toString() === a.toString());
 let z = b.toString()
 let x = JSON.stringify(b)
 function additional (num1, num2) {
    return num1 + num2;
}

function substraction (num1, num2) {
    return num1 - num2 ;
}
function mult (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}
function module (num1, num2) {
    return num1 % num2;
}

function calculator (a, b, callback) {
    return callback(a, b); //  CALLBACK
}


console.log(calculator(100, 10, (num1, num2) => num1 * num2 + 250 / 2));
console.log(calculator(100, 10, additional));