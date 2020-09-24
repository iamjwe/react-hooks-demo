import React, { useState, useEffect } from "react";

export default function FuncComp() {
  const [count, setCount] = useState(0)

  // 等同于：componentDidMount
  useEffect(() => {
    console.log('function', 'componentDidMount')
  }, [])

  // 等同于：componentDidMount or componentDidUpdate
  useEffect(() => {
    console.log('function', 'componentDidMount or componentDidUpdate')
  })

  // 等同于：(componentDidMount or componentDidUpdate) && count state change
  useEffect(() => {
    console.log('componentDidUpdate console newCount', count)
  }, [count])

  // 等同于：componentWillUpdate or componentDidUpdate
  useEffect(() => {
    return () => {
      console.log('function', 'componentWillUpdate or componentWillUnmount')
    }
  })

  // 等同于：(componentWillUpdate or componentDidUpdate) && count state change
  useEffect(() => {
    return () => {
      console.log('componentWillUpdate or componentWillUnmount console preCount', count)
    }
  }, [count])

  // 等同于：componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('function', 'componentWillUnmount')
  //   }
  // },[])

  // 等同于：(componentDidMount or componentDidUpdate) and (componentWillUpdate or componentWillUnmount)
  // useEffect(() => {
  //   console.log('function', 'componentDidMount or componentDidUpdate')
  //   return () => {
  //     console.log('function', 'componentWillUpdate or componentWillUnmount')
  //   }
  // })
  return (
    <div>
      <p>You clicked {count} times (FuncComp)</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}