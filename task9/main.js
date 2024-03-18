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
console.log("This is the result using function using switch: "+calc("+",5,1));
// using if statement----------------------------------------------------------------------------------------------------------------------------------------
function calcUsingIfStatement(operator,a,b){
  let result;
  if (operator=="+"){
    result=a+b;
  }else if(operator=="-"){
    result=a-b;
  }else if(operator=="*"){
    result=a*b;
  }else if(operator=="/"){
    result=a/b;
  }else{
    console.log("invalid input")
  }
  return result;

}
console.log("This is the result using function using if statement: "+ calcUsingIfStatement("+",2,6));
// console.log(calcUsingIfStatement("+",2,6));


// find prime numbers from 1 to 100----------------------------------------------------------------------------------------------------------------
//function to create an array
function createNumbers(){
  let numbers=[];
  for (i=0;i<=100;i++){
    numbers.push(i)
  }
  return numbers;
}

//store the array in var numbers
var numbers=createNumbers();

//function to test if the number is a prime number
function isPrime(num){
  let primeNumber;
  if((num%1===0)&&(num%num===0)) primeNumber=true;
  for (i=2;i<num;i++){
    if (num%i===0){
      primeNumber=false;
      break;
    }
    else {
      primeNumber=true;
    }
  }
  if(primeNumber){console.log( num + " : is a prime number" )}
}

// isPrime(4);
// isPrime(11);

//here we will loop through the array  numbersand use the isPrime function

for(counter=0; counter<=numbers.length;counter++){
  isPrime(counter)
}


