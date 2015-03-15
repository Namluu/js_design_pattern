function createPerson(name, age, job) 
{
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}

var person1 = createPerson("Nam", 25, "Developer");
var person2 = createPerson("Tom", 15, "Doctor");
