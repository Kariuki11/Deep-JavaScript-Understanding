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

Single point of failure and how to avoid it

A **single point of failure (SPOF)** is a part of a system that, if it fails, the **whole system stops working**.

Example: If a company has only **one server** and it crashes, the whole website goes down.

**How to avoid it:**

* Use **redundancy** (multiple servers, databases, or network paths).
* Add **load balancers** to distribute traffic.
* Use **backups and failover systems**.


## 2. Caching pattern
It's a technique to store **frequently accessed data in memory** to reduce latency and load on databases.

When to use it: When reads far outweigh writes, and data can be slightly stale (e.g., profile pages, product listings).

Key tools/services: Redis, Memcached, CDN edge caches

Things to discuss in interviews:

Cache invalidation
Cache miss vs hit ratio
Write-through vs write-behind
TTL (Time to Live) settings


## 3. Database sharding pattern
It's **splitting** a large database into smaller, more manageable parts (shards).

When to use it: When a single database can’t handle the read/write volume or dataset size.

Key tools/services: Custom sharding logic, horizontal partitioning strategies

Things to discuss in interviews:

Shard key selection
Rebalancing shards
Joins across shards
Consistency vs availability

## 4. Asynchronous messaging pattern
It's a pattern that **decouples** producers and consumers using message queues or event streams.

When to use it: For tasks that don’t need to be completed immediately, like sending emails, processing payments, or logging events.

Key tools/services: Kafka, RabbitMQ, AWS SQS, Pub/Sub

Things to discuss in interviews:

At-least-once vs exactly-once delivery
Message ordering
Dead letter queues
Retry and backoff logic


## 5. Rate limiting and throttling pattern
It's **controlling** how many requests a user or system can make in a given time period.

When to use it: To protect services from abuse, ensure fairness, and manage resource usage.

Key tools/services: Token bucket, leaky bucket, Redis-based counters

Things to discuss in interviews:

Per-user vs global limits
HTTP 429 responses
Rate limiting tiers
Distributed coordination in multi-region setups.

## 6. Content delivery network (CDN) pattern
It's a way to **serve static content** (images, video, CSS, JS) from edge servers closer to users.

When to use it: To reduce latency and offload origin servers, especially for global user bases.

Key tools/services: Cloudflare, Akamai, AWS CloudFront

Things to discuss in interviews:

Cache invalidation and purging
Regional replication
Origin failover
HTTPS and signed URLs

## 7. Write-ahead log pattern (WAL)
It's a pattern used to ensure **durability and recovery** by logging changes before applying them.

When to use it: In systems that need crash recovery, like databases, file systems, or durable queues.

Key tools/services: PostgreSQL WAL, RocksDB, Kafka commit logs

Things to discuss in interviews:

Durability guarantees
Crash consistency
Log compaction
Trade-offs between speed and resilience

## 8. Event-driven architecture pattern
It's a model where **services communicate** by emitting and reacting to events.

When to use it: For loosely coupled systems that need to scale independently and respond to changes in real time.

Key tools/services: Kafka, EventBridge, Webhooks, Apache Pulsar

Things to discuss in interviews:

Event schema design
Idempotency and retries
Event sourcing vs event notification
Managing eventual consistency


## 9. Circuit breaker pattern
It's a design pattern that **prevents a failing service** from being overwhelmed by repeated requests.

When to use it: To improve system resilience when downstream services are flaky or slow.

Key tools/services: Hystrix, Resilience4j, Envoy

Things to discuss in interviews:

Failure thresholds and fallback responses
Recovery timeouts
Fallback logic and degraded mode
Real-time monitoring and alerts

## 10. Scheduler and worker pattern
It's a way to **schedule and process** background jobs asynchronously.

When to use it: For tasks that need to run on a schedule or be distributed to workers, like cron jobs, video processing, or email campaigns.

Key tools/services: Celery, Sidekiq, AWS Lambda + EventBridge

Things to discuss in interviews:

Task queues and scheduling intervals
Retry strategies and exponential backoff
Cron syntax and scheduling libraries
Handling failures and job deduplication


## 11. API gateway pattern
It's a **centralized entry point** that handles requests from clients and routes them to appropriate backend services.

When to use it: In microservices architectures or apps that require request transformation, authentication, or rate limiting.

Key tools/services: Kong, AWS API Gateway, NGINX

Things to discuss in interviews:

Aggregating responses from multiple services
Request validation and schema enforcement
Logging and authentication
Caching and request throttling

## 12. Fan-out/fan-in pattern
What it is: A pattern where one process sends tasks to **many parallel workers** (fan-out), and then aggregates their responses (fan-in).

When to use it: When processing large datasets or performing concurrent tasks like image processing or web scraping.

Key tools/services: AWS Lambda, Google Cloud Functions, Azure Functions

Things to discuss in interviews:

Parallelism and scaling
Aggregation logic and reducers
Error handling and fallback mechanisms
Orchestration vs choreography

## 13. Write-behind cache pattern
A caching pattern where updates are first written to the cache, then asynchronously persisted to the database.

When to use it: When high write throughput is needed and durability can tolerate slight delays.

Key tools/services: Redis + background workers

Things to discuss in interviews:

Cache coherence
Consistency guarantees
Failure recovery logic
Sync intervals and latency

## 14. Service registry and discovery pattern
It's a system that keeps track of all active service instances so they can find and communicate with each other dynamically.

When to use it: In microservices architectures where services need to scale and relocate frequently.

Key tools/services: Consul, Eureka, etcd

Things to discuss in interviews:

Dynamic service registration
DNS vs service API discovery
Load balancing strategies
Handling stale entries and failures

## 15. Bulkhead pattern
It's a pattern that **isolates system components** so a failure in one doesn’t cascade into others.

When to use it: To improve fault tolerance in systems where multiple services share the same resources.

Key tools/services: Resilience4j, circuit breakers, thread pools

Things to discuss in interviews:

Isolation boundaries and fallback logic
Partitioning critical vs non-critical workloads
Graceful degradation under load
Testing bulkhead boundaries







