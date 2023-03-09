import { useState } from 'react';
import './CustomButton.css';

const CustomButton=({children,className,correct,value,...otherprops})=>{
     const [valid,setValid]=useState(false);
     const [clicked,setClicked]=useState(false);
    const validStateHandler=()=>{
        
        if(className?.includes('option')){
            setClicked(true)

            console.log(value,correct);
            if(value===correct){
                setValid(true);
                console.log("class :)",value,correct,valid)
            }
            
              
        }
       otherprops.onClick();
    }
    return(
        
        <button className={`${className?className:''} ${clicked?(valid?'correct':'incorrect'):''} cust-button`}  {...otherprops} onClick={validStateHandler}>{children}</button>
    )

}
export default CustomButton;