// // let x = 5;
// // console.log(x)
// //first block
// // {
// //     var x=5;
// //     let y= 6;
// //     const z=7;
// //     console.log(x)
// //     console.log(y)
// //     console.log(z)
// // }

//     // {
//     //     var x=5;
//     // let y= 6;
//     // const z=7;
    
//     // }
//     // console.log(x)
//     // console.log(y) //when we print it ofrom out the scop it will give us error
//     // console.log(z)
//     let result;
//     let num ;

//     // if(num>0){
//     //     result="positive";
//     // }else if(num<0)
//     //     {
//     //          result="negative";
//     // }else result="nutrul";
//     // // return result;
//     // result= num>0 ? "positive":"negative"
// // console.log(result)
// function TestNumber(num){
//     if(num>0){
//             result="positive";
//         }else if(num<0)
//             {
//              result="negative";
//         }else result="nutrul";
//         return result;
// }
// console.log(TestNumber(0))
// Arrays----------------------------------------------
// let fruits=['apple'];
// let fruits= new Array('apple');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// console.log(typeof(fruits))
// console.log(fruits.toString())
// console.log(fruits.length)
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML =fruits.at(-2);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;
// fruits.push("lemon")
// console.log(fruits)
// console.log(fruits.pop())
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];  
// console.log(person)
// console.log(person.length)
// console.log(person.age)


function calc(operator,a,b){
  let result;
  switch (operator) {
    case "+":{
      result=a+b;
      break;
      }          
    case "*":{
      result=a-b;
      break;
      }          
    case "*":{
      result=a*b;
      break;
      }          
    case "/":{
      result=a/b;
      break;
      }         
  
    default:{
      result="invalid input"
      break;
    }
  }
  return result;
}
calc("+",5,3);




