// // ----------------------task1-----------------------------------------------
// let dayNumber;
// function retreiveDay(dayNumber){
//   let result;
//   switch(dayNumber){
//     case 1:{
//       result="Sunday";
//       break
//     }
//     case 2:{
//       result="Monday";
//       break;
//     }
//     case 3:{
//       result="Tuesday";
//       break
//     }
//     case 4:{
//       result="Wdnesday";
//       break;
//     }
//     case 5:{
//       result="Thursday";
//       break;
//     }
//     case 6:{
//       result="Friday";
//       break;
//     }
//     case 7:{
//       result="Saturday";
//       break;
//     }
//     default:{
//       result="Invalid day number; Week days from are (1-7), please try again.";
//       break
//     }
//   }
//   return result;
// }

// console.log(retreiveDay(9));

// ------------------task 2 Even numbers from 1-50--------------------
//note if we donot consider 0 an even number we will start our loop from 1
// 1.for loop
// function evenNumbers(){
//   for(i=0;i<=50;i++){
//     if(i%2==0){
//       console.log(i)
//     }
//   }
// }


// 2 while
// function evenNumber(){
//   let i=0;
//   while(i<=50){
//     if (i%2==0){
//       console.log(i);
//     }
//     i++;
//   }
// }
// evenNumbers();
// // 3.do while
// function evenNum(){
//   let i=0;
//   do{
//     if (i%2==0){
//       console.log(i);
//     }
//     i++;
//   }while(i<=50);
// }
// evenNum();

// ----------------task 3  divisible by 3 from 1-100

// function divisibleByThree(){
//   for (i=0;i<=100;i++){
//     if (i%3===0){
//       console.log(`${i} is divisible by 3`);
//     }
//   }
// }
// divisibleByThree();