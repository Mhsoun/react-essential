import React, {useState} from "react";
import './App.css';


function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return(
  <>
  <h1>Current emption is {emotion}</h1>
  <button onClick={()=> setEmotion("happy")}>Happy</button>
  <button onClick={()=> setEmotion("frustrated")}>Furstrated</button>
  <button onClick={()=> setEmotion("enthusuatuc")}>Hnthus</button>

  </>
  )}

export default App;
