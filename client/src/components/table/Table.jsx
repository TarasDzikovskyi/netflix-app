import {ArrowBackOutlined, Done} from '@material-ui/icons'
import React from 'react'
import './table.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';


export default function Table({selectedPlan}) {
    // const user = JSON.parse(localStorage.getItem("user"))
    const user = false
    const usera = true
    console.log(selectedPlan);

    let price = ['EUR 4.99', 'EUR 7.99', 'EUR 9.99']

    let quality = ['Good', 'Better', 'Best']

    let resolutions = ['480p', '1080p', '4K+HDR']

    let done = [0, 1, 2]

    return (
        <div className="table">
        
            <table>
                <tr className='tr_border'>
                    <td className='title'>Monthly price</td>
                    {price.map((item, index) => (
                        <>
                        {selectedPlan === index
                            ? (<td className='info selected_td'  key={index}>{item}</td>)
                            : (<td className='info' style={{color: 'gray'}}  key={index}>{item}</td>)
                        }
                        </>
                    ))}
                </tr>
                {/*<div className='slide'></div>*/}
                <tr>
                    <td className='title'>Video quality</td>
                    {quality.map((item, index) => (
                        <>
                        {selectedPlan === index
                            ? (<td className='info selected_td'  key={index}>{item}</td>)
                            : (<td className='info' style={{color: 'gray'}}  key={index}>{item}</td>)
                        }
                        </>
                    ))}
                </tr>

                <tr>
                    <td className='title'>Resolution</td>
                    {resolutions.map((item, index) => (
                        <>
                        {selectedPlan === index
                            ? (<td className='info selected_td' key={index}>{item}</td>)
                            : (<td className='info' style={{color: 'gray'}}  key={index}>{item}</td>)
                        }
                        </>
                    ))}
                </tr>
                <tr>
                    <td className='title'>Watch on your TV, computer, mobile phone and tablet</td>
                    {done.map((item, index) => (
                        <>
                        {selectedPlan === index
                            ? (<td className='info selected_td' key={index}><Done className='fz'/></td>)
                            : (<td className='info' style={{color: 'gray'}}  key={index}><Done className='fz'/></td>)
                        }
                        </>
                    ))}

                </tr>
            </table>
        </div>
    )
}
