import React, { useEffect, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css"
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movielist/movieList';
const Home = () => {
    const [popularMovies,setPopularMovies] = useState([])
    useEffect(()=>{
       fetch("https://api.themoviedb.org/3/movie/popular?api_key=d0c6917e358a924a9f620f87d5790dad")
       .then((res)=>{
           return res.json();
       })
       .then((data)=>{
        console.log(data.results)
        setPopularMovies(data.results)
       })
    },[])
  return (
        <div className='poster'>
        <Carousel showThumbs={true} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
        }         
        </Carousel>
        <MovieList/>
        </div>
  )
}

export default Home
