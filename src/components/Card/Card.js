import React, { Component } from "react";
import axios from 'axios';
import './styles/Card.scss'
import Modal from "../Modal/Modal";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      openModal: false
      // loading: true
    }
    this.toggleModal = this.toggleModal.bind(this);

  }
  toggleModal() {
    this.setState(state => ({ openModal: !state.openModal }));
  }
  componentDidMount() {
    // setTimeout(() => this.setState({ loading: false }), 5500); // simulates loading of data
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
    // this.setState({ movies: [], loading: true });
    // setTimeout(() => this.setState({ loading: false }), 5500); // simulates loading of data
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
    var createFilms = this.state.movies.map((item) => {
      return (
        item.title
      );
    }
    );
    const { name, height } = this.props.infos;

    if (this.state.loading) { // if your component doesn't have to wait for async data, remove this block 
      return null; // render null when app is not ready
    }
    return (
      <div className="Card">
        <div className="Card-box" onClick={() => this.toggleModal()}>
          <img src="https://png.icons8.com/ios/540//star-wars.png" alt="LogoWhite" />
          <div className="Card-box-infos">
            <h1>{name}</h1>
            <div>
              <img src="https://image.flaticon.com/icons/svg/108/108637.svg" alt="Character" title="Character" />
              <h3>{height === "unknown" ? height : `${height} cm`} </h3>
              {/* <h3>Movies: {createFilms.join(', ')}</h3> */}
              <img src="https://image.flaticon.com/icons/svg/149/149150.svg" alt="Height" title="Height" />
            </div>
          </div>
        </div>
        <Modal openModal={this.state.openModal} onCancel={() => this.toggleModal()} onClick={proxy => proxy.stopPropagation()} />
      </div>
    );
  }
}

export default Card;
