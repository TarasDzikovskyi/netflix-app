import {Add, Check, InfoOutlined, PlayArrow} from '@material-ui/icons';
import React, {useContext, useEffect, useState} from 'react';
import './featured.scss';
import axios from "axios";
import movieTrailer from "movie-trailer";
import {useNavigate} from "react-router-dom";
import Loading from "../loading/Loading";
import {CartContext} from "../../context/cartContext/CartContext";
import {addToCart} from "../../context/cartContext/apiCalls";

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(false);
    const {dispatch} = useContext(CartContext)

    let {user} = useContext(CartContext);
    if (user.length === 0) user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    },
                });
                setContent(res.data[0]);

                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomContent();

    }, [type]);

    const handlePlay = async (title) => {
        let res = await movieTrailer(title)
        if (res !== null) {
            let movie_id = res.slice(-12)
            navigate(`/watch/${movie_id}`)
        } else {
            navigate('/watch/=IqkVUfYMZWM')
        }
    };

    const handleClickCart = (movie_id) => {
        const user_id = JSON.parse(localStorage.getItem("user")).user.id
        addToCart({user_id, movie_id}, dispatch)
    }

    if (user.user.cart == null) user.user.cart = [];

    return (
        <>
            {!loading ? (
                <div className="featured">
                    {type && (
                        <div className="category">
                            <span>{type === "movie" ? "Movies" : "Series"}</span>
                            <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                                <option>Genre</option>
                                <option value="Action">Action</option>
                                <option value="Adventure" selected>Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Cartoon">Cartoon</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Family">Family</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Science">Science</option>
                                <option value="Science Fiction">Science Fiction</option>
                                <option value="TV Movie">TV Movie</option>
                                <option value="Thriller">Thriller</option>
                                <option value="War">War</option>
                                <option value="Western">Western</option>
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
