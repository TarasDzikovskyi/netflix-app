import React, {useEffect, useState} from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

export default function Home({type}) {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}&${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer "
                    }
                })

            } catch (e) {
                console.log(e)
            }
        };
        getRandomList();
    }, [type, genre]);


  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre}/>
        {lists.map((list) => (
            <List list={list}/>
        ))}
    </div>
  )
}
