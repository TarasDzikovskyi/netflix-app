import React, { useState } from 'react'
import './questions.scss'
import {Add, Close} from '@material-ui/icons'
import {list} from './list'
import QuestionBox from './QuestionBox'

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
