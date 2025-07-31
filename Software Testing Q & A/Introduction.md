## **Software Testing**


Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is Defect free. It involves execution of software/system components using manual or automated tools to evaluate one or more properties of interest. The purpose of software testing is to identify errors, gaps or missing requirements in contrast to actual requirements.

**Why Software Testing is Important?**

Software Testing is Important because if there are any bugs or errors in the software, it can be identified early and can be solved before delivery of the software product. Properly tested software product ensures reliability, security and high performance which further results in time saving, cost effectiveness and customer satisfaction.

**What are the benefits of Software Testing?**

*Cost-Effective:* It is one of the important advantages of software testing. Testing any IT project on time helps you to save your money for the long term. In case if the bugs caught in the earlier stage of software testing, it costs less to fix.

*Security:* It is the most vulnerable and sensitive benefit of software testing. People are looking for trusted products. It helps in removing risks and problems earlier.

*Product quality:* It is an essential requirement of any software product. Testing ensures a quality product is delivered to customers.

*Customer Satisfaction:* The main aim of any product is to give satisfaction to their customers. UI/UX Testing ensures the best user experience.

**Testing in Software Engineering**  - As per ANSI/IEEE 1059, Testing in Software Engineering is a process of evaluating a software product to find whether the current software product meets the required conditions or not. The testing process involves evaluating the features of the software product for requirements in terms of any missing requirements, bugs or errors, security, reliability and performance.

**Types of Software Testing**

Typically Testing is classified into three categories.

1. Functional Testing
2. Non-Functional Testing or Performance Testing
3. Maintenance (Regression and Maintenance)


**1. Functional Testing**  -  Checks if the system does what it's supposed to do, based on requirements (e.g. login works, form submits).

            Unit Testing  - Tests individual pieces of code (like functions or methods) in isolation. Done by developers.

            Integration Testing  - Tests how different parts/modules work together, like database + API + frontend.

            Smoke - A quick test to check if the core functions of the app work (e.g., app launches, API is reachable). Like a sanity check.

            UAT ( User Acceptance Testing) - Final testing by the actual users or clients to see if the software meets their needs.

            Localization - Tests if the app works correctly in a specific language, region, or culture (like currency or date format in Kenya).

            Globalization - Ensures the app can be used in multiple countries/languages without breaking (language switching, encoding).

            Interoperability - Checks if the system works well with other systems or software (e.g., integrates with PayPal or external APIs).

            Sanity Testing - A quick check to see if a specific bug is fixed and nothing major is broken after that fix.

            Performance Testing - Measures how fast and stable the system is under load (e.g., 1000 users login at once).

            Security Testing - Checks if the system is protected against attacks, data leaks, unauthorized access, etc.

**2. Non Functional Testing**  -  This kind of Testing checks how well the system performs rather than what it does.

It focuses on things like speed, usability, reliability, and capacity — not the actual features.

            Performance Testing - Checks how fast the system responds under normal conditions.

            Load Testing - Tests how the system handles many users or requests at the same time.

            Stress Testing - Pushes the system beyond its limits to see how it breaks or recovers.

            Endurance (Soak) Testing - Checks if the system can run smoothly for a long time (e.g., 24+ hrs).

            Volume Testing - Tests how the system performs with a large amount of data (e.g., 1 million records).

            Scalability Testing - Checks if the system can grow and still perform well when more users or data are added.

            Usability Testing - Tests how easy and intuitive the app is for real users to use.

            Compatibility Testing - Ensures the system works on different devices, browsers, or OSs.

**3. Maintenance**  -  Testing done after the software has been released, to handle updates, bug fixes, patches, or improvements.

It includes regression tests, but also other tests related to changes after deployment.

            Regression - Testing done to make sure new code changes didn’t break existing features. Think of it as: “Make sure the old stuff still works after adding new stuff.”


**Testing Strategies in Software Engineering**

Unit Testing: This software testing basic approach is followed by the programmer to test the unit of the program. It helps developers to know whether the individual unit of the code is working properly or not.

Integration testing: It focuses on the construction and design of the software. You need to see that the integrated units are working without errors or not.

System testing: In this method, your software is compiled as a whole and then tested as a whole. This testing strategy checks the functionality, security, portability, amongst others.

**Program Testing**
Program Testing in software testing is a method of executing an actual software program with the aim of testing program behavior and finding errors. 
The software program is executed with test case data to analyse the program behavior or response to the test data. A good program testing is one which has high chances of finding bugs.





## **7 Principles of Software Testing with Examples**

The Seven Software Testing principles are:

1) Exhaustive testing is not possible
2) Defect Clustering
3) Pesticide Paradox
4) Testing shows presence of defects
5) Absence of Error – fallacy
6) Early Testing
7) Testing is context dependent


**1) Exhaustive testing is not possible**

    Yes! Exhaustive testing is not possible. Instead, we need the optimal amount of testing based on the risk assessment of the application.

    And the million dollar question is, how do you determine this risk?

    To answer this let’s do an exercise

    In your opinion, Which operation is most likely to cause your Operating system to fail?

    I am sure most of you would have guessed, Opening 10 different application all at the same time.

    So if you were testing this Operating system, you would realize that defects are likely to be found in multi-tasking activity and need to be tested thoroughly which brings us to our next principle Defect Clustering


**2) Defect Clustering** - Defect Clustering which states that a small number of modules contain most of the defects detected. This is the application of the Pareto Principle to software testing: approximately 80% of the problems are found in 20% of the modules.

By experience, you can identify such risky modules. But this approach has its own problems

If the same tests are repeated over and over again, eventually the same test cases will no longer find new bugs.


**3) Pesticide Paradox**  -  Repetitive use of the same pesticide mix to eradicate insects during farming will over time lead to the insects developing resistance to the pesticide Thereby ineffective of pesticides on insects. 
The same applies to software testing. If the same set of repetitive tests are conducted, the method will be useless for discovering new defects.

To overcome this, the test cases need to be regularly reviewed & revised, adding new & different test cases to help find more defects.

Testers cannot simply depend on existing test techniques. He must look out continually to improve the existing methods to make testing more effective. But even after all this sweat & hard work in testing, you can never claim your product is bug-free. To drive home this point, let’s see this video of the public launch of Windows 98

You think a company like MICROSOFT would not have tested their OS thoroughly & would risk their reputation just to see their OS crashing during its public launch!


**4) Testing shows a presence of defects**  -  Hence, testing principle states that – Testing talks about the presence of defects and doesn’t talk about the absence of defects. i.e. Software Testing reduces the probability of undiscovered defects remaining in the software but even if no defects are found, it is not a proof of correctness.

But what if, you work extra hard, taking all precautions & make your software product 99% bug-free. And the software does not meet the needs & requirements of the clients.

This leads us to our next principle, which states that- Absence of Error


**5) Absence of Error – fallacy**  -  It is possible that software which is 99% bug-free is still unusable. This can be the case if the system is tested thoroughly for the wrong requirement.
Software testing is not mere finding defects, but also to check that software addresses the business needs. 
The absence of Error is a Fallacy i.e. Finding and fixing defects does not help if the system build is unusable and does not fulfill the user’s needs & requirements.

To solve this problem, the next principle of testing states that Early Testing


**6) Early Testing**  -  Early Testing – Testing should start as early as possible in the Software Development Life Cycle. So that any defects in the requirements or design phase are captured in early stages. 
It is much cheaper to fix a Defect in the early stages of testing. But how early one should start testing? It is recommended that you start finding the bug the moment the requirements are defined.
More on this principle in a later training tutorial.


**7) Testing is context dependent**  -  Testing is context dependent which basically means that the way you test an e-commerce site will be different from the way you test a commercial off the shelf application.
 All the developed software’s are not identical. You might use a different approach, methodologies, techniques, and types of testing depending upon the application type. 
 For instance testing, any POS system at a retail store will be different than testing an ATM machine.


## **V-Model in Software Testing**

V Model is a highly disciplined SDLC model which has a testing phase parallel to each development phase.
The V model is an extension of the waterfall model wherein software development and testing is executed in a sequential way. It is known as the Validation or Verification Model.
                SDLC - Software Development Life Cycle











