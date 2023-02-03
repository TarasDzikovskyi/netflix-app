import {Add, Check, InfoOutlined, PlayArrow} from '@material-ui/icons';
import React, {useContext, useEffect, useState} from 'react';
import './featured.scss';
import axios from "axios";
import movieTrailer from "movie-trailer";
import {useNavigate} from "react-router-dom";
import Loading from "../loading/Loading";
import {addToCart} from "../../context/cartContext/apiCalls";
import {CartContext} from "../../context/cartContext/CartContext";

export default function CurrentMovie({movie_id}) {
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(false);
    const {dispatch} = useContext(CartContext);

    let {user} = useContext(CartContext);
    if (user.length === 0) user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const getContent = async () => {
            try {
                const res = await axios.get(`/movies/find/${movie_id}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    },
                });
                setContent(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getContent();

        setLoading(false);
    }, [movie_id]);

    const handlePlay = async (title) => {
        let res = await movieTrailer(title)
        if (res !== null) {
            let movie_id = res.slice(-12)
            navigate(`/watch/${movie_id}`)
        } else {
            navigate('/watch/=IqkVUfYMZWM')
        }
    }

    const handleClickCart = (movie_id) => {
        const user_id = JSON.parse(localStorage.getItem("user")).user.id
        addToCart({user_id, movie_id}, dispatch)
    }

    if (user.user.cart == null) user.user.cart = [];

    return (
        <>
            {!loading ? (
                <div className="featured">
                    <img src={content.img} alt="title" className='featured_img'/>
                    <div className="info">
                        <div className='title'>
                            {content && content.imgTitle && content.imgTitle.length > 0 && (
                                <img src={content.imgTitle} alt="imgTitle"/>
                            )}
                        </div>

                        {content && content.title && (
                            <h2>{content.title.split('.')[0]}</h2>
                        )}

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
                            {user && (
                                user.user.cart.find((item) => String(item) === String(content.id)) ?
                                    <button className="more">
                                        <Check className="icon"/>
                                        <span>Added</span>
                                    </button> :
                                    <button className="more" onClick={() => handleClickCart(content.id)}>
                                        <Add className="icon"/>
                                        <span>Add</span>
                                    </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}
