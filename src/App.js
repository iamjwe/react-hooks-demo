import React, { useState } from 'react';
import './App.css';
import FuncComp from './components/FuncComp_effect';
import ClassComp from './components/ClassComp_effect';


function App() {
  const [visiable1, setVisibile1] = useState(true)
  const [visiable2, setVisibile2] = useState(true)
  return (
    <div className="App">
      <button onClick={() => {setVisibile1(!visiable1)}}>卸载函数组件</button>
      { visiable1 && <FuncComp />}
      <button onClick={() => {setVisibile2(!visiable2)}}>卸载类组件</button>
      { visiable2 && <ClassComp />}
    </div>
  );
}

export default App;
