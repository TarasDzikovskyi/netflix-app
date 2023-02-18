import React, { useState } from 'react';
import './questionBox.scss';
import {Add, Close} from '@material-ui/icons';

export default function QuestionBox({item}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        const input = document.getElementById(item.answer);
        if (input.style.display === "none") {
            input.style.display = "block";
            setIsVisible(true);
        } else {
            input.style.display = "none";
            setIsVisible(false);
        }
    }

  return (
    <div className="box">
        <button onClick={handleClick}>
            {item.question}
            {isVisible ? (
                <Close className="icon"/>
            ) : (
                <Add className="icon"/>
            )}
        </button>
        <div id={item.answer} className="info" style={{display: 'none'}}>
            {item.answer}

            {item.answer2 ? (<div>
                <br/>
                {item.answer2}
            </div>) : (<div/>)}
            
        </div> 
    </div>
  )
}
