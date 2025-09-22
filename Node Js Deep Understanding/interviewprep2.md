38. What is the difference between fork() and spawn() methods in Node.js?
fork()

spawn()

	spawn
fork() is a particular case of spawn() that generates a new instance of a V8 engine.

Spawn() launches a new process with the available set of commands.

Multiple workers run on a single node code base for multiple tasks.

This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

