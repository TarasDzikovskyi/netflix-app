import "./listItem.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined, Close,
} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListItem({index, item}) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
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
                {/*<div className="img-info">{movie.title}</div>*/}
            </div>


        </>
        // <Link to={{ pathname: "/watch", movie: movie }}>
        //     <div
        //         className="listItem"
        //         // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        //         onMouseEnter={() => setIsHovered(true)}
        //         onMouseLeave={() => setIsHovered(false)}
        //     >
        //         {/*<img src={movie?.img} alt="" className='img'/>*/}
        // {isHovered && (
        // <>
        //     {/*<video src={movie.trailer} autoPlay={true} loop />*/}
        //     {/*<div className="itemInfo">*/}

        // {/*<div className="icons">*/}
        //                 {/*    <PlayArrow className="icon" />*/}
        //                 {/*    <Add className="icon" />*/}
        //                 {/*    <ThumbUpAltOutlined className="icon" />*/}
        //                 {/*    <ThumbDownOutlined className="icon" />*/}
        //                 {/*</div>*/}
        //                 {/*<div className="itemInfoTop">*/}
        //                 {/*    <span>{movie.duration}</span>*/}
        //                 {/*    <span className="limit">+{movie.limit}</span>*/}
        //                 {/*    <span>{movie.year}</span>*/}
        //                 {/*</div>*/}
        //             {/*</div>*/}
        //         {/*</>*/}
        //     {/*)}*/}
        // {/*</div>*/}
        // </Link>
    );
}