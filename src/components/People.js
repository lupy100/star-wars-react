import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button/Button';

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      next: '',
      previous: ''
    }
  }

  getPeople() {
    return axios.get('https://swapi.co/api/people')
      .then((response) => {
        console.log(response.data);
        this.setState({
          people: response.data.results,
          next: response.data.next,
          previous: response.data.previous
        })
        console.log(this.state.people)
      });
  }

  goTo(next, previous) {
    if (next !== null && previous !== null) {
      return axios.get(next, previous)
        .then((response) => {
          console.log(response.data);
          this.setState({
            people: response.data.results,
            next: response.data.next,
            previous: response.data.previous
          })
        });
    }
    console.log("erro")
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { people, next, previous } = this.state;

    return (
      <div className="People">
        {people.map((peoples, i) =>
          <div key={i}>
            <h1>{peoples.name}</h1>
            <h3>{peoples.height}</h3>
          </div>
        )}
        <Button onClick={() => this.goTo(previous)}> <span>Teste 0 </span> </Button>
        <Button onClick={() => this.goTo(next)}> <span>Teste 1 </span> </Button>
      </div>
    );
  }
}

export default People;