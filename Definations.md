**Essential ECMAScript Terms**

Below is a breakdown of the most important ECMAScript terms with their meanings, usage, and examples in JavaScript. These are core to understanding how JavaScript (the language based on ECMAScript) works.

---

### 1. **Primitive Value**

* **Definition**: A datum represented directly at the lowest level.
* **Types**: `undefined`, `null`, `boolean`, `number`, `bigint`, `string`, `symbol`
* **Example**:

```js
const name = "Kenneth"; // string primitive
const isActive = true; // boolean primitive
```

---

### 2. **Object**

* **Definition**: A collection of key-value pairs with an optional prototype.
* **Usage**: Stores structured data and functionality (methods).
* **Example**:

```js
const person = {
  name: "Kenneth",
  age: 25,
  greet() {
    console.log("Hello!");
  }
};
person.greet();
```

---

### 3. **Constructor**

* **Definition**: A function that creates and initializes objects.
* **Example**:

```js
function Person(name) {
  this.name = name;
}
const user = new Person("Kenneth");
```

---

### 4. **Prototype**

* **Definition**: Shared object that provides inherited properties/methods.
* **Usage**: Enables inheritance in JS.
* **Example**:

```js
Person.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}`);
};
user.sayHi();
```

---

### 5. **Ordinary Object**

* **Definition**: An object with default behavior (like `Object`, `Array`, etc.)
* **Example**:

```js
const obj = { a: 1 }; // ordinary object
```

---

### 6. **Exotic Object**

* **Definition**: An object with custom behavior (like `Proxy` or DOM objects).
* **Example**:

```js
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'Not Found';
  }
};
const proxy = new Proxy({}, handler);
console.log(proxy.name); // "Not Found"
```

---

### 7. **Built-in Object**

* **Definition**: Objects provided by ECMAScript itself.
* **Examples**: `Array`, `Function`, `Date`, `Math`, `JSON`
* **Example**:

```js
console.log(Math.random());
console.log(JSON.stringify({ a: 1 }));
```

---

### 8. **Undefined Value / Type**

* **Definition**: A variable that has been declared but not assigned.
* **Example**:

```js
let x;
console.log(x); // undefined
```

---

### 9. **Null Value / Type**

* **Definition**: Represents the intentional absence of any object value.
* **Example**:

```js
let user = null;
```

---

### 10. **Boolean Value / Type**

* **Values**: `true`, `false`
* **Example**:

```js
let isComplete = false;
```

---

### 11. **String Value / Object**

* **Primitive**: `"Hello"`
* **Object Form**: `new String("Hello")`
* **Example**:

```js
const msg = "Hello, World!"; // primitive
const msgObj = new String("Hello, World!"); // object
```

---

### 12. **Number Value / Object**

* **Primitive**: `42`, `3.14`, `NaN`, `Infinity`
* **Example**:

```js
const age = 30;
console.log(Number.isNaN(NaN)); // true
```

---

### 13. **BigInt Value / Object**

* **Usage**: For arbitrarily large integers.
* **Example**:

```js
const big = 1234567890123456789012345678901234567890n;
```

---

### 14. **Symbol Value / Object**

* **Usage**: Unique and immutable property keys.
* **Example**:

```js
const sym = Symbol("id");
const user = { [sym]: 123 };
```

---

### 15. **Function / Method**

* **Function**: A callable object.
* **Method**: A function that is a property of an object.
* **Example**:

```js
function greet() {
  return "Hello";
}
const obj = { greet };
obj.greet(); // method call
```

---

### 16. **Property / Own Property / Inherited Property**

* **Property**: Key-value pair in an object.
* **Own**: Belongs directly to the object.
* **Inherited**: From the object's prototype.
* **Example**:

```js
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // inherited
console.log(dog.barks); // own
```

---

### 17. **Built-in Function / Constructor / Method**

* **Function**: `parseInt`, `isNaN`
* **Constructor**: `Array`, `Function`, `Object`
* **Method**: `Array.prototype.map`, `String.prototype.slice`
* **Example**:

```js
const nums = [1, 2, 3];
console.log(nums.map(n => n * 2));
```

---

This summary helps you understand and use ECMAScript’s foundational concepts practically as a JavaScript developer.
