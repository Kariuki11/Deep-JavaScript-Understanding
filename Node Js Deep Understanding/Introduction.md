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


## **Introduction to Node Package Manager (NPM)**

