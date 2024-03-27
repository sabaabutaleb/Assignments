let users =
[
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        fullName: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA"
        }
    },
    {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
        fullName: "Jane Smith",
        age: 25,
        address: {
            street: "456 Elm St",
            city: "Othertown",
            state: "NY",
            zip: "54321",
            country: "USA"
        }
    }
];
let index=0;
//declaring html elements 
const userIdEl= document.getElementById("id");
const usernameEl= document.getElementById("username");
const emailEl= document.getElementById("email");
const fullNameEl= document.getElementById("fullName");
const ageEl= document.getElementById("age");
const streetEl= document.getElementById("street");
const cityEl= document.getElementById("city");
const stateEl= document.getElementById("state");
const zipEl= document.getElementById("zip");
const countryEl= document.getElementById("country");

// rendering data
userIdEl.value=users[index].id;
usernameEl.value=users[index].username;
emailEl.value= users[index].email;
fullNameEl.value=users[index].fullName;
ageEl.value=users[index].age;
streetEl.value=users[index].address.street;
cityEl.value=users[index].address.city;
stateEl.value=users[index].address.state;
zipEl.value=users[index].address.zip;
countryEl.value=users[index].address.country;
