import { useState } from "react";
import CustomButton from "./CustomButton";
import QuizCard from "./QuizCard";
import './QuizComponent.css';

const dummyData=[
    {question:"Ayarveda has its origin in",
    option1:'Rig veda', option2:'Sama veda',
    option3:'Yajur veda',option4:'Atharva veda',correct:'Atharva veda'},
    
    {question:"What is a state in React?"
    ,option1:'A permanent storage.', option2:'Internal storage of the component.',
    option3:'External storage of the component.', option4:'None of the above.',correct:'Internal storage of the component.'},
  
    {question:"Which of the following is method is not a part of ReactDOM?",
    option1:'ReactDOM.hydrate()',option2:'ReactDOM.destroy()',
    option3:'ReactDOM.createPortal()',option4:'All of the mentioned',correct:'ReactDOM.destroy()'}
  ]
 
const QuizComponent =()=>{
    const marksHandler=(val)=>{
        console.log(val);
      }
      const [index,setIndex]=useState(0);
      const next=()=>{
        console.log("next");
        setIndex(index=>index<dummyData.length-1?index+1:index);
      }
      const prev=()=>{
        console.log("prev",index);
        setIndex(index=>index>0?index-1:index);
        
      }
    return(
        <div className="quizComponent">
            {/* { 
       dummyData.map(quedata=>{
        // {console.log(quedata)}
           return <QuizCard data={quedata} key={quedata.question} marksHandler={marksHandler}/>
        })
        } */}
        <div> <h3>{index+1}/{dummyData.length}</h3></div>
       <div className="quizContent">
       <CustomButton onClick={prev}>Prev</CustomButton>
         
         <QuizCard data={dummyData[index]}/>
         <CustomButton onClick={next}>Next</CustomButton>
       </div>
         
       
        </div>
    )
}
export default QuizComponent;