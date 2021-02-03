import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => <MovieCard key={movie.title} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
// Don't forget your default props!


// {
//   title: 'Choux and Maru go to Istanbul',
//   IMDBRating: 3,
//   genres: ['cats', 'adventure', 'romance'],
//   poster: 'choux-maru-istanbul'
// },