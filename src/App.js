
import './App.css';
import{useState, useEffect} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';



const API_URL=' http://www.omdbapi.com?apikey=2d7619d0'

const App=()=> {
const[movies,setMovies]=useState([]);
const[searchterm,setsearchterm]=useState("");

useEffect(()=>{
  searchMovies('Batman')
},[]);

const searchMovies=async(title)=>{
  const response=await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();
  setMovies(data.Search);
}


  return (
    <div className="App">
      <h1>Movie Search</h1>

    <div className='search'>
      <input
      placeholder='Search for Movies'
      value={searchterm}
      onChange={(e)=>setsearchterm(e.target.value)}
      />
      <img
      src={SearchIcon}
      alt='search icon'
      onClick={()=>searchMovies(searchterm)}
      />
    </div>

{ movies?.length>0
?
(
  <div className='container'>
     {movies.map((movie)=>(
      <MovieCard movie={movie}/>
))}
 </div>
):

(<div className='empty'>
  <h2>No Movies Found</h2>
  </div>  
  )
}

   
    </div>
  );
}

export default App;
