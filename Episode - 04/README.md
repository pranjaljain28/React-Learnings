# Namaste React Episode - 04

Here are the key highlights from this episode:

1. Build a Food Ordering App
2. Build an App Layout
3. Build a header component with logo & Nav & Cart
4. Build a body component
 - Build Restaurant Component
 - Use Static data initially
 - Make your card dynamic(pass the props)
5. Render your cards with dynamic data of restaurants
6. Use Array.map to render all the restaurants


* Copied
Well, here are some learnings that I want to share with you all!!
📌How to start building a Frontend App?
 <PLANNING PHASE>📝
 ♦️ Step 1: Building a Frontend app starts with a Wireframe plan, a high-level diagram of how the UI will look.
 ♦️ Step 2: After the high-level wireframe design starts the Low-Level Design i.e. what all components are needed and how will they be nested in each other.
 <IMPLEMENTATION PHASE>
 ♦️ Step 3: Now starts the actual Implementation. We start building each component individually.

📌What are Props?
 ♦️ Props are nothing but the "Properties" that we can pass to a component in React.
 ♦️ Props allow us to pass data dynamically to a component.
 ♦️ We know Functional Components are normal JS Functions. Similarly, Props are like normal Arguments that we can send to these JS Functions.
 ♦️ All the props we send to a component are actually wrapped into one single "props" object. They can be accessed like : {props.name} inside the component.

📌What is CONFIG-DRIVEN UI?
 ♦️ Config-Driven UI is a very important design concept where the UI of the app is dependent upon the Config i.e. the data coming from backend.
 ♦️ It means "controlling the UI using the data".
 ♦️ It makes our app dynamic and allows the same app to have different UI across different geographic locations based upon what data is coming from backend. 
Eg: Suppose in Swiggy, there are some Special offers given by restaurants of Punjab but no such similar offers given by restaurants of Karnataka. So the same Swiggy app can have different UI for these scenarios.

📌Some Best Practices of Writing React Code:
 ♦️ Destructure the props object to use the properties instead of writing {props.data.name}, {propa.data.cuisines} etc again and again.
 ♦️ Whenever mapping over any list, always give "key" props to each list item. The "key" prop helps React to uniquely identify each list item and optimizes the rendering process.
 ♦️ It is an anti-pattern in React to use index as a key. We can use it, but only as a last resort. 
Rule: Not Using Key <<<<<< Using Index as Key <<<<<<<<<< Using Unique Id as Key
 ♦️ For every Component, create a Separate file instead of keeping all components in the same file. This improves Readability and Understandability of code. It follows the Single Responsibility Principle.
 ♦️ The File name should be exactly same as the Component name. Eg: Header component should be in a file named "Header.js" or "Header.jsx".