import './pagination.scss'
import {useNavigate} from "react-router-dom";
import {filterObjects} from "../../context/filterContext/apiCalls";
import {useContext} from "react";
import {FilterContext} from "../../context/filterContext/FilterContext";

export default function Pagination({queryParams, totalMovies, moviesPerPage}) {
    const navigate = useNavigate();
    const {dispatch} = useContext(FilterContext);

    const pages = totalMovies/moviesPerPage;
    console.log(pages)

    let arr = [1, 2, 3, 4, 5]

    const handleClick = (page) => {
        try {
            let str1 = '';
            let str2 = '';

            if (queryParams.length > 0) {
                str1 = queryParams.split('page')[0].slice(1)
                str2 = queryParams.split('page')[1].slice(2)
            }
            let query = `?${str1}page=${page}${str2}`

            if(query.hasOwnProperty('isNetflix') === false) query = `${query}&isNetflix=true`

            navigate(`/netflix${query}`)

            filterObjects(query, dispatch);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='pagination'>
            {arr.map((item) => (
                <div className='item' key={item} onClick={() => handleClick(item)}>{item}</div>
            ))}
        </div>
    )
}