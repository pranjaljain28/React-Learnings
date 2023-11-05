import React from "react";
import ReactDOM from "react-dom/client";

//! React.createElement ==>ReactElement ==> JS Object ==>   HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");


//! JSX => (transpiled before it reaches the JS) - PARCEL - Babel
//! JSX ==> React.createElement ==>ReactElement ==> JS Object ==>   HTMLElement(render)
const jsxHeading = (<h1 id="heading">
    Namaste React using JSX 🚀
    </h1>);

//! An annonymous Function
const jsFunction = () => (<h1>
    A JavaScript Function  🚀
    </h1>);

//! REACT Component <==> JS Function
const Title = () => (<h1 id="heading">
    Component inside a Component 
    </h1>);

const data = <h1>1000</h1>;

//! REACT Functional Component
//! REACT Component inside a Component  ==> Component Composition   
const HeadingComponent = () => {
    return (
    <div id = "container">
    {jsFunction()}
    {Title()}                
    <Title/>                                   
    <Title></Title>         
    {data}
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
    </div>)
};

//! REACT Functional Component
// const HeadingComponent2 = () => ( <h1>Namaste React Functional Component</h1> );



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);                   //!     Namaste React 🚀
// root.render(jsxHeading);                //!     Namaste React using JSX 🚀
root.render(<HeadingComponent/>);


