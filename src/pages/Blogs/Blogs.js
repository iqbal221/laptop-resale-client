import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Blogs = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="lg:mx-24 md:mx-6 mx-3 mt-10">
        <h2 className="text-center md:text-2xl text-xl text-info font-semibold">
          Importance: Question & Answer
        </h2>
        <div className="border rounded mt-3 md:p-6 p-3">
          <h3 className="text-xl mb-2 ">
            <span className="text-violet-500 font-semibold mr-3">
              1. Question:
            </span>
            What are the different ways to manage a state in a React
            application?
          </h3>

          <p className="">
            <span className="font-bold mr-2">Answer:</span>
            a) Web Storage The second option is to store the state in the
            browser via web storage. This is useful when we want to persist
            state between reloads and reboots. Examples include cookies, local
            storage, and IndexedDB. These are native browser technologies. Data
            persisted in the browser is tied to a single browser. So, if the
            user loads the site in a different browser, the data will not be
            available. We avoid storing sensitive data in the browser since the
            user may access the app on a shared machine. Some examples of where
            web storage might be most useful include storing a user’s shopping
            cart, saving partially completed form data or storing JWT token in
            HttpOnly Cookie.<br></br>
            b) The Fourth option is to define the state in the parent component.
            Often, the same state is used across multiple components. In those
            cases, it is useful to lift the state to a common parent. The
            lifting state is a two‑step process. First, we declare the state in
            a common parent component, and then we pass the state down to child
            components via props. This pattern should be considered any time a
            few related components need to use the same state. The lifting state
            avoids duplicating states in multiple components. It helps to assure
            that our components all consistently reflect the same state.
            <br></br>
            c) Derived State The fifth option is to compute the new state based
            on the available state and we do not need to declare a state at all.
            If there are existing values that can be composed to give us the
            information we need, then we can calculate that information on each
            render instead of storing it. Some examples include calling .length
            on an array to determine the number of records instead of storing a
            separate numItems variable in the state or deriving an errorsExist
            boolean by checking if the errors array is empty. So, why bother
            deriving the state? Well, deriving the state avoids our state values
            getting out of sync. It simplifies our code since we do not have to
            remember to keep separate values in sync. When we update the state,
            derived values are automatically recalculated in the render.
          </p>
        </div>

        <div className="border rounded mt-3 md:p-6 p-3">
          <h3 className="text-xl mb-2">
            <span className="text-violet-500 font-semibold mr-3">
              2. Question:
            </span>
            How does prototypical inheritance work?
          </h3>

          <p className="">
            <span className="font-bold mr-2">Answer:</span>
            Under the classical inheritance phenomenon, we create a new class
            that actually extends or reuses the properties or functions, or
            methods of another class that are used by several programming
            languages (like C, C++, Java, etc.) JavaScript doesn’t use classical
            inheritance instead it uses the phenomenon called Prototype
            Inheritance. In Prototype Inheritance, an object uses the properties
            or methods of another object via the prototype linkage. All the
            JavaScript objects inherit properties and methods from a prototype
            (like Date objects inherit properties from Date.prototype and so
            on).
          </p>
        </div>
        <div className="border rounded mt-3 md:p-6 p-3">
          <h3 className="text-xl mb-2">
            <span className="text-violet-500 font-semibold mr-3">
              3. Question:
            </span>
            What is a unit test? Why should we write unit tests?
          </h3>

          <p className="">
            <span className="font-bold mr-2">Answer:</span>
            Essentially, a unit test is a method that instantiates a small
            portion of our application and verifies its behavior independently
            from other parts. A typical unit test contains 3 phases: First, it
            initializes a small piece of an application it wants to test (also
            known as the system under test, or SUT), then it applies some
            stimulus to the system under test (usually by calling a method on
            it), and finally, it observes the resulting behavior. If the
            observed behavior is consistent with the expectations, the unit test
            passes, otherwise, it fails, indicating that there is a problem
            somewhere in the system under test. These three unit test phases are
            also known as Arrange, Act and Assert, or simply AAA.
            <br></br>
            <br></br>
            Before diving into the main part of this tutorial and writing unit
            tests, let’s quickly discuss the properties of a good unit test.
            Unit testing principles demand that a good test is: Easy to write.
            Developers typically write lots of unit tests to cover different
            cases and aspects of the application’s behavior, so it should be
            easy to code all of those test routines without enormous effort.
            Readable. The intent of a unit test should be clear. A good unit
            test tells a story about some behavioral aspect of our application,
            so it should be easy to understand which scenario is being tested
            and — if the test fails — easy to detect how to address the problem.
            With a good unit test, we can fix a bug without actually debugging
            the code! Reliable. Unit tests should fail only if there’s a bug in
            the system under test. That seems pretty obvious, but programmers
            often run into an issue when their tests fail even when no bugs were
            introduced. For example, tests may pass when running one-by-one, but
            fail when running the whole test suite, or pass on our development
            machine and fail on the continuous integration server. These
            situations are indicative of a design flaw. Good unit tests should
            be reproducible and independent from external factors such as the
            environment or running order. Fast. Developers write unit tests so
            they can repeatedly run them and check that no bugs have been
            introduced. If unit tests are slow, developers are more likely to
            skip running them on their own machines. One slow test won’t make a
            significant difference; add one thousand more and we’re surely stuck
            waiting for a while. Slow unit tests may also indicate that either
            the system under test, or the test itself, interacts with external
            systems, making it environment-dependent. Truly unit, not
            integration. As we already discussed, unit and integration tests
            have different purposes. Both the unit test and the system under
            test should not access the network resources, databases, file
            system, etc., to eliminate the influence of external factors.
          </p>
        </div>
        <div className="border rounded mt-3 md:p-6 p-3">
          <h3 className="text-xl mb-2">
            <span className="text-violet-500 font-semibold mr-3">
              4. Question:
            </span>
            React vs. Angular vs. Vue?
          </h3>

          <p className="">
            <span className="font-bold mr-2">Answer:</span>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Angular JS</th>
                    <th>React JS</th>
                    <th>Vue JS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>High performance and functionality at minimal cost</td>
                    <td>SEO Friendly</td>
                    <td>Size and Simplicity</td>
                  </tr>

                  <tr className="hover">
                    <th>2</th>
                    <td>Maintenance</td>
                    <td> Boosts performance</td>
                    <td>Purple</td>
                  </tr>

                  <tr>
                    <th>3</th>
                    <td>Reusability</td>
                    <td>Migration to React Native</td>
                    <td>Error Reporting</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td> Simple architecture</td>
                    <td>Stability due to one-way data binding</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Declarative UI</td>
                    <td> Easy migration of technology</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
