import React, { useState } from 'react';
import './App.css';

function Example() {
  const [count, setCount] = useState(0)
    return (
      <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Clicketh Meh</button>
      </div>
    );
  }


export default Example
