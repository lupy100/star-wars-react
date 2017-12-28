import React, { Component } from "react";
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from "../Modal/Modal";
import './styles/Card.scss'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesPeple: [],
      homeworld: [],
      moviesWorld: [],
      openModal: false
    }
  }
  toggleModal() {
    this.setState(state => ({ openModal: !state.openModal }));
  }

  componentWillMount() {
      if (this.props.type === "planet") {
        this.props.infos.films.map((filmsUrl) =>
          axios.get(filmsUrl)
            .then((response) => {
              this.state.moviesWorld.push({
                title: response.data.title,
              });
              this.setState({ moviesWorld: this.state.moviesWorld });
            })
        );
      } else {
        this.props.infos.films.map((filmsUrl) =>
          axios.get(filmsUrl)
            .then((response) => {
              this.state.moviesPeple.push({
                title: response.data.title,
              });
              this.setState({ moviesPeple: this.state.moviesPeple });
            })
        );
  
        axios.get(this.props.infos.homeworld)
          .then((response) => {
            this.setState({
              homeworld: response.data
            })
            this.state.homeworld.films.map((filmsUrl) =>
              axios.get(filmsUrl)
                .then((response) => {
                  this.state.moviesWorld.push({
                    title: response.data.title,
                  });
                  this.setState({ moviesWorld: this.state.moviesWorld });
                })
            )
          });
      }
    


  }
  componentWillReceiveProps(nextProps) {
    this.setState({ moviesPeple: [], moviesWorld: []});

    if (nextProps.infos.url !== this.props.infos.url) {
      if (this.props.type === "planet") {
        nextProps.infos.films.map((filmsUrl) =>
          axios.get(filmsUrl)
            .then((response) => {
              this.state.moviesWorld.push({
                title: response.data.title,
              });
              this.setState({ moviesWorld: this.state.moviesWorld });
            })
        );
      } else {
        nextProps.infos.films.map((filmsUrl) =>
          axios.get(filmsUrl)
            .then((response) => {
              this.state.moviesPeple.push({
                title: response.data.title,
              });
              this.setState({ moviesPeple: this.state.moviesPeple });
            })
        );

        axios.get(nextProps.infos.homeworld)
          .then((response) => {
            this.setState({
              homeworld: response.data
            })
            this.state.homeworld.films.map((filmsUrl) =>
              axios.get(filmsUrl)
                .then((response) => {
                  this.state.moviesWorld.push({
                    title: response.data.title,
                  });
                  this.setState({ moviesWorld: this.state.moviesWorld });
                })
            )
          });

      }


    }
    return true;
  }
  render() {
    var filmsInPeople = this.state.moviesPeple.map((item) => {
      return (
        item.title
      );
    }
    );
    var planetsInFilms = this.state.moviesWorld.map((item) => {
      return (
        item.title
      );
    }
    );

    if (this.props.type === "planet") {
      const { name, population, diameter, climate, gravity } = this.props.infos;

      return (
        <div className="Card">
          <div className="Card-box" onClick={() => this.toggleModal()}>
            <img src="https://png.icons8.com/ios/540//star-wars.png" alt="LogoWhite" />
            <div className="Card-box-infos">
              <h1>{name}</h1>
              <div>
                <img src="https://image.flaticon.com/icons/svg/44/44386.svg" alt="Planet" title="Planet" />
                <h3>{population} </h3>
                <img src="https://image.flaticon.com/icons/svg/149/149150.svg" alt="Population" title="Population" />
              </div>
            </div>
          </div>
          <Modal openModal={this.state.openModal} onCancel={() => this.toggleModal()}>
            <Tabs>
              <TabList>
                <Tab>Planet</Tab>
              </TabList>
              <TabPanel>
                <p>
                  <b>Name: </b> {name} <br />
                  <b>Population: </b> {population} <br />
                  <b>Diameter: </b> {diameter} <br />
                  <b>Climate: </b> {climate} <br />
                  <b>Gravity : </b> {gravity} <br />
                  <b>Films: </b> {planetsInFilms.length !== 0 ? planetsInFilms.join(", ") : "n/a"} <br />
                </p>
              </TabPanel>
            </Tabs>
          </Modal>
        </div>
      );
    }

    const { name, height, gender, birth_year, skin_color } = this.props.infos;

    return (
      <div className="Card">
        <div className="Card-box" onClick={() => this.toggleModal()}>
          <img src="https://png.icons8.com/ios/540//star-wars.png" alt="LogoWhite" />
          <div className="Card-box-infos">
            <h1>{name}</h1>
            <div>
              <img src="https://image.flaticon.com/icons/svg/108/108637.svg" alt="Character" title="Character" />
              <h3>{height === "unknown" ? height : `${height} cm`} </h3>
              <img src="https://image.flaticon.com/icons/svg/149/149150.svg" alt="Height" title="Height" />
            </div>
          </div>
        </div>
        <Modal openModal={this.state.openModal} onCancel={() => this.toggleModal()}>
          <Tabs>
            <TabList>
              <Tab>Character</Tab>
              <Tab>Homeworld</Tab>
            </TabList>
            <TabPanel>
              <p>
                <b>Name: </b> {name} <br />
                <b>Height: </b> {height} <br />
                <b>Gender: </b> {gender} <br />
                <b>Birth year: </b> {birth_year} <br />
                <b>Skin color: </b> {skin_color} <br />
                <b>Films: </b> {filmsInPeople.length !== 0 ? filmsInPeople.join(", ") : "n/a"} <br />
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <b>Name: </b> {this.state.homeworld.name} <br />
                <b>Population: </b> {this.state.homeworld.population} <br />
                <b>Diameter: </b> {this.state.homeworld.diameter} <br />
                <b>Climate: </b> {this.state.homeworld.climate} <br />
                <b>Gravity : </b> {this.state.homeworld.gravity} <br />
                <b>Films: </b> {planetsInFilms.length !== 0 ? planetsInFilms.join(", ") : "n/a"} <br />
              </p>
            </TabPanel>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default Card;
