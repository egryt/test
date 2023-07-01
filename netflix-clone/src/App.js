// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
import axios from 'axios'
import { useEffect, useState } from 'react';

const key = '731ae29297ab2bf2748d00850a3b087c';
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

function App() {

  const [movies,setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(()=>{
    axios.get(requests.requestPopular)
    .then((response)=>{
      setMovies(response.data.results)
    })
  },[])
console.log(movie);

  return (
    <div className='w-full h-[600px] text-black'>
      <h1>{movie?.title}</h1>
      <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      {/* <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        {/* <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        /> */}
        {/* <div className='absolute w-full top-[20%] p-4 md:p-8'> 
          <h1 className='text-3xl md:text-5xl font-bold'>{movies?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movies?.release_date}
          </p> */}
          {/* <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p> */}
        </div>
    //   </div>
    // </div>
  );
}

export default App;
