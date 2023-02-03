import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import RandomList from "../../components/randomList/RandomList";
import { useLocation } from 'react-router-dom'
import Loading from "../../components/loading/Loading";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(false)

    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true);

        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                        },
                    }
                );

                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
        setLoading(false);
    }, [type, genre, pathname]);

    return (
        <>
            {!loading ? (
                <div className="home">
                    <Navbar />
                    <Featured type={type} setGenre={setGenre} />

                    {lists.map((list) => (
                        <div key={list.id}>
                            <List list={list} />
                        </div>
                    ))}

                    <RandomList />
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>

    );
};

export default Home;