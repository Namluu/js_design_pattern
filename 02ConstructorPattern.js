function Person(name, age, job) 
{
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}

var person1 = new Person("Nam", 25, "Developer");
var person2 = new Person("Tom", 15, "Doctor");

alert(person1 instanceof Person);
alert(person1 instanceof Object);

function Person(name, age, job) 
{
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName() {
	alert(this.name);
}