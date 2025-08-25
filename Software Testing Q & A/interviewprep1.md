**1. What is Quality Assurance (QA)?**
QA ensures that the software meets the required quality standards by **preventing defects** during the software development process. It focuses on **process-oriented** activities.

**2. What is the difference between QA and QC?**

* **QA (Quality Assurance):** Process-focused, prevents defects.
* **QC (Quality Control):** Product-focused, finds defects after development.

**3. What is the difference between Verification and Validation?**

* **Verification:** Checks if the product is built **according to requirements** (are we building it right?).
* **Validation:** Ensures the product **meets the user’s needs** (are we building the right thing?).

**4. What is a Test Case?**
A **test case** is a set of conditions, steps, and expected results created to validate a specific functionality of the software.

**5. What is the difference between a Test Case and a Test Scenario?**

* **Test Case:** Step-by-step instructions with expected results.
* **Test Scenario:** High-level description of what to test (end-to-end flow).

**6. What is a Bug, Defect, and Error?**

* **Error:** Mistake by a developer.
* **Defect:** Flaw in the application found during testing.
* **Bug:** Defect accepted by developers as a problem to be fixed.

**7. What is Regression Testing?**
Regression testing checks if **new code changes** break or affect existing functionality.

**8. What is Smoke Testing?**
Smoke testing is a **basic test** to check if the application’s core functionalities work before deeper testing.

**9. What is Sanity Testing?**
Sanity testing ensures **specific bug fixes or new features** work correctly without testing everything.

**10. What are Functional and Non-Functional Testing?**

* **Functional:** Tests features (login, payment).
* **Non-Functional:** Tests performance, security, usability, scalability.

**11. What is Unit Testing?**
Unit testing involves testing **individual modules or components** of the software to ensure they work correctly in isolation.

**12. What is Integration Testing?**
Integration testing verifies that **different modules or components work together** as expected.

**13. What is System Testing?**
System testing checks the **entire application as a whole** to ensure it meets requirements.

**14. What is User Acceptance Testing (UAT)?**
UAT is performed by **end-users or clients** to confirm that the system meets their needs and is ready for release.

**15. What is Exploratory Testing?**
Exploratory testing is an **informal, simultaneous learning and testing** approach where testers explore the system without predefined test cases.

**16. What is Ad-hoc Testing?**
Ad-hoc testing is **unplanned testing** without documentation, often used to quickly find defects.

**17. What is the difference between Positive and Negative Testing?**

* **Positive Testing:** Checks system with valid input (expected to pass).
* **Negative Testing:** Checks system with invalid input (expected to fail gracefully).

**18. What is End-to-End Testing?**
End-to-End testing validates a **complete workflow** of the application, e.g., user logs in → makes a purchase → receives confirmation.

**19. What is Black Box Testing?**
Testing the application **without looking at internal code or logic**. Focus is only on inputs and outputs.

**20. What is White Box Testing?**
Testing the **internal logic, structure, and code** of the application. Usually done by developers.

**21. What is Grey Box Testing?**
Combination of **Black Box and White Box testing**, where testers know some internal details.

**22. What is Compatibility Testing?**
Testing to ensure the software works across **different browsers, devices, operating systems, or networks**.

**23. What is Performance Testing?**
Performance testing checks **speed, scalability, and stability** under load.

**24. What is Load Testing?**
Load testing verifies how the system behaves when subjected to **expected user traffic**.

-**25. What is Stress Testing?**
Stress testing evaluates system behavior under **extreme or beyond normal load** conditions.

**26. What is Usability Testing?**
Usability testing ensures the application is **easy to use and user-friendly**.

**27. What is Security Testing?**
Security testing identifies **vulnerabilities** to protect against unauthorized access, attacks, or data breaches.

**28. What is Test Plan?**
A **document** describing the testing scope, objectives, resources, schedule, and approach.

**29. What is Test Strategy?**
A **high-level document** outlining the overall testing approach, objectives, and principles for a project.

**30. What is Test Data?**
The **input data** used for executing test cases (both valid and invalid).

**31. What is Defect Life Cycle?**
The process a defect goes through from **identification → fixing → retesting → closure**.

**32. What is Severity vs Priority in a Bug?**

* **Severity:** How badly the bug affects the system (technical impact).
* **Priority:** How quickly the bug should be fixed (business impact).


**33 What is the Test Pyramid and why is it useful?**

It's A layering strategy: **many unit**, **fewer service/integration**, **very few UI/E2E** tests. It improves feedback speed, stability, and maintenance cost.

**34 Test Pyramid vs Test Trophy?**

The **Test Pyramid** emphasizes having many unit tests, fewer integration tests, and very few end-to-end tests for speed and maintainability, while the **Test Trophy** shifts the focus toward having more integration tests for higher confidence in real-world behavior, with fewer unit and end-to-end tests.

**35 What is MC/DC coverage?**

**Modified Condition/Decision Coverage** requires each boolean condition in a decision to **independently affect** the outcome at least once.

**36 What is mutation testing?**

It's a software testing technique where small changes (mutations) are intentionally introduced into the program’s source code (like changing == to != or + to -) to check if the existing test suite detects the errors.

**37 What is property-based testing?**

It's a testing approach where instead of writing specific input-output test cases, you define general properties (rules or invariants) that should always hold true for your code.

**38 Pairwise/combinatorial testing—when and how?**

Pairwise (combinatorial) testing is a software testing technique where you design test cases so that all possible pairs of input parameters are covered at least once, instead of testing every possible combination.

**39 Decision Table vs State Transition testing?**

* **Decision Table Testing** → Focuses on testing **different combinations of inputs/conditions** and their expected outputs. It’s like a truth table that shows what should happen for each possible input scenario. Best when business rules are complex.

* **State Transition Testing** → Focuses on testing **different states of a system and valid/invalid transitions** between them based on events or inputs. Best when the system’s behavior depends on its **current state** (e.g., login → logged in → logout).

👉 **Key difference:** Decision tables test **input conditions and rules**, while state transition tests **system behavior across states.**



**Decision tables** model complex business rules (conditions→actions). **State transition** models behavior across **states/events** with valid/invalid transitions.

### 8) State transition coverage types?

**A:** **State coverage**, **transition coverage**, **path coverage**, **n-switch coverage** (cover sequences of n transitions).

### 9) How do you test time-based logic (DST/leap years)?

**A:** Use **clock injection**/time freezing, test **DST shifts**, **leap years (Feb 29)**, **time zones**, boundary **00:00/23:59**, and **epoch overflow**.

### 10) How do you verify floating-point boundaries?

**A:** Test **exact bounds**, **just-inside/outside (ε)**, **rounding modes**, and **precision loss** in serialization/deserialization.

---

## API / Services

### 11) What is idempotency and how do you test it?

**A:** Multiple identical requests have the **same effect** (e.g., PUT, idempotency keys for POST). Re-send requests and verify **no duplicate side-effects**.

### 12) How to test pagination?

**A:** Check **page size**, **next/prev cursors**, **stable ordering**, **last page behavior**, and **consistent totals** under data churn.

### 13) How to test filtering & sorting?

**A:** Validate **field coverage**, **AND/OR logic**, **null handling**, **case sensitivity**, **locale collation**, and **stable tie-breaks**.

### 14) Proper HTTP status code testing?

**A:** Verify **2xx success**, **4xx client errors** (validation, auth), **5xx server errors**, and **problem+json** bodies where applicable.

### 15) Testing rate limiting?

**A:** Drive requests over thresholds; assert **429**, **Retry-After**, **X-RateLimit** headers, and **no partial side-effects**.

### 16) How to test ETags/conditional requests?

**A:** Use **If-None-Match/If-Modified-Since**; verify **304** on unchanged, **200** on change, and cache correctness.

### 17) API schema/contract testing?

**A:** Validate requests/responses against **OpenAPI/JSON Schema**; enforce **backward compatibility** via **consumer-driven contracts (e.g., Pact)**.

### 18) OAuth2/JWT flows—what to test?

**A:** **Token issuance/expiry**, **refresh**, **scope/claims authorization**, **invalid signature**, **clock skew**, **token revocation**.

### 19) CORS testing?

**A:** Check **preflight OPTIONS**, **Access-Control-Allow-\*** headers, **credentialed requests**, and deny **unexpected origins**.

### 20) API resiliency patterns to test?

**A:** **Retries with backoff/jitter**, **circuit breakers**, **timeouts**, **bulkheads**; simulate slow/failed dependencies and verify fallbacks.

---

## Performance & Reliability

### 21) Throughput vs latency percentiles?

**A:** **Throughput** = requests/sec. **Latency**: track **p50/p95/p99**; SLOs commonly use **p99** under **steady load**.

### 22) Closed vs open workload models?

**A:** **Closed**: fixed users + think time. **Open**: arrival rate (Poisson-like). Pick model matching **production traffic**.

### 23) Think time and pacing—why matter?

**A:** They avoid **coordinated omission**, making load tests mirror real **user behavior** and realistic concurrency.

### 24) Ramp-up/ramp-down strategy?

**A:** Gradually increase/decrease load to observe **auto-scaling**, **warmup effects**, and avoid false failure spikes.

### 25) Using Little’s Law in perf testing?

**A:** **L = λ × W** (users = arrival rate × response time). Sanity-check measured **concurrency** vs **latency/throughput**.

### 26) Bottleneck triage?

**A:** Correlate **APM traces**, **CPU/IO/mem**, **DB metrics**, **GC**, and **lock contention** with **slow endpoints**.

### 27) Performance regression gates in CI?

**A:** Fail pipeline if **latency/throughput/error rate** deviates beyond **baseline thresholds** with **statistical tolerance**.

### 28) Soak/endurance testing?

**A:** Long-duration load to reveal **memory leaks**, **resource exhaustion**, **connection pool depletion**, **time-rollover bugs**.

### 29) Spike testing?

**A:** Sudden load bursts; verify **autoscale**, **circuit breaker**, **graceful errors**, and **quick recovery**.

### 30) Capacity planning validation?

**A:** Model **peak + headroom**, test **N+1 node loss**, and verify **SLOs** at expected **max concurrency**.

---

## Web/Mobile & Frontend Quality

### 31) What are Core Web Vitals and how to test them?

**A:** **LCP, INP, CLS**. Measure in **lab** and **field**; set budgets; test different network/CPU throttles.

### 32) How to do visual regression testing?

**A:** **DOM-stable selectors**, **baseline screenshots**, **perceptual diffs**, tolerate **dynamic content** with masks/ignore-regions.

### 33) Service Worker/PWA testing?

**A:** **Offline**, **cache versioning**, **update strategies**, **push notifications**, **fallbacks** when cache stale.

### 34) Responsive testing strategy?

**A:** Test **breakpoints**, **orientation**, **DPR**, **zoom/viewport meta**, **touch vs keyboard** interactions.

### 35) Accessibility (a11y) checks?

**A:** **Semantic HTML**, **landmarks**, **labeling**, **color contrast**, **keyboard traps**, **focus order**, **ARIA** validity.

### 36) Internationalization/localization testing?

**A:** **Pluralization**, **RTL**, **date/number/currency**, **text expansion**, **locale sorting**, **IME input**.

### 37) Network resilience in web apps?

**A:** Test **offline/poor-network**, **retry queues**, **background sync**, **timeout UIs**, **partial renders**.

### 38) Security headers in web apps?

**A:** Verify **CSP**, **HSTS**, **X-Frame-Options/COEP/COOP**, **Referrer-Policy**, **Permissions-Policy**.

---

## Data, DB, and Pipelines

### 39) How to test DB transactions & isolation?

**A:** Validate **ACID**, check anomalies per level: **dirty read**, **non-repeatable read**, **phantoms** with concurrent sessions.

### 40) Migration testing?

**A:** **Backup & dry-run**, **forward + rollback**, **data transforms**, **zero-downtime** (Dual-write/expand-migrate-contract).

### 41) Referential integrity tests?

**A:** Verify **FK constraints**, **cascade rules**, **orphan prevention**, and **ON CONFLICT/UPSERT** logic.

### 42) ETL/ELT data quality testing?

**A:** **Schema conformance**, **nulls/ranges**, **duplicate keys**, **aggregations**, **reconciliation** between source/target.

### 43) Event-driven processing semantics?

**A:** Validate **at-least-once**, **exactly-once** (via **idempotent consumers**, **dedupe keys**), and **ordering** assumptions.

### 44) Message queue DLQ testing?

**A:** Force **poison messages**, assert **retry policy**, **DLQ routing**, **alerting**, and **replay** handling.

### 45) Eventual consistency tests?

**A:** Use **polling**/**outbox**, assert **read-after-write** behavior where guaranteed, and **sagas** for cross-service workflows.

---

## CI/CD, Environments, & Test Engineering

### 46) Test impact analysis (TIA)?

**A:** Run only tests affected by recent changes using **coverage maps**/**dependency graphs** to speed CI.

### 47) Flaky test management?

**A:** **Deterministic seeds**, **isolate state**, **network stubs**, **clock control**, **quarantine + fix** policy.

### 48) Parallelism & sharding?

**A:** Split tests by **historical duration** or **file count**; ensure **data isolation** (unique tenants/db/schema per worker).

### 49) Test data management?

**A:** **Factory fixtures**, **synthetic data**, **masked prod snapshots**, **idempotent seeds**, and **lifecycle cleanup**.

### 50) Ephemeral environments?

**A:** Spin **per-PR** envs with **IaC/containers** for realistic **E2E**; auto-teardown post-checks.

### 51) Service virtualization?

**A:** Simulate dependencies with **WireMock/Mountebank** to test **error cases**, **latency**, **rare responses**.

### 52) Feature flag testing?

**A:** Validate **on/off/mixed cohorts**, **migration paths**, **config drift**, and **safe defaults** on flag outage.

### 53) Canary/Blue-Green validation?

**A:** Compare **metrics/errors** between old/new; verify **rollback** speed and **sticky session** handling.

### 54) Chaos testing basics?

**A:** Inject **failures/latency** (kill pods, drop network) and assert **graceful degradation**, **alerts**, **SLOs**.

---

## Security & Quality Gates

### 55) Mapping tests to OWASP Top 10?

**A:** Create suites for **Injection**, **Auth/Session**, **XSS**, **Access control**, **Insecure deserialization**, **SSRF**, etc.

### 56) Secrets management validation?

**A:** Ensure **no secrets in repos/logs**, use **KMS/secret stores**, rotate and test **revocation**.

### 57) Dependency vulnerability (SCA) gates?

**A:** Scan SBOM, **fail CI** on high CVEs, verify **allow-lists**, **pinning**, and **upgrade paths**.

### 58) SSRF test strategy?

**A:** Attempt internal endpoints (e.g., **169.254.169.254**), blocked schemes, and **metadata service protections**.

### 59) MFA/2FA testing?

**A:** **TOTP/SMS/Push** flows, **backup codes**, **device trust**, **recovery** paths, and **replay protection**.

### 60) Observability tests?

**A:** Assert **structured logs**, **trace IDs propagation**, **metric labels**, and **PII scrubbing**.

---

## UI Automation Engineering (Playwright/Cypress/Selenium Concepts)

### 61) Locator strategy best practices?

**A:** Prefer **data-testid**/**role/name**; avoid brittle **XPath** on layout; ensure **stable, semantic** selectors.

### 62) Auto-wait vs explicit waits?

**A:** Use framework **auto-wait** for **visible/attached/stable**; only add **explicit waits** for **network/async** events.

### 63) Handling iframes and shadow DOM?

**A:** Switch to **frame context**; for shadow DOM, use **piercing selectors** (if supported) or expose **test hooks**.

### 64) File upload/download automation?

**A:** Use APIs like **setInputFiles**/**download listeners**; validate **content-type**, **size**, and **checksum**.

### 65) Network stubbing & assertions?

**A:** Intercept **requests/responses**, **stub** dependencies, assert **payloads**, **headers**, and **retry behavior**.

### 66) Parallel E2E tests without cross-talk?

**A:** **Isolated contexts**/**fresh users**, **unique test data**, **server-side tenant isolation**, and **idempotent teardown**.

---

If you want, I can turn any subset into a **cheat-sheet PDF** or **flashcards**, or tailor these to **Playwright** for your Generous Circle app (login, signup, emails, API, etc.).






## 🔹 Intermediate Level (11–20)

**11. What is the Software Development Life Cycle (SDLC)?**
The SDLC is the process of **planning, developing, testing, deploying, and maintaining** software.

**12. What is the Software Testing Life Cycle (STLC)?**
The STLC includes:

1. Requirement Analysis
2. Test Planning
3. Test Case Development
4. Test Environment Setup
5. Test Execution
6. Test Closure

**13. What is Agile Testing?**
Agile testing follows the **Agile methodology**, where testing is done continuously in sprints, and QA collaborates closely with developers and product owners.


**14. What is the difference between Manual Testing and Automation Testing?**

* **Manual:** Human testers execute test cases.
* **Automation:** Uses tools (Selenium, Playwright, Cypress) to run tests automatically.

**15. What is Black Box Testing vs White Box Testing?**

* **Black Box:** Tests functionality without knowing code.
* **White Box:** Tests internal code, logic, and structures.

**16. What are Test Deliverables?**
Artifacts provided during the testing process, such as Test Plan, Test Cases, Bug Reports, and Test Summary Reports.

**17. What is a Test Plan?**
A Test Plan is a **document outlining testing strategy, objectives, scope, schedule, resources, and deliverables**.

**18. What is a Test Strategy?**
A **high-level document** defining the overall testing approach, tools, levels of testing, and responsibilities.

**19. What is Boundary Value Analysis (BVA)?**
BVA tests input values at the **boundaries** (e.g., if input range is 1–100, test 0, 1, 100, 101).

**20. What is Equivalence Partitioning?**
It divides input data into **valid and invalid partitions** to reduce test cases (e.g., input 1–100 → partitions: <1, 1–100, >100).

## 🔹 Expert Level (21–30)

**21. What is Continuous Testing in DevOps?**
Continuous Testing means integrating automated tests into the **CI/CD pipeline** to ensure rapid feedback.


**22. What is Test Automation Framework?**
A structured set of **guidelines, tools, and libraries** used to create and maintain automated test scripts (e.g., Data-Driven, Hybrid, Page Object Model).

**23. How do you prioritize test cases?**

* Business impact
* Risk & probability of failure
* Frequency of use
* Critical functionalities

**24. What is Risk-Based Testing?**
Testing is prioritized based on **risk impact and likelihood** (high-risk features get tested first).

**25. What are Mocking and Stubbing in QA?**

* **Mocking:** Creating fake objects to test dependencies.
* **Stubbing:** Providing predefined responses for method calls.


**26. How do you ensure quality in Agile projects?**

* Test early and continuously
* Collaborate with developers and product owners
* Use automation for regression
* Conduct frequent reviews & retrospectives

---

**27. What is Exploratory Testing?**
Unscripted, simultaneous learning, test design, and execution to discover defects not covered by formal test cases.

---

**28. How do you handle flaky tests in Automation?**

* Stabilize test environment
* Add proper waits
* Improve test data management
* Re-run failed tests selectively

---

**29. What is the difference between Load Testing, Stress Testing, and Endurance Testing?**

* **Load:** Test system under expected load.
* **Stress:** Test beyond normal load until failure.
* **Endurance (Soak):** Test under load for a long time to check stability.

---

**30. How do you measure software quality?**
Metrics:

* Defect Density
* Test Coverage
* Mean Time to Failure (MTTF)
* Customer Satisfaction
* Code Quality metrics (SonarQube)

---

🔥 These 30 cover **beginner → expert progression**.

Would you like me to also create a **cheat sheet table (Q\&A in one line for quick review before interviews)** so you can revise faster?
