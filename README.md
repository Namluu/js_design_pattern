# JavaScript design pattern
-------------------------------------
- Create object
- The factory pattern
- The constructor pattern
- The prototype pattern
- The Hybrid pattern

## Create object
**Object constructor**
```php
var person = new Object();
person.name = "Nam";
person.age = 25;
person.job = "Developer";

person.sayName = function() {
    console.log(this.name);
}
```
**Object literal**
```php
var person = {
    name: "Nam",
    age: 25,
    job: "Developer",
    
    sayName: function() {
        console.log(this.name);
    }
};
```
Object literals became the preferred pattern for creating such objects
> Creating multiple objects with the same interface requires a lot of code duplication
ex: create a person “Nam”, create a person “Trung” is copy person object…
To solve this problem, developers began using the factory pattern

## The factory pattern
With no way to define classes in ECMAScript, developers created functions as a specific interfaces
```php
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
```
create multiple similar objects
```php
var person1 = createPerson("Nam", 25, "Developer");
var person2 = createPerson("Tom", 15, "Doctor");
```
> The factory pattern didn’t address the issue of object identification (what type of object an object is)
a new pattern emerged

## The constructor pattern
It is possible to define custom constructors that define properties and methods for your own type of object.
```php
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
```

Each of these objects has a constructor property that point back to Person:
```php
alert(person1.constructor == Person);
```
The _constructor_ property was used in identifying the object type

```php
alert(person1 instanceof Person);
alert(person1 instanceof Object);
```
The _instanceof_ operator is a safer way of determining type.

**Constructors as Functions**
The only difference between constructor functions and other functions is the way in which they are called. With a _new_ operator.

**Problem with constructors**
The methods are created once for each instance, many instance of functions that do the same thing.
It’s better to move the methods outside the constructor
```php
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
```
> All person instances now share the sayName() function that is defined in the global scope.
But this makes no longer nicely grouped in the code.

## The prototype pattern
```php
function Person() {
}
Person.prototype.name = "Nam";
Person.prototype.age = 25;
Person.prototype.job = "Developer";
Person.prototype.sayName = function() {
    alert(this.name);
};

var person1 = new Person();
person1.sayName();
```
Each function is created with a prototype property, which is an object containing properties and methods that should be available to instances of a particular reference type.
The benefit of using the prototype is that all of its properties and methods are shared among object instances.

If you add a property to an instance that has the same name as a property on the prototype, you create the property on the instance.
```php
var person1 = new Person();
var person2 = new Person();

person1.name = "Tom";
alert(person1.name);	//Tom
alert(person2.name);
```

**Prototype and object literal**
```php
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
```

If we don’t point the constructor to Person, the constructor will point to Object
```php
alert(friend instanceof Object); //true
alert(friend instanceof Person); //true
alert(friend.constructor == Person); //false
alert(friend.constructor == Object); //true
```

The real problem occurs when a property contains a reference value
```php
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
```

> person1 friends add new. Because the friends array exists on Person.prototype, not on person1, 
so the changes made are also reflected on person2.friends (which points to the same array)

## The Hybrid pattern
The most common way is combine the constructor and prototype
```php
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
```
Instances share constructor and the sayName() method on prototype
Instances have their own properties: name, age, friends

## Conclusion
The hybrid constructor/prototype pattern is the most widely used and accepted practice for defining 
custom reference types in ECMAScript. Generally speaking, this is the default pattern to use for 
defining reference types.
