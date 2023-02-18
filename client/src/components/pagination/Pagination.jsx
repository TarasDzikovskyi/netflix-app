import './pagination.scss'

export default function Pagination({queryParams, totalMovies, moviesPerPage, paginate}) {
    const pages = Math.round(totalMovies/moviesPerPage);

    let arr = []
    for (let i = 1; i <= pages; i++) {
        arr.push(i);
    }

    let page = 1;
    if(queryParams.length > 0){
    let newQuery = queryParams.split('page=')[1];
        page = newQuery.split('&')[0];
        console.log(newQuery.split('&')[0]);
    }


    return (
        <div className='pagination'>
            {arr.map((item) => (
                <div className='item' key={item} onClick={() => paginate(item)}>
                    {Number(page) === item ? (
                        <div className='selected'>{item}</div>
                    ) : (
                        <div>{item}</div>
                    )}
                </div>
            ))}
        </div>
    )
}