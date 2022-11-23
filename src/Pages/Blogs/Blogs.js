import React from 'react';

const Blogs = () => {

    return (
        <div>
            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">What are the different ways to manage a state in a React application?</h2>
                    <div className="card-actions justify-between">
                        <div>
                            <p>There are four main types of state you need to properly manage in your React apps:<br />
                                1. Local state<br />
                                2. Global state<br />
                                3. Server state<br />
                                4. URL state</p><br />

                            <p><span className='font-bold'>Local (UI) state: </span>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).<br />useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.<br />The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p><br />

                            <p><span className='font-bold'>Global (UI) state: </span>Once you attempt to manage state across multiple components, things get a bit trickier.You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.What do you do if you want to update a component's state from basically anywhere in your app? You turn it into global state.To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p><br />

                            <p><span className='font-bold'>Server state: </span>Server state can be deceptively challenging to manage.At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.</p><br />

                            <p><span className='font-bold'>URL state: </span>URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.<br /> URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.<br />If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">How does prototypical inheritance work?</h2>

                    <div className="card-actions">
                        <p>JEverything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword 'class' and 'inheritance'.<br />So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">What is a unit test? Why should we write unit tests?</h2>
                    <div className="card-actions">
                        <div>
                            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br />Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br />Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card w-5/6 mx-auto my-5 border-2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto">React vs. Angular vs. Vue?</h2>
                    <div className="card-actions justify-between">
                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">Angular vs React :</h2>
                            <p>If the choice you're making is based on Angular vs React alone, then you'll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.<br />React often requires extra modules and components, which keeps the core library small, but means there's extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn't require extras like React often does, though it does have a steeper learning curve for its core compared to React.<br /> React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.</p>
                        </div>

                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">React vs Vue :</h2>
                            <p>The choice between React vs Vue is often debated and it's not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there's no sign that React is on the decline either.<br /> Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.<br />Overall, Vue might be the best choice if you're a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>
                        </div>

                        <div>
                            <h2 className="text-start font-bold mx-auto mt-4">Angular vs Vue :</h2>
                            <p>n most cases, you probably wouldn't be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.<br />A large library like Angular would require more diligence in keeping up with what's new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.<br />It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that's another thing to keep in mind, though that wouldn't have a huge impact on your decision.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;