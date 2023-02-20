import "./App.css";
import React, {useState} from "react";
import {Counter} from "./components/Counter";
import ExampleA from "./key-example/ExampleA";
import ExampleB from "./key-example/ExampleB";
import ExampleC from "./key-example/ExampleC";
import ExampleD from "./key-example/ExampleD";
import Aaa,  {aa as ttt } from "./hooks/ExampleUseIsMounted";


function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}

function App() {
  const counter = <Counter/>; // 1.
  const [isFancy, setIsFancy] = useState(false); // 2-1
  const [showB, setShowB] = useState(true); // 2-2
  const [isPaused, setIsPaused] = useState(false); // 2-3
  const [isPlayerA, setIsPlayerA] = useState(true); // 4
  const [mount, setMount] = useState(true); // 7
  return (
    <div className="App">
      <header className="App-header">
        {/*<Counter/>*/}
        
        {/* 1. State 는 JSX 태그에 보관되지 않는다. 해당 JSX 를 배치한 트리 위치와 연결된다. */}

        {/* 1-1 */}
        {/*{counter}*/}
        {/*{counter}*/}

        {/* 1-2 */}
        {/*<Counter/>*/}
        {/*<Counter/>*/}

        {/* 2. React 는 같은 컴포넌트가 같은 위치에 렌더링되는 한 State 를 유지한다. */}

        {/* 2-1 */}
        {/*{isFancy ? (*/}
        {/*  <Counter isFancy={true} />*/}
        {/*) : (*/}
        {/*  <Counter isFancy={false} />*/}
        {/*)}*/}
        {/*<label>*/}
        {/*  <input*/}
        {/*    type="checkbox"*/}
        {/*    checked={isFancy}*/}
        {/*    onChange={e => {*/}
        {/*      setIsFancy((prev) => !prev)*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  fancy*/}
        {/*</label>*/}

        {/*/!* 2-2 *!/*/}
        {/*<Counter />*/}
        {/*{showB && <Counter />}*/}
        {/*<label>*/}
        {/*  <input*/}
        {/*    type="checkbox"*/}
        {/*    checked={showB}*/}
        {/*    onChange={e => {*/}
        {/*      setShowB(e.target.checked)*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  Render the second counter*/}
        {/*</label>*/}

        {/* 2-3 */}
        {/*{isPaused ? (*/}
        {/*  <p>See you later!</p>*/}
        {/*) : (*/}
        {/*  <Counter />*/}
        {/*)}*/}
        {/*<label>*/}
        {/*  <input*/}
        {/*    type="checkbox"*/}
        {/*    checked={isPaused}*/}
        {/*    onChange={e => {*/}
        {/*      setIsPaused(e.target.checked)*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  Take a break*/}
        {/*</label>*/}

        {/* 3. 컴포넌트를 중첩하면 상태가 재설정된다. */}
        {/*<MyComponent />*/}

        {/* 4. 하위 트리에 다른 키를 제공하여 강제로 하위 트리의 상태를 재설정할 수 있다. */}

        {/* 4-1 */}
        {/*<div>*/}
        {/*  {isPlayerA ? (*/}
        {/*    <Counter person="Taylor" />*/}
        {/*  ) : (*/}
        {/*    <Counter person="Sarah" />*/}
        {/*  )}*/}
        {/*  <button onClick={() => {*/}
        {/*    setIsPlayerA(!isPlayerA);*/}
        {/*  }}>*/}
        {/*    Next player!*/}
        {/*  </button>*/}
        {/*</div>*/}

        {/* 4-2 */}
        {/*<div>*/}
        {/*  {isPlayerA ? (*/}
        {/*    <Counter key="taylor" person="Taylor" />*/}
        {/*  ) : (*/}
        {/*    <Counter key="sarah" person="Sarah" />*/}
        {/*  )}*/}
        {/*  <button onClick={() => {*/}
        {/*    setIsPlayerA(!isPlayerA);*/}
        {/*  }}>*/}
        {/*    Next player!*/}
        {/*  </button>*/}
        {/*</div>*/}

        {/* 1번 복습: State 는 JSX 태그에 보관되지 않는다. 해당 JSX 를 배치한 트리 위치와 연결 */}
        {/*<ExampleA />*/}

        {/* 4번 복습: 하위 트리에 다른 키를 제공하여 강제로 하위 트리의 상태를 재설정할 수 있다. */}
        {/*<ExampleB />*/}

         {/*5. 배열에 원소를 추가 할 때 키로 유일한 값을 사용하면 리액트에게 효율적으로 돔을 업데이트 하도록 알려줄 수 있다.*/}
        {/*<ExampleC />*/}

        {/* 6. 배열의 원소를 삭제할 때 키를 유일한 값으로 사용하지 않으면 상태가 원하는 컴포넌트와 맵핑되지 않을 수 있다. */}
        {/*<ExampleD />*/}

        {/* 7. memory leak 에러 메시지 해소 */}
        <button onClick={() => setMount((prev) => !prev)}>{mount ? 'unmount': 'mount'}</button>
        {mount && <Aaa />}


      </header>
    </div>
  );
}

export default App;
