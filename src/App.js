import React, {useState, useEffect} from "react";
import './App.css';


function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  console.log(emotion);

  useEffect(()=>{
    console.log(`it is ${emotion} around here`);
  }, [emotion]);
  useEffect(()=> 
  {console.log(`it's ${secondary} around here`)
  }  , [secondary]);

  return(
  <>
  <h1>Current emption is {emotion} and {secondary}</h1>
  <button onClick={()=> setEmotion("happy")}>Happy</button>
  <button onClick={()=> setEmotion("Crabby")}>Make crabby</button>
  <button onClick={()=> setEmotion("frustrated")}>Furstrated</button>
  <button onClick={()=> setEmotion("enthusuatuc")}>Hnthus</button>

  </>
  )}

export default App;
