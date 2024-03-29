import "./randomList.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function RandomList() {
    const [content, setContent] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=random`, {
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
        getRandomContent();
    }, []);

    // console.log(content)

    const handleClick = (id) => {
        navigate(`/select/${id}`)
    }

    return (
        <div className="randomList">
            <div className="header">
                <h2>More Like This</h2>
            </div>

            <div className="block">
                {content.map((item) => (
                    <div className='item-box' key={item.id} onClick={() => handleClick(item.id)}>
                        <img src={item.imgSm} alt="" height={240} width={170}/>
                    </div>

                ))}
            </div>


        </div>
    );
};
