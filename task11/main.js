// document.querySelector(".odd").addEventListener("click",function(){
//   document.querySelector("tr:nth-child(odd)").computedStyleMap.backgroundColor="gray";
// })
// function oddRows(){
//   console.log("odd clicked");
//   document.querySelector(".row:nth-child(odd)").style.backgroundColor="gray";

// }
// function evenRows(){
//   console.log("even clicked");
//   document.querySelector(".row:nth-child(even)").style.backgroundColor="gray";

// }
function oddRows(){
  console.log("even clicked");
  const rows = document.querySelectorAll('table tr');

  // Loop through the rows
  for (let i = 0; i < rows.length; i++) {
    // Check if the row is odd
    if (i % 2 === 1) {
      // Set the background color of the row
      rows[i].style.backgroundColor = 'lightgray';
    }
  }

}

function evenRows(){
  console.log("even clicked");
  const rows = document.querySelectorAll('table tr');

  // Loop through the rows
  for (let i = 0; i < rows.length; i++) {
    // Check if the row is odd
    if (i % 2 !== 1) {
      // Set the background color of the row
      rows[i].style.backgroundColor = 'lightgray';
    }
  }

}