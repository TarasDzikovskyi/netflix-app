import React from 'react'
import './help.scss'
import photo_1 from '../../../content/icon_profile.png'
import { useState } from 'react'
import {icons} from '../../../icons'

export default function Help() {
    const [value, setValue] = useState('')
    console.log(value)

    return (
        <div className="help">
            <h1>QWERTY</h1>

            <div class="select" tabindex="1">
                <input class="selectopt" name="test" type="radio" id="opt1" value='1' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt1" class="option"><img className='img_option' src={icons[0]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt2" value='2' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt2" class="option"><img className='img_option' src={icons[1]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt3" value='3' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt3" class="option"><img className='img_option' src={icons[2]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt4" value='4' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt4" class="option"><img className='img_option' src={icons[3]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt5" value='5' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt5" class="option"><img className='img_option' src={icons[4]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt6" value='6' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt6" class="option"><img className='img_option' src={icons[5]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt7" value='7' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt7" class="option"><img className='img_option' src={icons[6]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt8" value='8' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt8" class="option"><img className='img_option' src={icons[7]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt9" value='9' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt9" class="option"><img className='img_option' src={icons[8]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt10" value='10' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt10" class="option"><img className='img_option' src={icons[9]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt11" value='11' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt11" class="option"><img className='img_option' src={icons[10]} height={40}/></label>
                <input class="selectopt" name="test" type="radio" id="opt12" value='12' onChange={(e) => setValue(e.target.value)}/>
                <label for="opt12" class="option"><img className='img_option' src={icons[11]} height={40}/></label>
            </div>
        </div>
    )
}