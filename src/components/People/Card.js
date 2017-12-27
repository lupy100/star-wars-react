import React, { Component } from "react";
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentWillMount() {
    this.props.infos.films.map((filmsUrl) =>
      axios.get(filmsUrl)
        .then((response) => {
          this.state.movies.push({
            title: response.data.title,
          });
          this.setState({ movies: this.state.movies });
        })
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ movies: [] });

    if (nextProps.infos.url !== this.props.infos.url) {
      nextProps.infos.films.map((filmsUrl) =>
        axios.get(filmsUrl)
          .then((response) => {
            this.state.movies.push({
              title: response.data.title,
            });
            this.setState({ movies: this.state.movies });
          })
      )
    }
    return true;
  }
  render() {
    var createFilms = this.state.movies.map((item, i) => {
      return (
        <span key={i}>{item.title} , </span>
      );
    }

    );

    const { name, height } = this.props.infos;
    return (
      <div className="Card">
        <h1>Name: {name}</h1>
        <h3>Height: {height}</h3>
        <h3>Movies: {createFilms}</h3>
      </div>
    );
  }
}

export default Card;
