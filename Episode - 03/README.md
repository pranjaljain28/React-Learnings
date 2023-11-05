# Namaste React🚀 : Episode-03
**Laying the foundation**

☑️JSX
☑️React.createElement vs Jsx
☑️Role of babel in jsx
☑️React element and React component


**Topic: JSX and its Connection with React**

JSX is an essential concept in web development, often used in tandem with React, a widely-used JavaScript library for crafting user interfaces. But it's important to note that JSX and React, while closely related, can also be used independently to create dynamic web applications.

**Key Points:**

1. **Distinguishing JSX from React:**
- JSX and React aren't the same; they serve different roles in web development.
- JSX is a syntax extension that looks like HTML but transforms into JavaScript objects under the hood.
- In contrast, React is a JavaScript library designed for creating reusable UI components.

2. **Structuring Components:**
- When using JSX, multiple elements within a component should be enclosed within a single parent tag.
- This structure is necessary because JSX eventually gets converted into JavaScript objects.

3. **JSX Transformation:**
- Even though JSX resembles HTML, it's actually transformed into plain JavaScript objects before being used.
- For this transformation, JSX expressions are processed by tools like Babel.
- You can't directly return multiple JSX tags from a function; they need to be wrapped in a container tag or a Fragment.

4. **JSX vs. `react.createElement`:**
- Before JSX, React components were constructed using `react.createElement` function calls.
- JSX simplifies this process by offering a more intuitive and concise syntax, particularly for nested and sibling components.
- Remember, both JSX and `react.createElement` produce React components.

5. **Babel's Role:**
- Babel plays a superhero role in the world of JSX.
- It converts JSX code into valid React elements, which essentially translates into JavaScript objects representing UI components.
- Additionally, Babel is instrumental in converting modern ECMAScript 2015+ code into a format compatible with various browsers.

In closing, JSX is a syntax extension that streamlines the creation of React components by imitating HTML. It gets translated into JavaScript objects and plays a pivotal role in the React ecosystem. When paired with Babel, JSX empowers developers to fabricate dynamic and efficient user interfaces with ease.
