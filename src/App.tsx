import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Grid/>
      <p> Copy and Paste to Save </p>
      </header>
    </div>
  );
}

function Grid() {

    const row = () => (
    <div>
         <Cell/>
         <Cell/>
         <Cell/>
         <Cell/>
         <Cell/>
     </div>
    );
    return (<div style={{display:"grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
    {row()}
    {row()}
    {row()}
    {row()}
    {row()}
    {row()}
    </div>);
}

const colors = ["⬛️", "🟨", "🟩", "🟥", "🟦", "🟧", "🟪", "🟫", "⬜️"];
function Cell() {
    let [color, setColor] = React.useState(0); 
    function click() {
        setColor((color+1) % colors.length);
    }
    return (<span onClick={click}>
        {colors[color]}
    </span>);
}

export default App;
