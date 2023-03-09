import { useState } from 'react';
import '../components/QuizCard.css'
import CustomButton from './CustomButton';


const QuizCard = (props) =>{
    const [show,setShow]=useState(false)
    
    return(
        <div className="quizCard">
            <div className="question">Questions: {props.data.question}</div>
            <div className="options">
                <CustomButton className="option option1"  correct={props.data.correct} value={props.data.option1}>{props.data.option1}</CustomButton>
                <CustomButton className="option option2"  correct={props.data.correct} value={props.data.option2}>{props.data.option2}</CustomButton>
                <CustomButton className="option option3"  correct={props.data.correct} value={props.data.option3}>{props.data.option3}</CustomButton>
                <CustomButton className="option option4"  correct={props.data.correct} value={props.data.option4}>{props.data.option4}</CustomButton> 
                
            </div>
            <div>
                <CustomButton value="Show Answer" className="submit" onClick={()=>{setShow(!show)}}>{show?"Hide Answer":'Show Answer'}</CustomButton>
                {show && <h4>{props.data.correct}</h4>}
            </div>
        </div>
    )
}
export default QuizCard;