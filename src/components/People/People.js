import React, { Component } from 'react';
import axios from 'axios';
import NextAndPrevious from '../Pagination';

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
  
  updateData(data){
    this.setState ({
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
        {people.map((peoples, i) =>
          <div key={i} className="People-card">
            <h1>Name: {peoples.name}</h1>
            <h3>Height: {peoples.height}</h3>
          </div>
        )}

        <NextAndPrevious updateData={this.updateData} next={next} previous={previous} />
      </div>
    );
  }
}

export default People;