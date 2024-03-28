const students = [
  [1, "Dania", 18, "JS"],
  [2, "Dana", 20, "Python"],
  [3, "Hala", 19, "Css"],
  [4, "Sam", 18, "JS"],
  [5, "Dema", 20, "html"],
  [6, "John", 20, "Css"],
  [7, "Poul", 18, "JS"],
  [8, "Mike", 20, "Python"],
  [9, "Sara", 20, "Css"],
];
const button = document.querySelector(".btn");
const tableBody = document.querySelector(".table-body");

// const showData = function () {
//   console.log("clicked");
//   let str = `<tr>`;
//   for (i = 0; i < students.length; i++) {
//     for (j = 0; j < students[i].length; j++) {
//       str += `<td>${students[i][j]}</td>`;
//     }
//     console.log(str);
//     str += `</tr>`;
//   }
//   tableBody.innerHTML = str;
// };
// button.addEventListener("click", showData);

//using functional programming
button.addEventListener("click",()=>{
 fillData();
  
});
function fillData(){
let trStr="";
for(tr of students){
  trStr+=`<tr>${getCells(tr)}</tr>`;
}
tableBody.innerHTML=trStr;
}

function getCells(){
  let tdStr="";
  for(td of tr){
    tdStr+=`<td>${td}</td>`;
  }
  return tdStr;
}

