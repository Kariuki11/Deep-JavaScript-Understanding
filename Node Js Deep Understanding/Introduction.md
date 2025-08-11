# NODE JS INTRODUCTION.




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


--

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


## **Differences Between Development And Production In Node Js**



### 🔹 **No Built-In Production Mode**

* Node.js itself has **no special production configuration**—it behaves the same in development and production.

---

### 🔹 **NODE\_ENV Variable**

* Many npm libraries use `NODE_ENV` to toggle behavior (e.g., enable debugging or performance optimizations).
* In **production**, always set:

  ```bash
  NODE_ENV=production
  ```

---

### 🔹 **Why `NODE_ENV` Can Be a Problem (Antipattern)**

* Hardcoding logic based on `NODE_ENV` (e.g., `if NODE_ENV === 'development'`) can lead to **inconsistent environments**.
* This breaks **reliable testing** across environments like **staging vs production**.
* Logic should be based on **explicit configuration**, not environment name.

---

### 🔹 **Best Practice**

* Follow the **Twelve-Factor App** methodology for configuration (use environment variables, config files, etc.).
* Treat all non-production environments the **same as production** for consistent behavior and testing.

---

### **Key Takeaway**

Set `NODE_ENV=production` in production, but **avoid embedding behavior logic** based on it. Use **explicit configs** to ensure predictable, testable environments.


Here’s a **key point summary** of what you need to understand about **Node.js with WebAssembly**, along with **extra context where useful**:

---

### 🔹 **What is WebAssembly (Wasm)?**

* A **high-performance, low-level binary format** that runs in browsers and **Node.js**.
* Can be compiled from languages like **C, C++, Rust, AssemblyScript**.
* Useful for **CPU-intensive tasks** or reusing native code in JS environments.

---

### 🔹 **Key WebAssembly Concepts**

* **Module**: The compiled `.wasm` binary file.
* **Memory**: A resizable `ArrayBuffer` shared between JS and Wasm.
* **Table**: Stores function references (not in Memory).
* **Instance**: A running version of the module with its exports and state.

---

### 🔹 **File Formats**

* **`.wasm`** – Binary WebAssembly Module.
* **`.wat`** – Human-readable WebAssembly Text format.

---

### 🔹 **Generating Wasm Modules**

You can create `.wasm` files using:

* **Emscripten** – for C/C++
* **wasm-pack** – for Rust
* **AssemblyScript** – TypeScript-like syntax
* **wabt** – to convert `.wat` to `.wasm`

---

### 🔹 **Using WebAssembly in Node.js**

Node.js provides the global `WebAssembly` object with:

* `compile()`, `instantiate()`, `validate()`

**Example:**

```js
const fs = require('fs');
const wasmBuffer = fs.readFileSync('./add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  const { add } = wasmModule.instance.exports;
  console.log(add(5, 6)); // Output: 11
});
```

---

### 🔹 **Limitations**

* **WebAssembly cannot access OS features directly**.
* Use tools like **Wasmtime** and **WASI (WebAssembly System Interface)** to interact with files, sockets, etc.

---

### 🔹 **When to Use WebAssembly in Node.js**

* When you need **near-native performance**.
* For **porting existing native codebases**.
* When handling **intensive algorithms** (e.g., image processing, cryptography).
* To write **performance-critical modules** in Rust/C++ and call them from Node.js.

---

### **Key Takeaways**

* **WebAssembly adds high-performance compute capabilities to Node.js.**
* It requires `.wasm` files, which can be created from languages like C, Rust, or AssemblyScript.
* Interactions happen through the `WebAssembly` global object.
* Great for **enhancing performance**, not for general-purpose logic or OS-level tasks.


### Debugging In Node Js

**🔹 Core Concepts**

* **Enable Inspector**: Use `--inspect` to allow debugging; default host/port → `127.0.0.1:9229`.
* **Inspector API** replaces the old V8 Debugger Protocol from Node.js 8 onward.
* **SIGUSR1** can trigger debugging on Unix systems (not Windows).

**🔹 Security Essentials**

* Debugger = full execution access → treat it as **high-risk** if exposed.
* **NEVER** bind `--inspect` to a public IP (`0.0.0.0`) without secure controls (firewalls, VPN, SSH tunnel).
* Even local (`127.0.0.1`) access is open to any local app on the machine.
* DNS rebinding protection is built in (requires IP or exact `localhost` in Host header).

**🔹 Connecting Debuggers**

* **Chrome DevTools**: Open `chrome://inspect` or paste DevTools frontend URL.
* **VS Code**: Configure `.vscode/launch.json` for Node.js debugging.
* **Other IDEs**: WebStorm, Eclipse, Visual Studio, Gitpod support direct Node.js debugging.
* **CLI Debugger**: `node inspect myscript.js`.

**🔹 Common Flags**

* `--inspect` → enable debugger on default host/port.
* `--inspect=[host:port]` → custom host & port.
* `--inspect-brk` → break before running any code.
* `--inspect-wait` → wait until debugger is attached before continuing.
* `node inspect script.js` → run under CLI debugger.

**🔹 Remote Debugging (Safe Way)**

* Keep Node.js listening only on localhost.
* Use **SSH tunnels** to forward a local port to the remote debug port.

  ```bash
  ssh -L 9221:localhost:9229 user@remote.example.com
  ```

  Then connect debugger to `localhost:9221`.

**🔹 Deprecated Tools**

* Legacy `--debug` / `--debug-brk` / V8 Debug Protocol is no longer maintained.
* Use `--inspect` instead.


**What to Really Remember:**

1. `--inspect` is the modern debugging method.
2. Never expose your debug port publicly — always secure it.
3. Chrome DevTools & VS Code are the most common and user-friendly debugger clients.
4. For remote debugging, use SSH tunnels, not open ports.
5. Know your main flags: `--inspect`, `--inspect-brk`, `--inspect-wait`.


### Fteching Data With Node Js

**What is Undici?**

* High-performance HTTP client for Node.js.
* Powers Node.js’s native `fetch()` API.
* Does **not** rely on Node’s built-in HTTP client — written from scratch.

**Core Fetch API Usage**

* **GET request**:

  ```js
  const res = await fetch(url);
  const data = await res.json();
  ```
* **POST request**: Provide `method`, `headers`, and `body` in `fetch()` options.

---

**3️. Customization**

* `fetch(url, { method, headers, body })` lets you control request details.
* Returns a **Promise** that resolves to a `Response` object.

---

**4️. Connection Pools**

* `Pool` from `undici` lets you reuse HTTP connections for performance.
* Useful for repeated calls to the same host.
* Example: streaming data from Ollama API.

---

**5️. Streaming**

* You can process large responses in chunks with `undici.stream()`.
* Helpful for APIs returning continuous or large data (GitHub repos example).

---

**6️. OS Interaction**

* Undici handles HTTP only; no OS access.
* For OS-level APIs, you need other tools (e.g., WASI for WebAssembly).

---

**7️. Extra Good-to-Know**

* Set **`User-Agent`** headers for many APIs (like GitHub) to work properly.
* Always handle **HTTP status codes** before processing data.
* Use **`TextDecoder`** for decoding streamed binary data into strings.

---


## Native WebSocket Client in Node.js:


**Core Concept**

* **WebSocket**: A protocol for full-duplex (two-way) communication over a single TCP connection, using `ws://` (unencrypted) or `wss://` (encrypted).
* Unlike HTTP, it allows the server to push data to the client without new requests.
* Works well for **real-time applications** (chat, live data feeds, gaming, IoT).

**Node.js Native WebSocket Client**

* **Introduced in Node.js v21**, marked **stable in v22.4.0**.
* Now supports **`new WebSocket()`** directly, no need for libraries like `ws` or `socket.io` for **client** connections.
* Can send/receive text or JSON easily with `JSON.stringify()` & `JSON.parse()` plus error handling.
* Reduces dependency management and ensures better **standards compliance**.

**What It Can Do**

* Connect to WebSocket servers.
* Send and receive real-time messages (strings, JSON, binary data).
* Listen for events: `open`, `message`, `close`, `error`.

**Limitations**

* **No built-in WebSocket server in Node.js** — still need external libraries (`ws`, `socket.io`, etc.) for accepting incoming WebSocket connections.
* Native client is **only for connecting out** to servers, not for hosting.

**Extra Tip**

* Always handle **connection errors**, **message parsing errors**, and **clean up** connections (`close` event) to avoid memory leaks in long-running apps.

---

### Security Best Practises in NodeJs


## **Node.js Security Checklist**

### **1. DoS & Resource Exhaustion**

* ☐ Use a reverse proxy (Nginx, HAProxy) for load balancing & caching.
* ☐ Set server timeouts (`headersTimeout`, `requestTimeout`, `keepAliveTimeout`).
* ☐ Limit max concurrent sockets (`agent.maxSockets`).
* ☐ Implement rate limiting (e.g., `express-rate-limit`).

---

### **2. Network Security**

* ☐ Never run `--inspect` in production.
* ☐ Block DNS rebinding: disable inspector on `SIGUSR1`.
* ☐ Enforce HTTPS/TLS for all requests.

---

### **3. Sensitive Data Protection**

* ☐ Use `.gitignore` / `.npmignore` to exclude secrets.
* ☐ Run `npm publish --dry-run` before publishing.
* ☐ Store secrets in environment variables (never commit `.env`).

---

### **4. HTTP Request Smuggling**

* ☐ Disable `insecureHTTPParser`.
* ☐ Configure proxy to normalize requests.
* ☐ Use HTTP/2 end-to-end where possible.

---

### **5. Timing Attack Defense**

* ☐ Compare secrets using `crypto.timingSafeEqual`.
* ☐ Avoid branching or indexing based on secrets.

---

### **6. Supply Chain Security**

* ☐ Pin all dependencies (exact versions).
* ☐ Use lockfiles (`package-lock.json`).
* ☐ Install with `npm ci`, not `npm install`.
* ☐ Disable npm scripts: `npm config set ignore-scripts true`.
* ☐ Audit regularly (`npm audit`, Socket.dev).

---

### **7. Memory Safety**

* ☐ Use `--secure-heap=n` for sensitive data (Linux/macOS).
* ☐ Avoid running production apps on shared machines.

---

### **8. Monkey Patching Prevention**

* ☐ Run with `--frozen-intrinsics`.
* ☐ Freeze `globalThis` to block global overrides.

---

### **9. Prototype Pollution Prevention**

* ☐ Validate & sanitize all JSON input.
* ☐ Use `Object.create(null)` for untrusted data objects.
* ☐ Freeze prototypes & disable `__proto__` with `--disable-proto`.

---

### **10. Module Path Safety**

* ☐ Use policy files with integrity checks to lock module paths.

---

### **11. General Best Practices**

* ☐ Avoid experimental Node.js features in production.
* ☐ Keep Node.js & dependencies up-to-date.
* ☐ Apply security headers (e.g., Helmet).
* ☐ Use containerization or service isolation for sensitive apps.
* ☐ Monitor dependencies with OpenSSF Scorecard.

---





Go Throuugh: [text](https://www.tryexponent.com/blog/top-node-js-interview-questions)

