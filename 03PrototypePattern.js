function Person() {
}
Person.prototype.name = "Nam";
Person.prototype.age = 25;
Person.prototype.job = "Developer";
Person.prototype.sayName = function() {
	alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "Tom";
alert(person1.name);
alert(person2.name);

function Person(){
}
Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function () {
		alert(this.name);
	}
};
var friend = new Person();
alert(friend instanceof Object); //true
alert(friend instanceof Person); //trues
alert(friend.constructor == Person); //false
alert(friend.constructor == Object); //true

function Person(){
}
Person.prototype = {
	constructor: Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function () {
		alert(this.name);
	}
};
alert(friend.constructor == Person); //true

function Person(){
}
Person.prototype = {
	constructor: Person,
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	friends: ["Trung", "Mai"],
	sayName : function () {
		alert(this.name);
	}
};
var person1 = new Person();
var person2 = new Person();

person1.friends.push("Van");

alert(person2.friends); //Trung, Mai, Van