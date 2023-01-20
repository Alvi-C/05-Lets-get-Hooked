05-Lets-get-Hooked!

Working links:
Swiggy API: https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING

Swiggy img cdn: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

Q1: What is state? Why we use the state?
A: In React, state refers to a way of storing and managing data that affects the behavior and rendering of a component. State allows a component to keep track of important information, such as user input, form data, or other dynamic data, and to update itself and re-render in response to changes in that data.

State is an object that holds values that can change and cause a component to re-render. It allows React components to update their output in response to changes in their input, without having to re-mount the entire component tree.

We use state for:

    - Storing data that changes over time and affects the component's behavior or appearance, such as user input or the current step in a form.
    - Managing the current state of a component, such as whether a button is enabled or disabled, or whether a form is valid or invalid.
    - Controlling the flow of data between components, such as passing data from a parent component to a child component as props.
    - Controlling the logic of component, such as toggling the visibility of an element, or updating the position of an element on the screen.

It's important to note that state should be used with care, and it should be used only when it's necessary. Too much state can make your component hard to understand and test. Furthermore, state should be considered as private data and should be used only within the component that defines it.

Q2: What is React hook? Why we use the hook?
A: In the context of React, a hook is a function that allows you to use state and other React features in functional components. Prior to the introduction of hooks, state and other features were only available in class-based components.

Hooks allow you to write more expressive and maintainable code by breaking down logic into reusable and composable functions. This can make it easier to understand and test your code. Additionally, hooks make it possible to use state and other features in functional components, which can make it easier to write and use higher-order components, and can make it easier to refactor code.

For an example: useState() is named as React hook in react but it is actually a function. And what is this useState() function used for? The useState() function is used for making React variable and make that variable insync with UI when the variable changes.

Q3: What is One way data binding in React?
A: One-way data binding in React refers to the process of passing data from a parent component to a child component. In React, data is passed from a parent component to a child component via props (short for "properties").

Props are a way for a parent component to pass data down to a child component, and for the child component to receive and use that data. Once the data has been passed down to the child component, it cannot be modified by the child component. This is known as one-way data binding because the data only flows in one direction, from the parent to the child.

This design pattern allows for a clear separation of concerns, making it easier to reason about and manage the flow of data in your application. It also makes it easier to debug and test your code, as data can only flow in one direction, making it easier to understand where data is coming from and how it is being used.

Q4: What is Reconciliation in react?
A: Reconciliation is the process that React uses to determine what changes need to be made to the actual DOM, based on the updates made to the virtual DOM. When a component's state or props change, React will compare the current virtual DOM with the new virtual DOM and determine the minimal set of changes needed to bring the actual DOM into alignment with the new virtual DOM. These changes are then made to the actual DOM, resulting in the update of the rendered component. This process is efficient and fast due to the use of the virtual DOM.

Q5: What is React Fibre?
A: React Fiber is a new reconciliation algorithm introduced in React 16. It is a complete rewrite of the previous algorithm, designed to increase the flexibility and performance of React. The main goal of Fiber is to improve the ability of React to handle complex UIs and interactions, by breaking the work of updating the virtual DOM into smaller chunks that can be spread out over multiple frames. This allows React to prioritize updates and respond to user input more quickly, resulting in a smoother and more responsive user experience. Additionally, Fiber also introduced new features such as the ability to pause, abort, or reuse work and the ability to assign priority to different updates.

Q6: What is synthetic events?
A: In React, a synthetic event is a cross-browser wrapper around the native browser event. React uses synthetic events to normalize the event handling across different browsers, providing a consistent and predictable way to handle events in your applications.

When you register an event listener in React, it wraps the browser's native event with a synthetic event object. This synthetic event object has the same properties as the native event, but it also has some additional properties and methods that are specific to React.

One of the main benefits of synthetic events is that they provide a consistent and predictable way to handle events across different browsers, which can make it easier to write and maintain cross-browser compatible code. Additionally, synthetic events have a consistent event pooling mechanism, which helps improve the performance of your application by reusing event objects and reducing memory allocation.

Examples of synthetic events in React include onClick, onChange, onKeyDown, etc.

Q7: What is e.target.value?
A: `e.target.value is a property of a synthetic event object in React, where e is the event object passed to an event handler and target is a property of that event object. The value property of the target object refers to the current value of the element that the event is triggered on.

For example, when an onChange event is triggered on an input element, the e.target refers to the input element and e.target.value will be the current value of that input element.

It's important to note that e.target is a property of the synthetic event object, which is a cross-browser wrapper around the native browser event. This means that the e.target and e.target.value properties will be consistent across different browsers.
