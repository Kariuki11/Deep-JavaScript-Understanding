## **NODE JS INTRODUCTION**




1. **Node.js** is an open-source, cross-platform **JavaScript runtime** built on **Chrome's V8 engine**.

2. It runs **JavaScript outside the browser**, enabling backend development with JS.

3. **Single-threaded, non-blocking** I/O model using **asynchronous callbacks** for performance and scalability.

4. Handles **thousands of concurrent connections** efficiently without multi-threading.

5. Uses **event-driven architecture**, making it ideal for I/O-heavy applications like web servers and APIs.

6. Frontend developers can use their **JavaScript skills on the server-side** as well.

7. Supports **modern ECMAScript features**, configurable via Node.js version or flags.

8. Built-in `http` module lets you create web servers with methods like `createServer()`.

9. In a basic HTTP server:

   * `req` (request) contains request data.
   * `res` (response) is used to send back the response.

10. Key response methods:

    * `res.statusCode = 200`: Sets response status.
    * `res.setHeader(...)`: Sets response headers.
    * `res.end(...)`: Ends and sends the response.

11. To run a Node.js app:
    Save as `server.js` and run with `node server.js` in the terminal.

    ## **Differences Between Node Js And The Browser**


1. **Same language, different environments**: Both use JavaScript, but for very different purposes (Node.js = server-side, Browser = client-side).

2. **DOM access**:

   * **Browser**: Has access to DOM, `window`, `document`, etc.
   * **Node.js**: Does **not** have these – it's a non-browser environment.

3. **APIs**:

   * **Browser**: Web APIs like localStorage, cookies.
   * **Node.js**: Provides powerful **system-level APIs** (e.g., filesystem, networking).

4. **Environment control**:

   * **Node.js**: You control the runtime version (e.g., Node 18, Node 20).
   * **Browser**: You **don’t control** the user's browser version.

5. **Modern JavaScript support**:

   * **Node.js**: Can use modern ES6+ features directly.
   * **Browser**: May require tools like **Babel** for compatibility.

6. **Module systems**:

   * **Node.js**: Supports both **CommonJS (`require`)** and **ES Modules (`import`)**.
   * **Browser**: Primarily supports **ES Modules** (`import`).

7. **Full-stack JS benefit**: Node.js lets you build both frontend and backend in **one language**, giving JavaScript developers a big productivity boost.



## **The V8 JavaScript Engine**


1. **V8** is the **JavaScript engine** used by **Google Chrome** and **Node.js**.

2. It **executes JavaScript code**, but **not** Web APIs like the DOM—those come from the **browser runtime environment**.

3. **V8 is independent** of the browser, which made it possible for **Node.js** to use it for **server-side JavaScript**.

4. **V8 also powers desktop apps** through frameworks like **Electron**.

5. Other browsers use different JS engines:

   * Firefox → **SpiderMonkey**
   * Safari → **JavaScriptCore (Nitro)**
   * Edge → Originally **Chakra**, now uses **V8** (via Chromium)

6. All engines implement the **ECMAScript (ES-262)** standard (the official JavaScript spec).

7. **V8 is written in C++**, portable across OSes (Mac, Windows, Linux), and is **continuously optimized for performance**.

8. JavaScript used to be interpreted, but **modern engines compile JS using JIT (Just-In-Time) compilation** for **speed and efficiency**.

9. As JS apps have become larger and longer-running (e.g., full apps in the browser), **compiling JS now makes sense for performance**.


## **Introduction To Node Package Manager (NPM)**


### 🔹 **What is npm?**

* **Default package manager** for Node.js.
* Hosts **millions of packages** (largest code repository for any language).
* Also used in frontend JS projects.

---

### 🔹 **Installing Packages**

* `npm install`: Installs all dependencies listed in `package.json`.
* `npm install <package-name>`: Installs a specific package and adds it to dependencies (since npm v5).

---

### 🔹 **Important Flags**

* `--save-dev` (`-D`): Adds to `devDependencies` (for development tools).
* `--save-optional` (`-O`): Adds to `optionalDependencies` (fail-safe installs).
* `--no-save`: Installs package without updating `package.json`.

---

### 🔹 **Updating Packages**

* `npm update`: Updates all packages.
* `npm update <package-name>`: Updates a specific package.

---

### 🔹 **Versioning**

* Uses **Semantic Versioning (semver)**.
* You can install specific versions:
  `npm install <package-name>@<version>`

---

### 🔹 **Scripts**

* Define custom tasks in `package.json` under the `scripts` key.
* Run tasks using `npm run <task-name>`.
* Example:

  ```json
  {
    "scripts": {
      "dev": "webpack --config webpack.config.js"
    }
  }
  ```

---

### 🔹 **Alternatives**

* Other package managers: **Yarn**, **pnpm**.

---

### **Key Takeaway**

npm helps manage **project dependencies**, **versions**, and **task automation**, making Node.js app development efficient and consistent.



## **ECMAScript 2015 (ES6) And Beyond**



Here’s a **key point summary** of what you need to understand about **ECMAScript (ES6+) in Node.js**:

---

### 🔹 **Modern JavaScript Support in Node.js**

* Node.js is built on **V8**, which regularly adopts **new ECMAScript features**.
* **ES6 (2015)** and many newer features are **fully supported** in modern Node versions.

---

### 🔹 **Feature Categories in V8 / Node.js**

1. **Shipping Features**:

   * Stable and **enabled by default** in Node.js.
2. **Staged Features**:

   * Not yet stable, require the `--harmony` or `--es_staging` flag.
3. **In-Progress Features**:

   * Experimental, unstable, and require **specific harmony flags** (not recommended for production).

---

### 🔹 **Managing Experimental Features**

* Use `--harmony` or `--es_staging` only **for testing** or experimentation.
* In **production**, avoid these flags unless necessary.

---

### 🔹 **Check Feature Compatibility**

* Use [**node.green**](https://node.green) for a **visual compatibility table** of ECMAScript features across Node.js versions.

---

### 🔹 **Check V8 Version**

* To find out which **V8 version** your Node.js binary uses:

  ```bash
  node -p process.versions.v8
  ```

---

### ✅ **Key Takeaway**

Stay updated with Node.js versions to access modern JS features **safely and without flags**. Use experimental flags like `--harmony` **cautiously**, especially in production.



