# WHAT ARE COMMON SYSTEM DESIGN PATTERNS FOR INTERVIEWS?

## 1. Load balancer pattern

It's a pattern used to distribute incoming requests across multiple servers.

When to use it: Any time you need to improve **availability and distribute load across multiple backends**, like in web servers or API gateways.

Key tools/services: NGINX, HAProxy, AWS Elastic Load Balancer, DNS round-robin

Things to discuss in interviews:

Horizontal scaling -
        This is  adding more machines/servers to handle increased load instead of upgrading one machine.
Health checks and failover
Sticky sessions and session storage
* **Sticky sessions**: This means when a user connects to a server in a load-balanced system, they are always sent back to the **same server** for the whole session.

* **Session storage**: This refers to **where user session data is saved**. It can be stored in:

  * **In-memory** (inside the server) → simple but doesn’t work well with multiple servers unless sticky sessions are used.
  * **Shared storage** (like Redis, database, or distributed cache) → allows any server to access the user’s session data, making it scalable.

Would you like me to also give you the **difference between sticky sessions and session storage** in one line for easy recall?

Single point of failure and how to avoid it

A **single point of failure (SPOF)** is a part of a system that, if it fails, the **whole system stops working**.

👉 Example: If a company has only **one server** and it crashes, the whole website goes down.

**How to avoid it:**

* Use **redundancy** (multiple servers, databases, or network paths).
* Add **load balancers** to distribute traffic.
* Use **backups and failover systems**.

In short: Don’t rely on just one critical component—always have backups or duplicates.



