import "./listItem.scss";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ListItem({index, item}) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);


    return (
        <>
            <div className="listItem">
                <img src={movie?.imgSm} alt="title"/>
                {movie.title}
                {/*<div className="img-info">{movie.title}</div>*/}
            </div>
        </>
    );
}