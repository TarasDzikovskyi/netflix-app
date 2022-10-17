import {
    Add,
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined, Clear, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, {useRef, useState} from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import {useHistory} from "react-router-dom";
import axios from "axios";
import movieTrailer from 'movie-trailer'

export default function List({list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 185);
    const [info, setInfo] = useState([])
    const history = useHistory()

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${185 + distance}px)`;
        }
        if (direction === "right" && slideNumber < list.length - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-185 + distance}px)`;
        }
    };

    const handleItemClick = (item) => {
        getMovie(item)
        const input = document.getElementById(list._id);
        if (input.style.display === "none") {
            input.style.display = "block";
        }
    }

    const getMovie = async (item) => {
        try {
            const res = await axios.get("/movies/find/" + item, {
                headers: {
                    token:
                        "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                },
            });
            setInfo(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    const onButtonClick = async (title) => {
        let res = await movieTrailer(title)
        if (title !== null) {
            let movie_id = res.slice(-12)
            history.push(`/watch/${movie_id}`)
        } else {
            history.push('/watch/=IqkVUfYMZWM')
        }
    }

    const clearState = () => {
        const input = document.getElementById(list._id);
        input.style.display = "none";
    }

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <div key={item._id} onClick={() => handleItemClick(item)}>
                            <ListItem index={i} item={item}/>
                        </div>
                    ))}
                </div>

                {info && <div id={list._id} style={{display: 'none'}} className='text_item'>
                    <div className="wrapper-item">
                        <div className="box-item">
                            <div className="title">{info.title}</div>
                            <div className="desc">
                                <p>{info.desc}</p>
                            </div>

                            <div className='button_wrapper'>
                                <button className="play" onClick={() => onButtonClick(info.title)}>
                                    <PlayArrow/>
                                    <span>Play</span>
                                </button>

                                <div className="icons">
                                    <Add className="icon"/>
                                    <ThumbUpAltOutlined className="icon"/>
                                    <ThumbDownOutlined className="icon"/>
                                </div>


                            </div>


                            <div className="genre">{info.genre}</div>

                            <div className="itemInfoTop">
                                <span className="limit">+{info.limit}</span>
                                {info.vote > 7.5 && (
                                    <span className="vote" style={{color: 'green'}}>{info.vote}</span>
                                )}

                                {info.vote < 7.5 && (
                                    <span className="vote" style={{color: 'yellow'}}>{info.vote}</span>
                                )}

                                {info.vote < 5 && (
                                    <span className="vote" style={{color: 'red'}}>{info.vote}</span>
                                )}

                                <span>{info.year}</span>
                            </div>
                        </div>
                        <div className="imgSm">
                            <Clear className='icon-clear' onClick={clearState}/>
                            <div className='img-wrapper'>
                                <img src={info.img} alt="" height='300px'/>
                            </div>
                        </div>
                    </div>

                </div>}
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}