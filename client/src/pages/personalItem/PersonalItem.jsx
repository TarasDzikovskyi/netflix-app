import {InfoOutlined, PlayArrow} from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import './personalItem.scss'
import axios from "axios";

export default function PersonalItem({movie_id}) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getContent = async () => {
            try {
                console.log(movie_id)

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

    console.log(content)

    return (
        <div className="personalItem">
            <div className="item">
                {/*{item}*/}
            </div>
            {/*<p>{item}</p>*/}
        </div>
    )
}
