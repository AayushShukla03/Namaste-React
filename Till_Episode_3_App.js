// const heading = React.createElement("h1", {id : "heading", xyz: "abc"}, "Hello World from React!"); // now how to use create H1 tag in React? we will use DOM i.e. document.createElemnet, also what is the Object? {} signifies for giving an attribute to our tag. suppose we give the h1 tag an id as heading, then it will be displayed as <h1 id = "heading">Hello World from React!</h1>

// what is this heading actually? if we write console.log(heading) then we will get an Object, so basically it is a react element and react element is nothing but a javascript object, and also what we get inside object is props
// props are children + attributes that we passing, {id : "heading", xyz: "abc"}, "Hello World from React!" these are the props, "Hello World from React!" is the children which will go inside my H1 tag, {id : "heading", xyz: "abc"} are the attributes
// const root = ReactDOM.createRoot(document.getElementById("root")); // also we have use reactDOM and not React as it is the jo of DOM in react to handle DOM manipulation, this will create a root for our react library, this root is the place where all the react code will run, everything that we will render, we will render inside the root
// now we have to just render the heading inside the root
// root.render(heading);  // this render will take the obejct as the input and will convert the object into the H1 tag and will put it up onto the DOM and root

// now suppose we want to create a nested HTML structure inside our React application, how we do that? for example
// <div id= "parent">
//     <div id= "child">
//         <h1>I am an H1 tag</h1>
//     </div>
// </div>
// const parent = React.createElement("div",{id : "parent"}, React.createElement("div",{id : "child"},React.createElement("h1",{},"I am an H1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// now suppose we want siblings, how we do that?
// <div id= "parent">
//     <div id= "child">
//         <h1>I am an H1 tag</h1>
        // <h2>I am an H2 tag</h2>
//     </div>
// </div>

// if we haveto give more than 1 children, then we have to convert the 3rd argument in to array by adding [] to the whole element, i.e it is an array of different children
// const parent = [React.createElement(
//     "div",{id : "parent"}, 
//     React.createElement("div",{id : "child"},
//     React.createElement("h1",{},"I am an H1 tag"), 
//     React.createElement("h2",{},"I am an H2 tag")))];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// now suppose we have more nested structure, how we do that?
// <div id= "parent">
//     <div id= "child1">
//         <h1>I am an H1 tag</h1>
        // <h2>I am an H2 tag</h2>
//     <div id= "child2">
//         <h1>I am an H1 tag</h1>
        // <h2>I am an H2 tag</h2>
//     </div>
// </div>

// if we haveto give more than 1 children, then we have to convert the 3rd argument in to array by adding [] to the whole element, i.e it is an array of different children
// const parent = [React.createElement(
//     "div",{id : "parent"}, 
//     [React.createElement("div",{id : "child1"},
//     React.createElement("h1",{},"I am an H1 tag"), 
//     React.createElement("h2",{},"I am an H2 tag")),
//     React.createElement("div",{id : "child2"},
//     React.createElement("h1",{},"I am an H1 tag"), 
//     React.createElement("h2",{},"I am an H2 tag"))]
//     )];
    // but this looks untidy, react is used to make things easy but right now it looks very bad, thats why we use JSX
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// now we will import React dfrom the react dependency which we have in our node modules
// import React from "react";
// import ReactDOM from "react-dom/client";
// const parent = [React.createElement(
//     "div",{id : "parent"}, 
//     [React.createElement("div",{id : "child1"},
//     React.createElement("h1",{},"This is Namaste React🚀"), 
//     React.createElement("h2",{},"I am an H2 tag")),
//     React.createElement("div",{id : "child2"},
//     React.createElement("h1",{},"I am an H1 tag"), 
//     React.createElement("h2",{},"I am an H2 tag"))]
//     )];
    // but this looks untidy, react is used to make things easy but right now it looks very bad, thats why we use JSX
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// parcel - 1. Dev Build
//           2. Local Server
//           3. HMR = Hot Module Replacement
//           4. File Watching Algorithm - C++
//           5. caching - Faster Builds
//           6. Image Optimization
//           7. Minification of files during production build
//           8. Bundling 
//           9. Compress the file
//           10. Content Hashing
//           11. Code Splitting     
//           12. Differential bundling - support older Browsers
//           13. Diagnostic
//           14. Error Handling
//           15. HTTPs
//           16. Tree Shaking - Remove unused codeconst 
//           17. Different Dev and Production Bundles


// Episode 3
// now we will import React dfrom the react dependency which we have in our node modules
import React from "react";
import ReactDOM from "react-dom/client";

// React Element is nothing but a javascript object, it is not an html tag or content, React.createElement => Object  and then we render this object to become HTML Element, therefore React.createElement => Object => Html Element

// const heading = React.createElement("h1",{id: "heading"}, "Namaste React🚀");
// JSX - it is javascript synatx which enables developers to easily create react elements, and jsx is not a part of react, they both are different

// let us see now how to create a H1 tag in JSX
//JSX - JSX is not HTML in JS, it is HTML-like syntax or XML-like syntax
// JSX -(transpiled) before it reaches to the JS engine, and transpiled means converted into a code which browsers can understand, that react can understand, and this transpiling process is done by 'parcel' but it is a package manger so it doesn't do it by itself. and parcel gives the responsibility of transpiling to a package which is known as "Babel"
// how JSX works?   JSX =>Babel transpiles it to React.createElement => React Element - JSObject => Html Element(render)

// in JSX if you have to give attributes to tag then you have to use camel case unlike htlm where you can can use samllcase also, which shows that JSX is HTML like language and not HTML
// const heading = <h1 id= "heading" className="head" tabIndex="5">Namaste React using JSX🚀</h1> // this jsxHeading is a react element
// const title = ( <h1 id= "heading" className="head" tabIndex="5">Namaste React using JSX🚀</h1>); // this jsxHeading is a react element
// React Component
// There are two types of React Components that are available
// 1. Class Based Component - OLD way of writing Code, it uses JS classes to create compnents
// 2. Functional Component - NEW way of writing Code, it uses JS Functions to create Components

// React Functional Component
// it is juat a normal javascript function that returns a jsx code
// component composition - when you put one component inside another component
// const HeadingComponent = () => (
//     <div id = "container">
//     <Title />
//      <h1 className="heading">Namsate React Functional Component</h1>
//      </div>
// );
// Another way to write code
// const HeadingComponent = () => (
//      <h1>Namsate React Functional Component</h1>
// );

// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // syntax to render react element
// root.render(<HeadingComponent/>) //syntax to render react component



// const HeadingComponent = () => (
//     <div id = "container"> 
//         <h2>{number}</h2>
//         {number} 
//         {title}   
//      <h1 className="heading">Namsate React Functional Component</h1> 
//      </div>
// );
// Another way to write code
// const HeadingComponent = () => (
//      <h1>Namsate React Functional Component</h1>
// );


// const HeadingComponent = () => (
//     <div id = "container"> 
//         <h2>{number}</h2>
//         {number}  
//      <h1 className="heading">Namsate React Functional Component</h1> 
//      </div>
// );
// const elem = <span>React Element</span>
// // React Element
// const title = ( 
//     <h1 id= "heading" className="head" tabIndex="5">
//         {elem} 
//         Namaste React using JSX🚀
//         <HeadingComponent/>
//     </h1>); // this jsxHeading is a react element
// const number = 10000;
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(title); // syntax to render react element
// root.render(<HeadingComponent/>) //syntax to render react component

const HeadingComponent = () => (
    <div id = "container"> 
        <h2>{number}</h2>
        {number}  
     <h1 className="heading">Namsate React Functional Component</h1> 
     </div>
);
const elem = <span>React Element</span>
// React Element
const title = ( 
    <h1 id= "heading" className="head" tabIndex="5">
        {elem} 
        <HeadingComponent></HeadingComponent>
        <HeadingComponent/>
        {HeadingComponent()}
        Namaste React using JSX🚀
    </h1>); // this jsxHeading is a react element
    // there are 3 ways to call Functional component i.e 1. <HeadingComponent/> 2. <HeadingComponent></HeadingComponent> 3.{HeadingComponent()} this 3rd one is used because at the end of the day inside{} we can call any function of JS and it will work and React function component is a function and we will call it like how we use to call it in JS
const number = 10000;
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(title); // syntax to render react element
// root.render(<HeadingComponent/>) //syntax to render react component
