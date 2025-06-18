import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []); // empty dependency array: run once

  return (
    <div>
      <h1>Here is time in seconds: {seconds}</h1>
    </div>
  );
};

export default Counter;
