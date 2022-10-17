import {InfoOutlined, PlayArrow} from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import './featured.scss'
import axios from "axios";

export default function CurrentMovie({movie_id}) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getContent = async () => {
            try {
                console.log(movie_id)

                const res = await axios.get(`/movies/find/${movie_id}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setContent(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getContent();

    }, [movie_id]);

    console.log(content)

    return (
        <div className="featured">
            <img src={content.img} alt="title" className='featured_img'/>
            <div className="info">
                <h2>{content.title}</h2>
                {/*<img src={content.imgTitle} alt="imgTitle"/>*/}
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
