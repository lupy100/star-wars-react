import React, { Component } from 'react';
import axios from 'axios';
import NextAndPrevious from '../Pagination';
import Card from '../Card';
import './styles/Planet.scss'

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
      next: '',
      previous: ''
    }

    this.updateData = this.updateData.bind(this);

  }

  updateData(data) {
    this.setState({
      planet: data.results,
      next: data.next,
      previous: data.previous
    });
  }

  getPlanet() {
    return axios.get('https://swapi.co/api/planets/')
      .then((response) => {
        this.setState({
          planet: response.data.results,
          next: response.data.next,
          previous: response.data.previous
        })
      });
  }

  componentDidMount() {
    this.getPlanet();
  }

  render() {
    const { planet, next, previous } = this.state;
    return (
      <div className="Planet">
        <div className="Planet-grid">
          {planet.map((planets, i) =>
            <Card key={i} infos={planets} type={"planet"} />
          )}
        </div>
        <NextAndPrevious updateData={this.updateData} next={next} previous={previous} />
      </div>
    );
  }
}

export default Planet;