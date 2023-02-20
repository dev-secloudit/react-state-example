import { useState } from 'react';

function ExampleA() {
  const [value, setValue] = useState(true);

  const toggle = () => setValue(!value);

  return (
    <div>
      {value ? (
        <div
          style={{ color: 'red' }}
          onClick={() => {
            alert('hello');
          }}
        >
          Hello
        </div>
      ) : (
        <div>Bye</div>
      )}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ExampleA;