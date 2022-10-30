import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import RandomList from "../../components/randomList/RandomList";
import { useLocation, useParams } from 'react-router-dom'
import CurrentMovie from "../../components/featured/CurrentMovie";
import Loading from "../../components/loading/Loading";

const CurrentHome = ({ type }) => {
    const [lists, setLists] = useState([]);
    const { movie_id } = useParams()
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/lists`,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                        },
                    }
                );
                console.log(res.data)
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [ pathname]);

    return (
        <>
            {/*{( lists.length === 0) ? (*/}
            {/*    <Loading />*/}
            {/*) : (*/}
                <div className="home">
                    <Navbar />
                    <CurrentMovie movie_id={movie_id} />

                    {lists.map((list) => (
                        <div key={list._id}>
                            <List list={list} />
                        </div>
                    ))}

                    <RandomList />
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            {/*)}*/}
        </>
    );
};

export default CurrentHome;