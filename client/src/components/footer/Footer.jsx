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
          <div className="item"><Link to='#'>Account</Link></div>
          <div className="item"><Link to='#'>Media Center</Link></div>
          <div className="item"><Link to='#'>Investor Relations</Link></div>
          <div className="item"><Link to='#'>Jobs</Link></div>
          <div className="item"><Link to='#'>Ways to Watch</Link></div>
          <div className="item"><Link to='#'>Terms of Use</Link></div>
          <div className="item"><Link to='#'>Privacy</Link></div>
          <div className="item"><Link to='#'>Cookie Preferences</Link></div>
          <div className="item"><Link to='#'>Corporate Information</Link></div>
          <div className="item"><Link to='#'>Contact Us</Link></div>
          <div className="item"><Link to='#'>Speed Test</Link></div>
          <div className="item"><Link to='#'>Legal Notices</Link></div>
          <div className="item"><Link to='#'>Only on Netflix</Link></div>
        </div>

        <div className="nu">Netflix Ukraine</div>
      </div>
    
    </div>
  )
}