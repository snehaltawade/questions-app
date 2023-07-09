import { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';
import QuizComponent from './components/QuizComponent';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';


function App() {
//  const [start,setStart]=useState(false);
const dispatch=useDispatch();
 const start = useSelector(state=>state.start)
 const startTest = ()=>{
  dispatch({type:'startTest'})
 }
  return (
    <div className="App">
       <header className="App-header">
        {start ? <QuizComponent /> :  
       <> <h1>React Quiz</h1>
        <CustomButton onClick={startTest}>Let's Start</CustomButton> </>}
     </header>
    </div>
  );
}

export default App;
