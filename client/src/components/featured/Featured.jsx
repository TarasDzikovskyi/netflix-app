import {InfoOutlined, PlayArrow} from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import './featured.scss'
import axios from "axios";
import movieTrailer from "movie-trailer";
import {useNavigate} from "react-router-dom";

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();

    }, [type]);

    // console.log(content)
    const handlePlay = async (title) => {
        let res = await movieTrailer(title)
        if (title !== null) {
            let movie_id = res.slice(-12)
            navigate(`/watch/${movie_id}`)
        } else {
            navigate('/watch/=IqkVUfYMZWM')
        }
    }

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="title" className='featured_img'/>
            <div className="info">
                <h2>{content.title}</h2>
                {/*<img src={content.imgTitle} alt="imgTitle"/>*/}
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span onClick={() => handlePlay(content.title)}>Play</span>
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
