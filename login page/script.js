const loginBTN = document.getElementById("login-btn");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const welcomLetter = document.getElementById("welcom letter");
const URL = "https://reqres.in";
const User = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};
// const User = {
//   email: email,
//   password: password,
// };

async function fetchData() {
  const res = await fetch(`${URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": " application/json" },
    body: JSON.stringify(User),
  });
  console.log(res);
  if (res.status == 200) {
    welcomLetter.textContent = `Hello ${emailInput.value}`;
    const data = await res.json();
    console.log(data.token);
    localStorage.setItem("token", data.token);
    window.location.href = `http://127.0.0.1:3000/informationPage.html`;
  }
}
//Using promise
// function fetchData() {
//   fetch(`https://reqres.in/api/login`, {
//     method: "POST",
//     headers: { "Content-Type": " application/json" },
//     body: JSON.stringify(User),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => console.log(data));
// }
loginBTN.addEventListener("click", (e) => {
  e.preventDefault();
  CheckCredentials();
  console.log("login submitted");
});

function CheckCredentials() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email === User.email && password === User.password) {
    // welcomLetter.textContent = `Hello ${email}`;
    fetchData();
  } else welcomLetter.textContent = "Invalid credentials";
}
