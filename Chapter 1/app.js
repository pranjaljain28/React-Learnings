// Hello World from React
const heading_react = React.createElement(
    "h1",
    {id:"heading"},             
    "Hello World from React!"
);
const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
root_react.render(heading_react);



//! Create nested React Elements

/** 
    <div id:"parent">
        <div id: "child1">
            <h1>This is an h1 tag</h1>
            <h2>This is an h2 tag</h2>
        </div>
        <div id: "child2">
            <h1>This is an h1 tag</h1>
            <h2>This is an h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement("div",{ id:"parent"},
    [
        React.createElement("div" ,{ id:"child1"},
        [
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ]),
        React.createElement("div" ,{ id:"child2"},
        [
            React.createElement("h1",{},"This is an h1 tag"),
            React.createElement("h2",{},"This is an h2 tag")
        ]),
    ] 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//root.render(heading) function's job is basically to take this object(createElement) and create the h1 tag which the browser understands and put that up inside the root element .

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
