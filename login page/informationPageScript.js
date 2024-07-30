const logoutBtn = document.getElementById("logout-btn");
//check if there is no token dont give him access to go to next page
if (!localStorage.getItem("token")) {
  window.location.href = `http://127.0.0.1:3000/login.html`;
}
//logout process-
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = `http://127.0.0.1:3000/login.html`;
});
