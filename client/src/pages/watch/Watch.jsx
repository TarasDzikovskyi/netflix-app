import {ArrowBackOutlined} from '@material-ui/icons'
import React from 'react'
import './watch.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'

export default function Watch() {
    const params = useParams()

    let movie_link = `https://www.youtube.com/watch?v${params.movie_id}`

    return (
        <div className="watch">
            <Link to='/'>
                <div className="back">
                    <ArrowBackOutlined/>
                    Home
                </div>
            </Link>

            <ReactPlayer url={movie_link} playing muted={false} width="100%" height="100%"/>
        </div>
    )
}
