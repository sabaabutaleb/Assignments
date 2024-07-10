const API_URL = "https://reqres.in/";
const tableEl = document.querySelector(".table");
const thEl = document.getElementsByTagName("th");
const btnEl = document.querySelector(".btn");
const tbodyEl = document.getElementById("tbody");

function displayResultsOnScreen(data) {
  data.data.forEach((user) => {
    console.log("hi");
    const trEl = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = user.id;
    trEl.appendChild(idCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    trEl.appendChild(emailCell);
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = user.last_name;
    trEl.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = user.first_name;
    trEl.appendChild(lastNameCell);

    const avatarCell = document.createElement("td");
    const imgEl = document.createElement("img");
    imgEl.src = user.avatar;
    avatarCell.appendChild(imgEl);
    trEl.appendChild(avatarCell);

    tbodyEl.appendChild(trEl);
  });
}
function fetchData() {
  fetch(`${API_URL}api/users?page=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayResultsOnScreen(data);
    });
}

btnEl.addEventListener("click", fetchData);
