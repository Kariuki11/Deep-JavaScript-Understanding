# 🔹 1. What is Hoisting?

Hoisting is JavaScript’s behavior of **moving declarations to the top of their scope (global or function scope) during the compilation phase**, before code execution.

In simple terms: **you can use some variables and functions before they are declared**.

---

# 🔹 2. How Hoisting Works (Key Rules)

### Function Declarations are Hoisted (with their body)

```js
sayHi(); // Works 

function sayHi() {
  console.log("Hi!");
}
```

Both the name `sayHi` and the function definition are hoisted.

---

### `var` is Hoisted (but initialized as `undefined`)

```js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

`var a` is hoisted but set to `undefined` until assignment.

---

###  `let` and `const` are Hoisted BUT in **Temporal Dead Zone (TDZ)**

```js
console.log(x); //  ReferenceError
let x = 10;

console.log(y); //  ReferenceError
const y = 20;
```

They are hoisted to the top but can’t be accessed before declaration (TDZ = period between hoisting and initialization).

---

###  Function Expressions & Arrow Functions are **NOT Hoisted**

```js
sayHello(); //  TypeError
var sayHello = function() {
  console.log("Hello");
};

sayArrow(); //  TypeError
const sayArrow = () => console.log("Arrow");
```

Only the variable name is hoisted (like `var sayHello = undefined`), but not the function assignment.

---

# 🔹 3. Visual Mental Model of Hoisting

Think of JS code execution in **two phases**:

1. **Creation Phase**

   * Variables declared with `var` → hoisted & set to `undefined`.
   * Functions (declared) → hoisted with definition.
   * `let` & `const` → hoisted but uninitialized (TDZ).

2. **Execution Phase**

   * Code runs line by line, assignments happen.

---

# 🔹 4. How to Work Around Hoisting (Best Practices)

*  **Always declare variables at the top of their scope.**
*  Use `let` and `const` instead of `var` to avoid `undefined` bugs.
*  Use function declarations for functions you want to call before definition.
*  Use function expressions/arrow functions only after declaring them.

---

# 🔹 5. How to Answer Hoisting in an Interview

Here’s a **structured way**:

**Step 1 – Definition (simple & clear):**

> "Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope during compilation, before execution."

**Step 2 – Key Rules:**

* Function declarations → fully hoisted.
* `var` → hoisted, initialized as `undefined`.
* `let` & `const` → hoisted but stay in Temporal Dead Zone until initialized.
* Function expressions / arrow functions → not hoisted.

**Step 3 – Show Examples:**

```js
sayHi(); // works
function sayHi() { console.log("Hi!"); }

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;
```

**Step 4 – Best Practices:**

* Use `let`/`const`.
* Declare before use.

---

# 🔹 6. Common Interview Traps

1. **Mixing `var` with `let/const`:**

   ```js
   console.log(a); // undefined
   var a = 5;

   console.log(b); // ReferenceError
   let b = 10;
   ```

   Be ready to explain why.

2. **Function expression vs declaration:**

   ```js
   foo(); //  Error
   var foo = function() { console.log("foo"); };

   bar(); //  Works
   function bar() { console.log("bar"); }
   ```

3. **TDZ trick question:**

   ```js
   {
     console.log(x); //  ReferenceError
     let x = 2;
   }
   ```

---

# 🔹 7. Pro Interview Tip

If asked “Explain hoisting,” don’t just give theory. Do this:

 Say:

> "Let me explain by writing a small snippet and showing how JS treats it during compilation."

Then write:

```js
console.log(num); 
var num = 10;
```

And explain how internally JS interprets it as:

```js
var num;   // hoisted
console.log(num); // undefined
num = 10;
```

The above shows **deep understanding** rather than memorization.


