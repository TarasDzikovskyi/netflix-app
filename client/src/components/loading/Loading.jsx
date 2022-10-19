import React from 'react'
import './loading.scss'
import letter from '../../content/letter.png'

export default function Loading() {
    return (
        <div className='loading'>
            <img src={letter} alt="" height={130} />

            <div class="nb-spinner"></div>
        </div>
    )
}
