import { useContext, useEffect, useState } from "react";
import { createList } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import {MovieContext} from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import "./newList.css";
import { useHistory } from "react-router-dom";


export default function NewList() {
  const [list, setList] = useState(null)
  const history = useHistory()

  const { dispatch } = useContext(ListContext)
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value })
  }

  useEffect(() => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])

  const handleSubmit = (e) => {
    e.preventDefault()
    createList(list, dispatch)
    history.push('/lists')
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value })
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input type="text" placeholder="Action" name="genre" onChange={handleChange} />
          </div>
          <div className="formRight">

            <div className="addProductItem">
              <label>Type</label>
              <select name="type" onChange={handleChange}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>
          </div>
          <div className="addProductItem">
            <label>Content</label>
            <select multiple name="content" onChange={handleSelect} style={{ height: "280px" }}>
              {movies.map(movie => (
                <option key={movie._id} value={movie._id}>{movie.title}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
