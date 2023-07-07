# React TypeScript AutoComplete

A basic example of an AutoComplete component using React and TypeScript.

This application should be started with npm start and can be accessed at http://localhost:3000. It uses CSS Modules for styling, and uses the Fetch API for making requests to a JSON Placeholder API


1. A `Component` in React will re-render whenever its props or state change. On the other hand, a `PureComponent` performs a shallow comparison on new and previous props and state to decide whether it should re-render. If the props or state are immutable data structures, and you perform a deep update, then `PureComponent` will not re-render, because it can't identify the deep changes. This might break your application in a way where some changes do not trigger a re-render, causing your UI to become out-of-sync with your state.

2. `Context` in React provides a way to pass data through the component tree without having to pass props down manually at every level. However, it does not play well with `shouldComponentUpdate`. If a parent component decides to skip an update (return false from `shouldComponentUpdate`), child components consuming the context will not update even if the context changes. Therefore, it can lead to situations where the UI does not reflect the current context data, leading to unexpected behaviors.

3. There are a few ways to pass information from a child component to a parent:
    - Callbacks: The parent can provide a function as a prop to the child, which the child calls when it wants to pass data back to the parent.
    - Lifting state up: If both the parent and child need to share and manipulate the same data, the state should be managed by the parent or the nearest common ancestor, and then passed down to the child.
    - Using a context provider in the parent and a consumer in the child.

4. Here are two ways to prevent a component from re-rendering:
    - Implement `shouldComponentUpdate` lifecycle method in a class component and return false when re-rendering is not necessary.
    - Use `React.memo` in functional components, which is a higher-order component that prevents re-renders if the props do not change.

5. Fragments in React allow you to group a list of children without adding extra nodes to the DOM. They come handy when a component needs to return multiple elements, but you don't want to wrap them in a div. This could break your app in situations where you are relying on the specific structure of the DOM (e.g., CSS styles based on element positioning or JQuery selectors).

6. Examples of the Higher Order Component (HOC) pattern:
    - `connect` from `react-redux`: Connects a React component to a Redux store.
    - `withRouter` from `react-router-dom`: Provides routing props to the wrapped component.
    - `React.memo`: A HOC that prevents unnecessary re-renders if the props do not change.

7. Exceptions in promises, callbacks, and async/await are handled differently:
    - Callbacks: Errors are typically passed as the first argument to the callback (node-style callbacks).
    - Promises: Errors are caught in a `.catch()` clause at the end of a promise chain.
    - Async/Await: Errors are caught in a `try/catch` block.

8. `setState` takes two arguments. The first argument is an updater function or an object to merge into the current state. The second (optional) argument is a callback to execute once the state update has been committed. `setState` is asynchronous for performance reasons, as React batches state updates for efficiency.

9. To migrate a Class Component to a Function Component:
    - Replace the `render` method of the Class Component with the return statement of the Function Component.
    - Replace `this.state` with the `useState` Hook in the Function Component.
    - Replace `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` with the `useEffect` Hook in the Function Component.
    - Replace `this.props` with props passed as an argument to the Function Component.
    - Convert any methods to functions inside the Function Component.

10. A few ways to use styles with components:
    - Inline styles: Define style as an object in JavaScript and use them in JSX.
    - CSS classes: Define styles in a CSS file and reference them in JSX.
    - CSS-in-JS libraries (such as styled-components or emotion): Define styles in JavaScript using tagged template literals.

11. To render an HTML string coming from the server, use the `dangerouslySetInnerHTML` prop. It's named this way to remind developers to sanitize the HTML to prevent Cross-Site Scripting (XSS) attacks.

```jsx
<div dangerouslySetInnerHTML={{ __html: yourHtmlString }} />
```