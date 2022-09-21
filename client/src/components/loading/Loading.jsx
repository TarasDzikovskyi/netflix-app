import {ArrowBackOutlined} from '@material-ui/icons'
import React from 'react'
import './loading.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';


export default function Loading() {
    // const user = JSON.parse(localStorage.getItem("user"))
    const user = false
    const usera = true
    console.log(user);



    return (
        <div className="loading">
           Hello
        </div>
    )
}
