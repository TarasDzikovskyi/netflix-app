import {NotInterested} from '@material-ui/icons'
import React, {useContext, useEffect, useState} from 'react'
import './personalItem.scss'
import axios from "axios";
import {removeFromCart} from "../../context/cartContext/apiCalls";
import {CartContext} from "../../context/cartContext/CartContext";
import {useNavigate} from "react-router-dom";


export default function PersonalItem({movie_id}) {
    const [content, setContent] = useState({});
    const {dispatch} = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(() => {
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
    }, [movie_id]);

    const handleDelete = (movie_id) => {
        const user_id = JSON.parse(localStorage.getItem("user")).user.id;
        removeFromCart({user_id, movie_id}, dispatch);
    }

    const handleClick = (id) => {
        navigate(`/select/${id}`)
    }

    return (
        <div className="personalItem">
            <div className="item">
                <img src={content.imgSm} alt="" height={240} width={170}/>
                <div className="clear_icon" onClick={() =>handleDelete(content.id)}>
                    <NotInterested />
                </div>
                <p onClick={() => handleClick(content.id)}>{content.title}</p>
            </div>
        </div>
    )
}
