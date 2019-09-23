import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor => {
      const {name, movies} = actor
      return (<div>
        <h1>{name}</h1>
        <ul>{movies.map(movie => <li>{movie}</li>)}</ul>
      </div>)
    })
  }



  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
