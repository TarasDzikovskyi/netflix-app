import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer() {

  return (
    <div className='footer'>
      <div className="wrapper">
        <div className="call">Questions? Call <Link to="#">0800-509-417</Link></div>
        <div className="items">
          <div className="item"><Link to='#'>FAQ</Link></div>
          <div className="item"><Link to='#'>Help Center</Link></div>
          <div className="item"><Link to='#'>Terms of Use</Link></div>
          <div className="item"><Link to='#'>Privacy</Link></div>
          <div className="item"><Link to='#'>Cookie Preferences</Link></div>
          <div className="item"><Link to='#'>Corporate Information</Link></div>
        </div>
      </div>
    </div>
  )
}