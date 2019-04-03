import React, { Component } from 'react';
import history from './history';

import { getMovies } from './movies';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      searchString: ""
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentWillMount() {
    getMovies().then((response) => {
      this.setState({ movies: response.data.results });
    });
  }

  searchMovies(e) {
    this.setState({ searchString: e.target.value })
  }

  displayMovies() {
    let movies = this.state.movies;
    let newMovieList = [];

    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.toUpperCase().includes(this.state.searchString.toUpperCase())) {
        newMovieList.push(movies[i]);
      }
    }
    return newMovieList;
  }

  handleClick(movie) {
      history.push({
          pathname: '/movie',
          state: {
              movie: movie
          }
      })
  }

  render() {
    return (
        <div className={'container'}>
          <div className={'header'}>
            The Movie Database
          </div>
          <div className={'body'}>
            <div className={'header2'}>Popular Movies</div>
            <form>
              <div>Search:</div>
              <input type="text" name="name" onChange={this.searchMovies} />
            </form>

            {this.displayMovies().map((movie, index) => {
              return (
                <div key={index} className={'movie'} onClick={this.handleClick.bind(this, movie)}>
                  {movie.title}
                </div>
              )
            })}
          </div>
        </div>
    );
  }
}

export default Home;
