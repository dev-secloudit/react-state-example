import { useState } from 'react';

function ExampleA() {
  const [value, setValue] = useState(1);

  const toggle = () => setValue(value > 0 ? 0 : 1);

  return (
    <div>
      {value ? <div key={value}>Hello</div> : <div key={value}>Bye</div>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ExampleA;