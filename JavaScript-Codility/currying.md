## 🔹 1. What is Currying?
Currying is the process of transforming a function with multiple arguments into a **sequence of functions**, each taking one argument at a time.

Example (normal function):

```js
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
```

**Curried version:**

```js
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 6
```

**Notice:** Instead of calling `add(1, 2, 3)`, you call `curryAdd(1)(2)(3)`.
Each function "remembers" the previous argument via **closures**.


## 🔹 2. Why is Currying Useful?

Interviewers expect you to know **practical benefits**:

* **Reusability / Partial Application**: You can create specialized functions easily.

  ```js
  const multiply = (a, b) => a * b;
  const curriedMultiply = a => b => a * b;

  const double = curriedMultiply(2);
  console.log(double(5)); // 10
  ```
* **Functional programming**: It makes code more declarative and composable.
* **Event Handlers / Callbacks**: Handy when you want to pass some arguments ahead of time.
* **Clean separation of concerns**: Each function handles one input.


## 🔹 3. How to Implement a Curry Utility Function

Sometimes interviewers ask you to **write a `curry(fn)` utility** that transforms any function into its curried version.

Example:

```js
function curry(fn) {
  return function curried(...args) {
    // If enough arguments, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a function expecting more args
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

// Usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1)(2, 3));   // 6
```

**Notice** that the `curry` function allows flexible calls (`fn(1)(2)(3)` or `fn(1,2)(3)` etc.).

---

## 🔹 4. How to Answer Currying Questions in an Interview

When asked about currying, here’s a **solid structure** you can use:

1. **Definition (simple & clear):**

   > "Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument."

2. **Why it’s useful:**

   * Reusability (specialized functions like `double = multiply(2)`)
   * Functional programming and composition
   * Cleaner callbacks / event handling

3. **Show a simple example:**

   ```js
   const add = a => b => c => a + b + c;
   console.log(add(1)(2)(3)); // 6
   ```

4. **If asked to implement:** Write the `curry(fn)` utility.

5. **Mention Partial Application difference (if asked):**

   * **Currying** always breaks down into unary (1-argument) functions.
   * **Partial application** allows you to fix some arguments and call the function later with the rest.

   ```js
   // Partial
   function multiply(a, b, c) {
     return a * b * c;
   }
   const double = multiply.bind(null, 2);
   console.log(double(3, 4)); // 24
   ```

---

## 🔹 5. Common Interview Traps (and How to Work Around Them)

**Trap 1:** Forgetting that `fn.length` gives the number of expected params (important in a `curry(fn)` utility).
**Trap 2:** Confusing currying with partial application – clarify difference.
**Trap 3:** Writing overly complex code – start small with a simple 2-arg example, then scale up.
**Trap 4:** Not explaining *why it’s useful* – interviewers want applied knowledge, not just syntax.

---

🔥 **Pro Interview Tip:** If you get a currying question, **don’t just code**—walk them through your thought process:

* *“I’ll first show you a curried function manually. Now let me generalize it with a curry helper. This will let us call the function in different ways, like `fn(1)(2)(3)` or `fn(1,2)(3)`. The main trick is to check if enough arguments are provided and, if not, return a new function waiting for the rest.”*

---

Would you like me to also **give you a list of 3 common currying coding challenges** that interviewers ask, so you can practice them?
