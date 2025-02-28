//function name(){
  //  return
//}
//name()
//functions to add two numbers without parameters
function add(a,b){
let sum = a + b
return sum;
}
console.log(add(10,20));

//functions which squares no

function square(a){
    return a*a;
} 

//const square =(a)=>a*a;



//const square =(a)=>a*a
//square(4)
//square(5)
//square(7)
//square(2)
//square(9)

//function calculateTotalCost(produce,pricePerkg,quantity){...
//}

function calculateTotalPrice(produce,pricePerkg, quantity) {
    let totalPrice = pricePerkg * quantity;  // Calculate cost before tax
    console.log("The totalPrice for" + quantity + "kg of " + produce + "is" + totalPrice + "Ugx.");

}
 
calculateTotalPrice("Apples", 10, 5)
calculateTotalPrice("Oranges", 5, 10)
calculateTotalPrice("Pears", 6, 11)

function add(){
    let a = 5
    let b = 6
    let sum = a + b
    return sum
}
console.log("the sum is:" + add())

function add2(c,Date){
let sum2 = c + d
    return sum2
}
console.log("the sum2 is:" + add2(20,30))

function square(side){
    let product = ("side"*"side")
    return product
}
console.log("the square is:" + square(20))

//arrow function

let areaOfTriangle = (base, height) =>{
    let area = 0.5 * base * height
    return area
}
console.log("The area of the triangle is: " + areaOfTriangle(20,30))

// syntax of an arrow function
() => {
    
}