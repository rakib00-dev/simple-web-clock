function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new person('Jhan', 'Doe', '4-3-1980');
const person2 = new person('Hasan', 'Khan', '2-1-2000');

// console.Log(person2);
