import React from 'react'
import './loading.scss'

export default function Loading() {
    // const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className='loading'>
            <div className="flexbox">

                <div>
                    <div className="nb-spinner"></div>
                </div>
            </div>
        </div>
    )
}
