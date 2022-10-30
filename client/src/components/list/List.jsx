import {
    Add,
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined, Check, Clear, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, {useRef, useContext, useState} from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import movieTrailer from 'movie-trailer'
import {addToCart} from "../../context/cartContext/apiCalls";
import {CartContext} from '../../context/cartContext/CartContext'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function List({list}) {
    const [info, setInfo] = useState([])
    const {dispatch} = useContext(CartContext)
    const navigate = useNavigate();
    let {user} = useContext(CartContext)
    if(user.length === 0) user = JSON.parse(localStorage.getItem('user'))

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
        if (res !== null) {
            let movie_id = res.slice(-12)
            navigate(`/watch/${movie_id}`)
        } else {
            navigate('/watch/=IqkVUfYMZWM')
        }
    }

    const clearState = () => {
        const input = document.getElementById(list._id);
        input.style.display = "none";
    }

    const handleClickCart = (movie_id) => {
        const user_id = JSON.parse(localStorage.getItem("user")).user._id
        addToCart({user_id, movie_id}, dispatch)
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 6,
        initialSlide: 0,
        prevArrow: <ArrowBackIosOutlined className="sliderArrow left"/>,
        nextArrow: <ArrowForwardIosOutlined className="sliderArrow right"/>
    };

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <div className="container">
                    <Slider {...settings}>
                        {list.content.map((item, i) => (
                            <div key={item._id} onClick={() => handleItemClick(item)}>
                                <ListItem index={i} item={item}/>
                            </div>
                        ))}
                    </Slider>
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
                                    {user &&(
                                        user.user.cart.find((item) => item === info._id) ?
                                            <Check className="icon"/> :
                                            <Add className="icon" onClick={() => handleClickCart(info._id)}/>
                                        )}
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
            </div>
        </div>
    );
}