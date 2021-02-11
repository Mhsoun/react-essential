import './App.css';
import exmp from "./exmp.png";

function Header(props){
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}
function Main (props){
  return (
  <section>
    <p>We serve the most .. {props.adjective} blah blah</p>
    <img src={exmp} 
    height={200} 
    alt={"just example"}/>
    <ul style={{textAlign:"left"}}>
    {props.dishes.map((dish)=> (
      <li key={dish.id}>{dish.title}</li>
      ))}
    </ul>
  </section>
  )}

  function Footer (props) {
    return (
      <footer>
        <p>copyrights {props.year}</p>
      </footer>
    )
  }

  const dishes = [
    "pizza",
    "Kabab",
    "bread",
    "Kebah"
  ];

  const dishObject = dishes.map((dish, i)=>({title:dish, id: i}));

function App() {
  return (
    <div className="App">
      <Header name="someone" />
      <Main adjective="amazing" dishes={dishObject}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
