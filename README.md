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
