import React, { useState } from "react";
import { Button } from "@material-ui/core";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> The count is: {count} </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
