import React, { Component } from 'react';
import history from './history';

import './App.css';

class MoviePage extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  backClick(){
    history.push('/')
  }

  render() {
    const props = this.props.location.state.movie 
    return (
      <div className={'container'}>
      <div className={'header'}>
        The Movie Database
      </div>
      <div className={'body'}>
        <div className={'back'} onClick={this.backClick}>Back to search</div>
        <div className={'header2'}>{props.title}</div>
        <img src={'https://image.tmdb.org/t/p/w300' + props.poster_path}></img>
        <div className={'movieDetail'}>Release date:</div>
        <div> {props.release_date}</div>
        <div className={'movieDetail'}>Description</div>
        <div>{props.overview}</div>
      </div>
    </div>
);
  }
}

export default MoviePage
