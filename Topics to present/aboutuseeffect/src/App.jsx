//useEffect use to manage side effects.
//The useEffect hook is used to perform side effects, such as adding and cleaning up event listeners.

import {useState , useEffect} from 'react';
import './App.css';


function App() {
 
  const [title , setTitle] = useState('');



  // first varient -> every render                  //componentDidUpdate

  // useEffect(()=>{
  //   console.log("UI render complete");
  // });

  // second varient -> first render    //componentDidMount

  // useEffect(()=>{
  //   console.log("UI render complete");
  // },[]);             

  // third varient -> on first render + whenever dependency is change         //componentDidUpdate

  useEffect(()=>{
    console.log("UI render complete");
  },[title]);          //[] in this list we write all dependencies

  // fourth varient -> Two handle unmounting of a component     //componentWillUnMount
  // in this varient we can perform cleaning up task
  // first run return part after this run main part of useEffect function 

  useEffect(()=>{

    console.log("listener add");
    
    return () =>{
      console.log("listener removed");
      
    }
  } , [title])

  function changeHandler(evt){
    setTitle(evt.target.value);
  }

  return (
    <div className="App">
      <p>{title}</p>
      <input type='text' onChange={changeHandler}></input>

    </div>
  );
}

export default App;

