function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Petr", "male", 26);
let student2 = new Student("Anna", "female", 23);
let student3 = new Student("Ivan", "male", 30);
let student4 = new Student("Oleg", "male", 34);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

Student.prototype.getAverage = function () {
  let count = 0;
  this.marks.forEach(item => count += item);
  return count / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}