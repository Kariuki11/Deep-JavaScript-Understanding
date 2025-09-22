# 1. What is piping in Node.js?

Piping is a mechanism used to connect the output of one stream to another stream. It is normally used to retrieve data from one stream and pass output to another stream

# 2. What is callback hell?

Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug
improper implementation of the asynchronous logic causes callback hell


# 3. What is a reactor pattern in Node.js?
A reactor pattern is a concept of non-blocking I/O operations. This pattern provides a handler that is associated with each I/O operation. As soon as an I/O request is generated, it is then submitted to a demultiplexer

# 4. What is WASI, and why is it being introduced?
The WASI class implements the WASI system called API and extra convenience methods for interacting with WASI-based applications. Every WASI instance represents a unique sandbox environment. Each WASI instance must specify its command-line parameters, environment variables, and sandbox directory structure for security reasons.

# 5. What is a first-class function in Javascript?
First-class functions are a powerful feature of JavaScript that allows you to write more flexible and reusable code. In Node.js, first-class functions are used extensively in asynchronous programming to write non-blocking code.

# 6. How do you manage packages in your Node.Js project?
Managing packages in your Node.js project is done using the Node Package Manager (NPM), which allows you to install and manage third-party packages and create and publish your packages. 

# 7. How is Node.js better than other frameworks?
Node.js is a server-side JavaScript runtime environment built on top of the V8 JavaScript engine, the same engine that powers Google Chrome. It makes Node.js very fast and efficient, as well as highly scalable. 

# 8. What is a fork in node JS?
The Fork method in Node.js creates a new child process that runs a separate Node.js instance and can be useful for running CPU-intensive tasks or creating a cluster of Node.js servers.

# 9. List down the two arguments that async. First, does the queue take as input?
The async.queue function in Node.js takes two arguments as input: a worker function and an optional concurrency limit. It is used to create a task queue executed in parallel.

# 10. What is the purpose of the module.exports?
The module. exports object in Node.js is used to export functions, objects, or values from a module and is returned as the value of the require() function when another module requires a module.



