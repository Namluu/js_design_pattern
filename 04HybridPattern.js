function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Me", "Lee"];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        alert(this.name);
    }
};
var person1 = new Person("Tom", 25, "Developer");
var person2 = new Person("Nam", 25, "Doctor");

person1.friends.push("Van");

alert(person1.friends); //Me, Lee, Van
alert(person2.friends); //Me, Lee