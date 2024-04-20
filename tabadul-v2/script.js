const mobileReportBtnEl = document.querySelector(".mobile-report-btn");
const followReportBtnEl = document.querySelector(".following-report-btn");
const powerBiReportBtnEl = document.querySelector(".power-bi-report-btn");
const followingReportDivEl = document.querySelector(".following-report-div");
const mobileReportDivEl = document.querySelector(".mobile-report-div");
const powerBiReportDivEl = document.querySelector(".power-bi-report-div");
const welcomeMessageDivEl = document.querySelector(".welcome-message");

mobileReportBtnEl.addEventListener("click", () => {
  console.log("clicked");
  mobileReportDivEl.classList.remove("hidden");
  followingReportDivEl.classList.add("hidden");
  powerBiReportDivEl.classList.add("hidden");
  welcomeMessageDivEl.classList.add("hidden");
});
powerBiReportBtnEl.addEventListener("click", () => {
  console.log("c");
  powerBiReportDivEl.classList.remove("hidden");
  followingReportDivEl.classList.add("hidden");
  mobileReportDivEl.classList.add("hidden");
  welcomeMessageDivEl.classList.add("hidden");
});
followReportBtnEl.addEventListener("click", () => {
  followingReportDivEl.classList.remove("hidden");
  mobileReportDivEl.classList.add("hidden");
  powerBiReportDivEl.classList.add("hidden");
  welcomeMessageDivEl.classList.add("hidden");
});
