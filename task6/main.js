// --------------------------------If STATEMENT----------------------------------------

let dayOfWeek;
let dayNumber = prompt("please enter the day number: ");

if (dayNumber == 1) {
  dayOfWeek = "Sunday";
} else if (dayNumber == 2) {
  dayOfWeek = "Monday";
} else if (dayNumber == 3) {
  dayOfWeek = "Tuesday";
} else if (dayNumber == 4) {
  dayOfWeek = "Wednesday";
} else if (dayNumber == 5) {
  dayOfWeek = "Thurseday";
} else if (dayNumber == 6) {
  dayOfWeek = "Friday";
} else if (dayNumber == 7) {
  dayOfWeek = "Saturday";
} else {
  console.log("you have a wrong day, the week days from 1 to 7: try again");
}
console.log(dayOfWeek);
// ------------------------------------SWITCH STATEMENT-------------------------------------------------------------------

let month;
let monthNumber = 13;

switch (monthNumber) {
  case 1: {
    month = "January";
    break;
  }
  case 2: {
    month = "February";
    break;
  }
  case 3: {
    month = "March";
    break;
  }
  case 4: {
    month = "April";
    break;
  }
  case 5: {
    month = "May";
    break;
  }
  case 6: {
    month = "June";
    break;
  }
  case 7: {
    month = "July";
    break;
  }
  case 8: {
    month = "August";
    break;
  }
  case 9: {
    month = "September";
    break;
  }
  case 10: {
    month = "October";
    break;
  }
  case 11: {
    month = "November";
    break;
  }
  case 12: {
    month = "December";
    break;
  }

  default:
    console.log("invalid month, try again");

    break;
}
console.log(month);
