import React, { Component } from 'react';
import axios from 'axios';
import NextAndPrevious from '../Pagination';
import Card from '../Card';
import './styles/People.scss'
class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      next: '',
      previous: ''
    }

    this.updateData = this.updateData.bind(this);

  }

  updateData(data) {
    this.setState({
      people: data.results,
      next: data.next,
      previous: data.previous
    });
  }

  getPeople() {
    return axios.get('https://swapi.co/api/people')
      .then((response) => {
        this.setState({
          people: response.data.results,
          next: response.data.next,
          previous: response.data.previous
        })
      });
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people, next, previous } = this.state;

    return (
      <div className="People">
        <div className="People-grid">
          {people.map((peoples, i) =>
            <Card key={i} infos={peoples} />
          )}
        </div>
        <NextAndPrevious updateData={this.updateData} next={next} previous={previous} />
      </div>
    );
  }
}

export default People;