import React from 'react';

// Step 1: Define the props type interface
interface GreetingProps {
  name: string; // 'name' is expected to be a string
}

// Step 2: Add the type annotation to the component props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Now 'name' is strongly typed, so if you pass a non-string it'll error in TS
  return <div>Hello, {name}!</div>;
};

export default Greeting;
