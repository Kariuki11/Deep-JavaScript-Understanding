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

---

**17. What is the difference between Positive and Negative Testing?**

* **Positive Testing:** Checks system with valid input (expected to pass).
* **Negative Testing:** Checks system with invalid input (expected to fail gracefully).

---

**18. What is End-to-End Testing?**
End-to-End testing validates a **complete workflow** of the application, e.g., user logs in → makes a purchase → receives confirmation.

---

**19. What is Black Box Testing?**
Testing the application **without looking at internal code or logic**. Focus is only on inputs and outputs.

---

**20. What is White Box Testing?**
Testing the **internal logic, structure, and code** of the application. Usually done by developers.

---

**21. What is Grey Box Testing?**
Combination of **Black Box and White Box testing**, where testers know some internal details.

---

**22. What is Compatibility Testing?**
Testing to ensure the software works across **different browsers, devices, operating systems, or networks**.

---

**23. What is Performance Testing?**
Performance testing checks **speed, scalability, and stability** under load.

---

**24. What is Load Testing?**
Load testing verifies how the system behaves when subjected to **expected user traffic**.

---

**25. What is Stress Testing?**
Stress testing evaluates system behavior under **extreme or beyond normal load** conditions.

---

**26. What is Usability Testing?**
Usability testing ensures the application is **easy to use and user-friendly**.

---

**27. What is Security Testing?**
Security testing identifies **vulnerabilities** to protect against unauthorized access, attacks, or data breaches.

---

**28. What is Test Plan?**
A **document** describing the testing scope, objectives, resources, schedule, and approach.

---

**29. What is Test Strategy?**
A **high-level document** outlining the overall testing approach, objectives, and principles for a project.

---

**30. What is Test Data?**
The **input data** used for executing test cases (both valid and invalid).

---

**31. What is Defect Life Cycle?**
The process a defect goes through from **identification → fixing → retesting → closure**.

---

**32. What is Severity vs Priority in a Bug?**

* **Severity:** How badly the bug affects the system (technical impact).
* **Priority:** How quickly the bug should be fixed (business impact).

---

✅ That’s 22 more in total (11–32), all **beginner-friendly**.

Do you want me to also create a **sample one-line answer bank** (like flashcards/cheat sheet) so you can **memorize them quickly** for interviews?






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
