import React from 'react';
import './questions.scss';
import {list} from './list';
import QuestionBox from './QuestionBox';

export default function Questions() {

  return (
    <div className='questions'>
        <div className="wrapper">
            <div className="text">
                <h2>Frequently Asked Questions</h2>
            </div>
            
            {list && list.map((item, index) => (
                <QuestionBox key={index} item={item}/>
            ))}
        </div>
    </div>
  )
}
