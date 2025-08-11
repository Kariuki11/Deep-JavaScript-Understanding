# What I Need to Know On Typescript


1. **Definition** – TypeScript is an open-source superset of JavaScript by Microsoft that adds type annotations.
2. **Purpose** – Helps catch errors early, improves maintainability, and provides better editor support.
3. **Core Components**:


  * **TypeScript Code** → JavaScript + extra type syntax (e.g., `:string`, `:number`).
  * **Type Definitions** → `.d.ts` files that describe the shape/types of code (no logic).
4. **Compilation** – TS code is compiled into clean JavaScript before running.
5. **Type Inference** – TS often figures out types automatically; you don’t always need to write them.
6. **@types** – Install type definitions for libraries (e.g., `npm install --save-dev @types/node`).
7. **Interoperability** – TS works with existing JavaScript code and libraries.
8. **JSX Support** – TS can also transform JSX (React syntax) into JS.
9. **Running TS** – You must compile (or transpile) TS before running it (details later).




---


### **What I Need to Master**


* **Type Annotations** → How to specify types for variables, parameters, and return values.
* **Custom Types** → `type` and `interface` usage.
* **Type Inference** → When to rely on it and when to explicitly type.
* **Strict Type Checking** → Understanding and fixing type errors.
* **Using @types** → Adding type definitions for libraries.
* **Basic Compilation** → Using `tsc` to transpile TS to JS.
* **Working with `.d.ts` Files** → Reading and understanding type definitions.



# Running Typescript Natively

1. **Node.js v22.6+** – Can run TypeScript directly without transpiling.
2. **Flags**:

   * `--experimental-strip-types` → Removes type annotations (basic TS support).
   * `--experimental-transform-types` → Handles TS-only syntax like `enum` & `namespace` (also strips types automatically).
3. **Node.js v23.6+** – Type stripping is **on by default**, so you can run `.ts` files directly:

   ```bash
   node file.ts
   ```

   Only use `--experimental-transform-types` if your code uses enums/namespaces.
4. **Limitations** – Feature is **experimental**; not all TS features are supported yet.
5. **tsconfig.json** – Node’s TypeScript loader (Amaro) doesn’t use it for running, but you should still configure it for editor/`tsc` consistency.
6. **Recommended TS version** – 5.7+ for best compatibility.

---

### **What You Need to Master**

* **Know when to use each flag** (`--experimental-strip-types` vs `--experimental-transform-types`).
* **Run TS directly** in Node.js v23.6+ without flags for simple type annotations.
* **Understand limitations** → not all TS syntax works yet without transformation.
* **Keep TS & Node updated** → for maximum feature support.
* **Set up tsconfig.json** → for better type checking and editor experience even if Node doesn’t need it.

---


Here’s the **short mastery version** from your text:

---

### **What You Need to Know**

1. **Why use a runner?** – For advanced TS processing or Node.js < v22.7.0.
2. **ts-node** – Runs TS directly **with type checking** by default.

   ```bash
   npm i -D ts-node  
   npx ts-node file.ts
   ```

   Can disable type checking with `--transpile-only`.
3. **tsx** – Runs TS directly **without type checking** (faster).

   ```bash
   npm i -D tsx  
   npx tsx file.ts
   ```
4. **Register tsx with node** –

   ```bash
   node --import=tsx file.ts
   ```
5. **Type checking best practice** – Always run `tsc` before shipping, even if the runner doesn’t check.

---

### **What You Need to Master**

* **When to choose ts-node** (needs type checking) vs **tsx** (faster, no type checking).
* **How to install and run both**.
* **Using `tsc` for separate type checking**.
* **Registering tsx with node** for convenience.

---

If you want, I can now make you a **tiny table comparing ts-node, tsx, and native Node TS support** so you instantly know which to use in each case.
