import { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';
import QuizComponent from './components/QuizComponent';


function App() {
 const [start,setStart]=useState(false);
  return (
    <div className="App">
       <header className="App-header">
        {start ? <QuizComponent /> :  
       <> <h1>React Quiz</h1>
        <CustomButton onClick={() => { setStart(true) }}>Let's Start</CustomButton> </>}
     </header>
    </div>
  );
}

export default App;
