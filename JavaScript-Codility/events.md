Perfect pick again, Kenneth 🙌 — **JavaScript Events** are a **big interview topic**, especially for frontend or full-stack roles. If you master them, you’ll show deep understanding of **DOM, asynchronous programming, and event handling patterns**.

Let’s go step by step so you can **explain, code, and handle any interview event question confidently**.

---

# 🔹 1. What are Events in JavaScript?

* Events are **signals/notifications** that something has happened in the browser (e.g., user clicks, key presses, mouse movement, page load, network completion).
* JavaScript can **listen for these events** and **respond with handlers (functions)**.

👉 In an interview, start with a definition:

> "An event in JavaScript is an action or occurrence in the browser that JavaScript can respond to, such as clicks, key presses, or data loading."

---

# 🔹 2. Types of Events

* **Mouse Events** → `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
* **Keyboard Events** → `keydown`, `keyup`, `keypress`
* **Form Events** → `submit`, `change`, `focus`, `blur`, `input`
* **Window Events** → `load`, `resize`, `scroll`, `beforeunload`
* **Clipboard / Touch / Media events** → `copy`, `touchstart`, `play`, `pause`

👉 Interviewers may ask: *“Name some common DOM events and their use cases.”*

---

# 🔹 3. Attaching Event Handlers

### ✅ Inline HTML Attribute (Not recommended)

```html
<button onclick="alert('Hello!')">Click</button>
```

### ✅ DOM Property

```js
const btn = document.querySelector("#myBtn");
btn.onclick = function() {
  alert("Button clicked!");
};
```

⚠️ Limitation: only one handler per property.

### ✅ `addEventListener` (Best Practice)

```js
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  alert("Clicked!");
});
```

* Allows multiple handlers.
* Supports `removeEventListener`.

---

# 🔹 4. Event Object

When an event occurs, an **event object** is passed to the handler.

```js
btn.addEventListener("click", function(event) {
  console.log(event.type);   // "click"
  console.log(event.target); // the element clicked
});
```

---

# 🔹 5. Event Flow (VERY Important in Interviews)

Events move through **three phases**:

1. **Capturing Phase** (top → target)
2. **Target Phase** (event reaches target element)
3. **Bubbling Phase** (target → top, upward)

Example:

```js
document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked!");
}, true); // Capturing phase

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked!");
}); // Bubbling phase
```

👉 By default, events bubble. You can use `event.stopPropagation()` to stop bubbling.

---

# 🔹 6. Event Delegation (Interview Favorite)

Instead of attaching events to multiple child elements, attach one to a parent and use bubbling:

```js
document.querySelector("#list").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});
```

✅ Efficient for dynamic elements.

---

# 🔹 7. Prevent Default Action

Some events have default behavior (like form submit, link navigation). You can prevent it:

```js
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Form submission stopped.");
});
```

---

# 🔹 8. Asynchronous Events

Events often tie to **async operations**:

* `DOMContentLoaded` vs `load` (when scripts/images are loaded).
* `fetch().then(...).catch(...)` triggered after async operations.

---

# 🔹 9. How to Answer Event Questions in Interviews

**Step 1 – Define:**

> "Events are actions in the browser that JavaScript can listen to and respond with handlers."

**Step 2 – Mention ways to handle:**

* Inline attributes, DOM property, `addEventListener` (preferred).

**Step 3 – Cover core concepts:**

* Event object (`event.target`, `event.type`).
* Event flow (capturing → target → bubbling).
* Event delegation for performance.
* Prevent default (`e.preventDefault()`).

**Step 4 – Give example:**

```js
document.querySelector("#btn").addEventListener("click", e => {
  console.log("Button clicked:", e.target.id);
});
```

---

# 🔹 10. Common Interview Traps

1. **Event Bubbling vs Capturing** → be ready to explain flow.
2. **`this` vs `event.target`** → `this` refers to element handler is attached to, `event.target` is the element actually clicked.
3. **Difference between `onClick` vs `addEventListener`**.
4. **Event delegation performance benefits.**
5. **Preventing default form submit vs stopping propagation.**

---

# 🔹 11. Pro Interview Tip

When asked about events, always **tie your answer to real-world use cases**:

* "We use event delegation in large lists for efficiency."
* "We use `e.preventDefault()` to stop a form from refreshing."
* "We use bubbling to capture clicks at a higher parent element."

This shows you understand **why events matter**, not just syntax.