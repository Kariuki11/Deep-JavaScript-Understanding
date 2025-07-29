## **Introduction to JavaScript (According to ECMAScript)**

### What is ECMAScript?

**ECMAScript (ES)** is the **standardized specification** that defines how the **core scripting language** behaves. JavaScript is the **most widely known implementation** of this specification.

* Defined in the **ECMA-262 standard**, maintained by **Ecma International**.
* Updated yearly (e.g., ES5, ES6/ES2015, ES2023, ES2025…).
* JavaScript engines like **V8 (Chrome/Node.js)**, **SpiderMonkey (Firefox)**, and **JavaScriptCore (Safari)** all implement ECMAScript.

> Think of ECMAScript as the **blueprint**, and JavaScript as the **construction** built from it.

---

###  What ECMAScript Covers (vs What It Doesn’t)

| Covered by ECMAScript                       | Not Covered (Host APIs)                         |
| ------------------------------------------- | ----------------------------------------------- |
| Language grammar & syntax                   | DOM (`document`, `window`, `alert`, etc.)       |
| Variable declarations, functions            | Browser events like `onclick`, `fetch`, etc.    |
| Data types and coercion rules               | Node.js APIs like `fs`, `require`, `process`    |
| Control flow (`if`, `for`, `switch`)        | Console (`console.log`) – implemented by host   |
| Functions, closures, `this`, `new`          | Web APIs like `localStorage`, `WebSocket`, etc. |
| Error handling (`try/catch/throw`)          | `setTimeout`, `setInterval`                     |
| Objects, Arrays, Built-ins (`Math`, `JSON`) | HTTP requests, File systems, UI elements        |
| Prototype-based inheritance                 | DOM events or APIs                              |
| Modules (`import` / `export`)               | Webpack, Babel, React, etc. (tools & libs)      |

So when you learn **core JavaScript**, you're really learning **ECMAScript**.

---

## 🔹 **Shallow Introduction to JavaScript (Core ECMAScript Basics)**

### 1. **Syntax & Structure**

Defined by ECMAScript:

```js
let name = "Kenneth";  // variable declaration
const age = 25;        // constant value
```

* Semicolons `;` are optional but recommended.
* Comments: `// single-line`, `/* multi-line */`

---

###  2. **Types (Primitives & Objects)**

According to ECMAScript, JavaScript has:

#### 🔸 Primitive Types:

* `undefined`
* `null`
* `boolean`
* `number`
* `string`
* `symbol` (ES6)
* `bigint` (ES2020)

```js
let isActive = true;
let price = 100.5;
let fullName = "Ken";
```

#### 🔸 Objects (including functions and arrays):

```js
let person = { name: "Ken", age: 25 };
let numbers = [1, 2, 3];
```

---

###  3. **Variables & Declarations**

ECMAScript (ES6) defines three ways:

```js
var a = 1;    // function-scoped (legacy)
let b = 2;    // block-scoped
const c = 3;  // block-scoped, immutable
```

---

###  4. **Scope & Hoisting**

* **Scope** is how ECMAScript handles variable accessibility.
* **Hoisting**: Declarations are moved to the top of their scope during compilation.

```js
console.log(a); // undefined due to hoisting
var a = 10;
```

---

###  5. **Functions**

ECMAScript treats functions as **first-class citizens**:

```js
function greet(name) {
  return `Hello, ${name}`;
}

const greetArrow = (name) => `Hello, ${name}`;
```

Functions have access to:

* Scope
* `this` (execution context)
* Closures (remember outer variables)

---

###  6. **Control Flow**

Defined by the ES spec:

```js
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Also includes: `switch`, `for`, `while`, `break`, `continue`, etc.

---

### 7. **Error Handling**

Standardized in ECMAScript:

```js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.message);
}
```

---

### 8. **Objects & Prototypes**

ECMAScript uses **prototype-based inheritance**:

```js
let animal = {
  speak() {
    console.log("Animal speaks");
  }
};

let dog = Object.create(animal);
dog.speak();  // Inherits from animal
```

---

### 9. **ES6+ Features (Modern ECMAScript)**

* **Destructuring**
* **Default parameters**
* **Arrow functions**
* **Classes**
* **Modules**
* **Promises & async/await**

```js
const add = (a, b = 1) => a + b;

async function fetchData() {
  const res = await fetch('https://api.com/data');
  return await res.json();
}
```

---

## Summary

> JavaScript is an **implementation of ECMAScript**, and everything from `let` to `async/await`, functions, scope, and prototype inheritance is defined in the **ECMAScript specification**.

If you're brushing up, **mastering ECMAScript fundamentals is like mastering the DNA of JavaScript** — the rest (Node, React, DOM, etc.) is built on top.

---

Would you like this turned into a PDF, a Notion document, or a printable study sheet?
