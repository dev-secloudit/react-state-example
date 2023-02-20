import React, {useEffect, useState} from 'react';
import {useIsMounted} from "./useIsMounted";

export default function ExampleUseIsMounted() {
  const [todo, setTodo] = useState({ title: '' });
  const isMounted = useIsMounted();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(result => {
        if (isMounted()) {
          setTodo(result);
        }
      });
  }, []);
  return <div>title: {todo.title}</div>;
}

export function aa () {
  console.log('aaaa');
}