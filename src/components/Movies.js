import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map(movie => {
      const {title, time, genres} = movie
      return (<div>
         <h1>{title}</h1>
         <p>Time: {time} min.</p> 
         <ul>{genres.map(genre =>  <li>{genre}</li>)}</ul>  
      </div>)
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
