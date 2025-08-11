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


### **What You Need to Master**


* **Type Annotations** → How to specify types for variables, parameters, and return values.
* **Custom Types** → `type` and `interface` usage.
* **Type Inference** → When to rely on it and when to explicitly type.
* **Strict Type Checking** → Understanding and fixing type errors.
* **Using @types** → Adding type definitions for libraries.
* **Basic Compilation** → Using `tsc` to transpile TS to JS.
* **Working with `.d.ts` Files** → Reading and understanding type definitions.