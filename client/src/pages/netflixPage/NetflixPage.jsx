import React, {useContext, useEffect, useState} from 'react';
import './netflixPage.scss';
import Navbar from "../../components/navbar/Navbar";
import {FilterContext} from "../../context/filterContext/FilterContext";
import {filterObjects} from '../../context/filterContext/apiCalls';
import Pagination from "../../components/pagination/Pagination";
import {useNavigate} from "react-router-dom";
import {Tune} from '@material-ui/icons'
import Loading from "../../components/loading/Loading";
import Footer from "../../components/footer/Footer";


export default function NetflixPage() {
    const [active, setActive] = useState(false);
    const [sorting, setSorting] = useState('');
    const [genre, setGenre] = useState('');
    const [radio, setRadio] = useState('');
    const [queryParams, setQueryParams] = useState('');
    const [numberPage, setNumberPage] = useState(1);
    const {dispatch, movies} = useContext(FilterContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setActive(!active);
    };

    const handleNewSortSubmit = ({target: {value}}) => {
        if (value === 'vote') {
            setSorting('&sortBy=vote&order=asc')
        } else if (value === 'newest') {
            setSorting('&sortBy=createdAt&order=asc')
        } else if (value === 'title') {
            setSorting('&sortBy=title&order=asc')
        }
    };

    const handleGenre = ({target: {value}}) => {
        if (value === 'Action') {
            setGenre('&genre=Action')
        } else if (value === 'Adventure') {
            setGenre('&genre=Adventure')
        } else if (value === 'Animation') {
            setGenre('&genre=Animation')
        } else if (value === 'Cartoon') {
            setGenre('&genre=Cartoon')
        } else if (value === 'Comedy') {
            setGenre('&genre=Comedy')
        } else if (value === 'Crime') {
            setGenre('&genre=Crime')
        } else if (value === 'Documentary') {
            setGenre('&genre=Documentary')
        } else if (value === 'Drama') {
            setGenre('&genre=Drama')
        } else if (value === 'Family') {
            setGenre('&genre=Family')
        } else if (value === 'Fantasy') {
            setGenre('&genre=Fantasy')
        } else if (value === 'Horror') {
            setGenre('&genre=Horror')
        } else if (value === 'Mystery') {
            setGenre('&genre=Mystery')
        } else if (value === 'Romance') {
            setGenre('&genre=Romance')
        } else if (value === 'Science') {
            setGenre('&genre=Science')
        } else if (value === 'Science Fiction') {
            setGenre('&genre=Science Fiction')
        } else if (value === 'TV Movie') {
            setGenre('&genre=TV Movie')
        } else if (value === 'Thriller') {
            setGenre('&genre=Thriller')
        } else if (value === 'War') {
            setGenre('&genre=War')
        } else if (value === 'Western') {
            setGenre('&genre=Western')
        }
    };

    useEffect(() => {
        handleQuery();
    }, [numberPage]);

    const handleQuery = async () => {
        setLoading(true);
        let pageCount = `&page=${numberPage}`;
        let query = sorting + genre + radio + pageCount;
        query = "?" + query.substring(1) + "&isNetflix=true";
        setQueryParams(query);
        navigate(`/netflix${query}`);
        await filterObjects(query, dispatch);
        setLoading(false);
    };

    const paginate = (page) => setNumberPage(page)

    const handleClickMovie = (id) => {
        navigate(`/select/${id}`)
    }

    console.log(movies)

    return (
        <>
            {!loading ? (
                <div className='netflix_box'>
                    <Navbar/>
                    <div className="filter">
                        {active &&
                        <div className='filter_items'>
                            <div className='select'>
                                <div className="select-block">
                                    <select name="select" onChange={handleNewSortSubmit}>
                                        <option value="#" selected>Sort By</option>
                                        <option value="vote">Vote</option>
                                        <option value="newest">Newest</option>
                                        <option value="title">Name</option>
                                    </select>
                                </div>

                                <div className="select-block">
                                    <select name="select" onChange={handleGenre}>
                                        <option value="#" selected>Select Genre</option>
                                        <option value="Action">Action</option>
                                        <option value="Adventure">Adventure</option>
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
                                <div>
                                    <input type="radio" id="movies" name="contact" value="&isSeries=false"
                                           onChange={(e) => setRadio(e.target.value)}/>
                                    <label htmlFor="contactChoice1">movies</label>
                                </div>

                                <div>
                                    <input type="radio" id="series" name="contact" value="&isSeries=true"
                                           onChange={(e) => setRadio(e.target.value)}/>
                                    <label htmlFor="contactChoice2">series</label>
                                </div>

                                <div onClick={handleQuery} className='apply'>Apply</div>
                            </div>
                        </div>
                        }
                        <div className='filter_btn' onClick={handleClick}>
                            <Tune className='icon'/>
                        </div>
                    </div>

                    <div className="movies_block">
                        {movies.count > 0 && movies.movies.map((movie) => (
                            <div className='item_box' key={movie.id} onClick={() => handleClickMovie(movie.id)}>
                                <img src={movie.imgSm} alt="" height={165} width={260}/>
                                <p>{movie.title.slice(0, -1)}</p>
                            </div>
                        ))}
                    </div>

                    {movies.count > 0 && (
                        <Pagination
                            queryParams={queryParams}
                            totalMovies={movies.count}
                            moviesPerPage={movies.movies.length}
                            paginate={paginate}
                        />
                    )}
                    <div className='footer'>
                        <Footer/>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}

