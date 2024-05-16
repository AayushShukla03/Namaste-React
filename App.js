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
const parent = [React.createElement(
    "div",{id : "parent"}, 
    [React.createElement("div",{id : "child1"},
    React.createElement("h1",{},"I am an H1 tag"), 
    React.createElement("h2",{},"I am an H2 tag")),
    React.createElement("div",{id : "child2"},
    React.createElement("h1",{},"I am an H1 tag"), 
    React.createElement("h2",{},"I am an H2 tag"))]
    )];
    // but this looks untidy, react is used to make things easy but right now it looks very bad, thats why we use JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);