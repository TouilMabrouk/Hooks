// import logo from './logo.svg';
import { useState } from 'react';
import { moviesData } from "./Data";
import MovieList from "./Components/MovieList";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';


function App() {
  const [movies, setMovies]= useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);



  const handleAdd = (newMovie) => setMovies([...movies,newMovie]);

  const handleText = (e) => setText(e.target.value);

  const handleRating = (x) => setRating(x);

  return (
    <div className="App">
      <Filter rating={rating} 
      text= {text}
      handleText={handleText}
      handleRating={handleRating} />
      <MovieList movies={movies.filter(el=>
      el.title.toLowerCase().includes(text.toLowerCase()) && el.rating>= rating
        )} /> 
      <AddMovie add={handleAdd} />

    </div>
  );
}

export default App;
