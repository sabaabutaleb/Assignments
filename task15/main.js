function displayBranch1() {
  document.querySelector(".branch--2").classList.remove("active");
  document.querySelector(".branch--3").classList.remove("active");

  document.querySelector(".branch--1").classList.add("active");
}
function displayBranch2() {
  document.querySelector(".branch--2").classList.add("active");
  document.querySelector(".branch--1").classList.remove("active");
  document.querySelector(".branch--3").classList.remove("active");
}
function displayBranch3() {
  document.querySelector(".branch--3").classList.add("active");
  document.querySelector(".branch--2").classList.remove("active");
  document.querySelector(".branch--1").classList.remove("active");
}
