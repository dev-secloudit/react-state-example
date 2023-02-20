import { useState, useMemo } from 'react';

function ExampleD() {
  const [times, setTimes] = useState([]);

  const addItem = () => {
    setTimes([new Date().getTime(), ...times]);
  };

  const elements = useMemo(() => {
    const handleDelete = (timeIdx) => () => {
      setTimes((prevTimes) => prevTimes.filter((_, idx) => idx !== timeIdx));
    };

    return times.map((time, timeIdx) => (
      <div key={time}>
        <div>time: {time}</div>
        <div>
          <input type="text" />
          <button type="button" onClick={handleDelete(timeIdx)}>
            Delete
          </button>
        </div>
        <hr />
      </div>
    ));
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

export default ExampleD;