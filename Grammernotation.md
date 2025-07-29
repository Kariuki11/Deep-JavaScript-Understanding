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
  * **Example:**

    ```js
    let price = 99.99;
    let divisionByZero = 5 / 0; // Infinity
    let invalidNumber = Number("abc"); // NaN
    ```

* **BigInt**

  * **Meaning:** For arbitrarily large integers.
  * **Example:**

    ```js
    const big = 1234567890123456789012345678901234567890n;
    ```

* **String**

  * **Meaning:** Text data represented as sequences of characters.
  * **Example:**

    ```js
    let name = "Kenneth";
    ```

* **Symbol**

  * **Meaning:** A unique, immutable identifier. Often used as object keys to avoid naming conflicts.
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
* **How it's used:** To structure complex data (like a user profile or config).
* **How to implement:**

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
