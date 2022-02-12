import './App.css';
import { useEffect, useState } from 'react';
import { DisplayData } from './components/DisplayData';

function App() {
  // const [seconds, setSeconds] = useState(1);
  
  // useEffect(() => {
  //   const timer = setInterval(() => { setSeconds(seconds + 1); }, 1000);               // clearing interval
  //   return () => clearInterval(timer);
  // });

  return (
    <div className="App">

      <DisplayData />
    </div>
  );
}

export default App;
