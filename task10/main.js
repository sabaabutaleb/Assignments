class School{
  constructor(sName,sType,location,numberOfClasses,numberOfStudents,numberOfTeachers){
    this.sName=sName;
    this.sType=sType;
    this.location=location;
    this.numberOfClasses=numberOfClasses;
    this.numberOfStudents=numberOfStudents;
    this.numberOfTeachers=numberOfTeachers;
  }
}
class Human{
  constructor(hName,gender,age,job){
    this.hName=hName;
    this.gender=gender;
    this.age=age;
    this.job=job;
  }
}

const school1= new School("Amman Academy","Secondary","Amman", 12, 1400,57);
const school2=new School("Omareyah","Elementary","Amman",4,600,26);
const schoo13= new School("alsalam", "Marj elhamam","Kindergarden", 7,812,15);
const person1= new Human("Ahmad","Male", 35,"Teacher");
const person2= new Human("Rama","Female",25,"Programmer");
const person3= new Human("Khalid","Male",18,"Student");

console.log(schoo13.location);
console.log(school1.sName);

console.log(`The first school is ${school1.sName}, its located in ${school1.location}, it has ${school1.numberOfStudents} students divided into ${school1.numberOfClasses} classes and it has ${school1.numberOfTeachers} teachers. It is ${school1.sType} school`);

console.log(person1.gender);
console.log(person2.hName);
console.log(person3.job, person3.age);