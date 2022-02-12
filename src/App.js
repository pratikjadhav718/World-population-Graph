import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState(1);
  
  useEffect(() => {
    const timer = setInterval(() => { setSeconds(seconds + 1); }, 1000);               // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <h1>Number of seconds is {seconds}</h1>
    </div>
  );
}

export default App;
