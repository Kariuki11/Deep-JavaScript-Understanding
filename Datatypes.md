### ✅ Part 1: Core Data Types and Values

#### **1. Primitive Values**

These are immutable data that are not objects.

* **Undefined**

  * **Meaning:** A variable that has been declared but not assigned a value.
  * **Usage:** Often returned by functions that don’t return anything explicitly.
  * **Example:**

    ```js
    let x;
    console.log(x); // undefined
    ```

* **Null**

  * **Meaning:** An intentional absence of any value.
  * **Usage:** Used to reset or clear variables.
  * **Example:**

    ```js
    let user = null;
    ```

* **Boolean**

  * **Values:** `true` or `false`
  * **Example:**

    ```js
    let isActive = true;
    ```

* **Number**

  * **Includes:** integers, floats, `Infinity`, `-Infinity`, and `NaN`
  * **Details:** IEEE 754 double-precision floating point (64-bit)
  * **Example:**

    ```js
    let price = 99.99;
    let divisionByZero = 5 / 0; // Infinity
    let invalidNumber = Number("abc"); // NaN
    ```

* **BigInt**

  * **Meaning:** For arbitrarily large integers.
  * **Behavior:** Exact mathematical operations, no implicit conversion with Number.
  * **Example:**

    ```js
    const big = 1234567890123456789012345678901234567890n;
    ```

* **String**

  * **Meaning:** Text data represented as sequences of UTF-16 code units (max length 2⁵³-1)
  * **Operations:** Handle surrogate pairs carefully
  * **Example:**

    ```js
    let name = "Kenneth";
    ```

* **Symbol**

  * **Meaning:** A unique, immutable identifier. Often used as object keys to avoid naming conflicts.
  * **Special Use:** Can define well-known behaviors (e.g. iteration)
  * **Example:**

    ```js
    const sym = Symbol("id");
    const user = {
      [sym]: 123
    };
    ```

---

#### **2. Object**

* **Definition:** A collection of key-value pairs. Keys are strings or symbols, and values can be any type.
* **Property Types:**

  * **Data properties:** Directly hold values
  * **Accessor properties:** Use getter and setter functions
* **Property Attributes:** `[[Value]]`, `[[Writable]]`, `[[Get]]`, `[[Set]]`, `[[Enumerable]]`, `[[Configurable]]`
* **How it's used:** To structure complex data (like a user profile or config).
* **Example:**

  ```js
  const user = {
    name: "Kenneth",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };

  user.greet(); // Hello, my name is Kenneth
  ```

---

#### **3. Constructor**

* **Definition:** A function used to create multiple similar objects.
* **How to implement:**

  ```js
  function Person(name) {
    this.name = name;
  }

  const p1 = new Person("Kenneth");
  console.log(p1.name); // Kenneth
  ```

---

#### **4. Prototype**

* **Definition:** Every object has a hidden `[[Prototype]]` property (can be accessed via `__proto__`) which refers to another object. It’s used for inheritance.
* **Example:**

  ```js
  const animal = {
    eats: true
  };

  const dog = Object.create(animal);
  console.log(dog.eats); // true (inherited from animal)
  ```

---

### 📌 Summary of ECMAScript Data Types and Values

#### ✅ **Key Concepts for Developers to Understand:**

##### 1. Primitive Types

* **Undefined**: Single value `undefined` (default for unassigned variables)
* **Null**: Single value `null`
* **Boolean**: `true` or `false`
* **String**: UTF-16 code units (max length 2⁵³-1)
* **Symbol**: Unique, immutable values used as object property keys
* **Number**: IEEE 754 double-precision floating point (64-bit)
* **BigInt**: Arbitrary-precision integers

##### 2. Object Type

* Collections of properties (key-value pairs)
* Property types:

  * **Data properties**: Store values directly
  * **Accessor properties**: Use getter/setter functions
* Property attributes: `[[Value]]`, `[[Writable]]`, `[[Get]]`, `[[Set]]`, `[[Enumerable]]`, `[[Configurable]`]

##### 3. Important Behaviors

* **String operations**: Use UTF-16 encoding, handle surrogate pairs
* **Number operations**: Follow IEEE 754 rules, including special values (NaN, ±Infinity, ±0)
* **BigInt operations**: Exact mathematical operations, no implicit conversions
* **Type coercion**: No implicit conversion between Number and BigInt

##### 4. Well-Known Symbols

* Special symbol properties that modify object behavior (e.g., `Symbol.iterator`, `Symbol.toStringTag`)

##### 5. Internal Methods

* All objects have standard internal methods that define their behavior (e.g., `[[Get]]`, `[[Set]]`, `[[Call]]` for functions)

##### 6. Type Conversion Rules

* Explicit conversion needed between Number and BigInt
* String conversions follow specific radix rules (2-36)



Here's a breakdown of **Functions, Closures, `this`, and Execution Context**—the core of Week 2 in your ECMAScript roadmap:

---

### ✅ **Part 2: Functions, Closures, `this`, and Execution Context**

---

#### **1. Functions**

**Definition:** A reusable block of code that performs a task or returns a value.

##### Types of functions:

* **Function Declaration**

  ```js
  function greet(name) {
    return `Hello, ${name}`;
  }
  ```

* **Function Expression**

  ```js
  const greet = function(name) {
    return `Hello, ${name}`;
  };
  ```

* **Arrow Function**

  ```js
  const greet = (name) => `Hello, ${name}`;
  ```

##### Key Concepts:

* Functions are **first-class citizens** (can be assigned to variables, passed as arguments).

* **Default Parameters**

  ```js
  function greet(name = "Guest") {
    return `Hi, ${name}`;
  }
  ```

* **Rest Parameters**

  ```js
  function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  }
  ```

* **Return Values**

  ```js
  function add(a, b) {
    return a + b;
  }
  ```

---

#### **2. `this` Keyword**

**Definition:** Refers to the object that is executing the current function.

##### Behavior depends on how the function is called:

* **In global context**

  ```js
  console.log(this); // window (in browser)
  ```

* **In object method**

  ```js
  const user = {
    name: "Ken",
    greet() {
      console.log(this.name); // Ken
    }
  };
  ```

* **Arrow function**

  * Does **not** bind its own `this`; it inherits from the outer scope.

  ```js
  const person = {
    name: "Ken",
    greet: () => {
      console.log(this.name); // undefined
    }
  };
  ```

##### Manual Control:

* `call()`, `apply()`, `bind()`

---

#### **3. Closures**

**Definition:** A closure is a function that **remembers** variables from its lexical (outer) scope, even after that scope has closed.

##### Example:

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

✅ **Why it matters:** Closures enable private variables, function factories, and custom iterators.

---

#### **4. Execution Context**

**Definition:** The environment in which JavaScript code is evaluated and executed.

##### Key Phases:

1. **Creation Phase** – Hoisting happens here.
2. **Execution Phase** – Code is run line-by-line.

##### Call Stack:

* JS is single-threaded.
* Tracks function calls using a stack (LIFO).

```js
function a() {
  b();
}
function b() {
  console.log("In B");
}
a(); // Call stack: a -> b -> console
```

---

Let me know if you'd like this added to the document or want to go deeper into one of the sections (e.g., hoisting, `bind`, async stack tracing, etc.).
