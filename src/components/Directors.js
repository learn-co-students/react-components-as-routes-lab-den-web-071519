import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map(director => {
      const {name, movies} = director
      return (<div>
        <h1>{name}</h1>
        <ul>{movies.map(movie => <li>{movie}</li>)}</ul>
      </div>)
    })
  }



  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
