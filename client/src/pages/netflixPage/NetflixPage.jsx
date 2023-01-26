import React, {useContext, useEffect, useState} from 'react';
import './netflixPage.scss';
import Navbar from "../../components/navbar/Navbar";
import {useLocation} from "react-router-dom";
import {FilterContext} from "../../context/filterContext/FilterContext";
import {filterObjects} from '../../context/filterContext/apiCalls';
import Pagination from "../../components/pagination/Pagination";
import { useNavigate} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function NetflixPage() {
    const [active, setActive] = useState(false);
    const [sorting, setSorting] = useState('');
    const [genre, setGenre] = useState('');
    const [radio, setRadio] = useState('');
    const [queryParams, setQueryParams] = useState('');
    const [numberPage, setNumberPage] = useState(1);
    const {dispatch,movies} = useContext(FilterContext);
    const [context, setContext] = useState([]);
    const query = useQuery();
    const navigate = useNavigate();

    const page = query.get('page') || 1;

    const handleClick = () => {
        setActive(!active);
    };

    // setContext(movies);


    // useEffect(() => {
    //
    //     navigate(`/netflix?page=1&isNetflix=true`);
    //     let query = `/netflix?page=1&isNetflix=true`;
    //
    //     filterObjects(query, dispatch);
    // }, [page])

    const handleNewSortSubmit = ({target: {value}}) => {
        if (value === 'vote') {
            setSorting('&sortBy=vote&order=asc')
        } else if (value === 'newest') {
            setSorting('&sortBy=createdAt&order=desc')
        } else if (value === 'name') {
            setSorting('&sortBy=name&order=desc')
        }
    };

    const handleGenre = ({target: {value}}) => {
        if (value === 'horror') {
            setGenre('&genre=horror')
        } else if (value === 'comedy') {
            setGenre('&genre=comedy')
        } else if (value === 'detective') {
            setGenre('&genre=detective')
        }
    };


    useEffect(() => {
        setNumberPage(page);

        let query = `?page=1&isNetflix=true`;
        navigate(`${query}`);
        filterObjects(query, dispatch);
    }, [page]);



    const handleQuery = async () => {
        let pageCount = `&page=${numberPage}`;
        let query = sorting + genre + radio + pageCount;
        query = "?" + query.substring(1) + "&isNetflix=true";
        setQueryParams(query);
        navigate(`/netflix${query}`);
        await filterObjects(query, dispatch);
    };

    console.log(context);

    console.log(movies)
    return (
        <div className='netflix_box'>
            <Navbar/>
            <button className='btn' onClick={handleClick}>click</button>
            {active &&
            <div className='wrap'>
                <div className='select'>
                    <select name="select" onChange={handleNewSortSubmit}>
                        <option value="vote">vote</option>
                        <option value="newest" selected>newest</option>
                        <option value="name">name</option>
                    </select>
                    <select name="select" onChange={handleGenre}>
                        <option value="horror">horror</option>
                        <option value="comedy" selected>comedy</option>
                        <option value="detective">detective</option>
                    </select>
                    <input type="radio" id="movies" name="contact" value="&isSeries=false"
                           onChange={(e) => setRadio(e.target.value)}/>
                    <label htmlFor="contactChoice1">movies</label>
                    <input type="radio" id="series" name="contact" value="&isSeries=true"
                           onChange={(e) => setRadio(e.target.value)}/>
                    <label htmlFor="contactChoice2">series</label>
                    <button onClick={handleQuery}>click</button>
                </div>
            </div>
            }
            {movies.count > 0 && movies.movies.map((movie) => (
                <div>{movie.title.slice(0,-1)}</div>
            ))}


            {/*<Pagination queryParams={queryParams} totalMovies={movies.count} moviesPerPage={movies.movies.length}/>*/}
        </div>
    )
}

