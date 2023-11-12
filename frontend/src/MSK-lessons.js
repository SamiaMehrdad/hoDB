/*
! 1 Error Boundaries
React 16 introduced error boundaries, which are special components that catch JavaScript errors 
in their child component tree, log those errors, and display a fallback UI. Utilizing error boundaries 
helps prevent your entire application from crashing when an error occurs in a specific component. 
Implement an error boundary component to gracefully handle errors.
-------------------------
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Handle the error here (e.g., log it or show a user-friendly message)
  }

  render() {
    return this.props.children;
  }
}
*/

/*
! 2 Lazy Loading and Code Splitting
Optimize your application's performance by implementing code splitting and lazy loading. 
These techniques ensure that only the necessary code is loaded when a specific component or route 
is accessed, reducing the initial load time and improving user experience. React's React.lazy() function 
allows you to dynamically load components.
-------------------------
const LazyComponent = React.lazy(() => import('./LazyComponent'));
*/

/*
!3 PropTypes or TypeScript
To maintain code quality and catch type-related errors early in development, enforce type checking in 
your React components. You can choose between PropTypes or TypeScript. PropTypes is a runtime 
type-checking solution provided by React, while TypeScript is a statically typed superset of JavaScript 
that provides robust type checking at compile time. Using either of these options makes your code more 
self-documenting and helps prevent common bugs.
------------------------- 
import PropTypes from 'prop-types';

function MyComponent({ name, age }) {
  // Component logic here
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
*/