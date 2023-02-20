import { useEffect, useState, useMemo } from 'react';

function Time({ time }) {
  useEffect(() => {
    console.log({ time });
  }, [time]);

  return <div>{time}</div>;
}

function ExampleC() {
  const [times, setTimes] = useState([]);

  const addItem = () => {
    setTimes([new Date().getTime(), ...times]);
  };

  const elements = useMemo(() => {
    return times.map((time, timeIdx) => <Time key={timeIdx} time={time} />);
  }, [times]);

  return (
    <div>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      <hr />
      {elements}
    </div>
  );
}

export default ExampleC;