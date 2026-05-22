import {useState} from "react";
function App(){

  const[count, setCount] = useState(0);

  function inc(){
    setCount(count+1);
  }
  function dec(){
    if(count!=0)
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  return(
    <div className="container">
      <h1>Welcome to Counter application.</h1>
      
      <h2>Your click count is = {count}</h2>
      {count<=10 && <p><br></br></p>}
      {count > 10 && count<=20 && <p>Counter is High!!</p>}
      {count > 20 && <p>Danger Zone!!</p>}

      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;