import React, { Component } from 'react';
import { postSearch, defaultSearch, savedArticles } from '../utils/api'
import './App.css';

import Hader from './Hader'
import Search from './Search'
import Result from './Results';
import Saved from './Saved';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: '',
      startYear: '',
      endYear: '',
      result: [],
      saved: []
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let { topic, startYear, endYear } = this.state;
    postSearch(topic, startYear, endYear)
    .then( res => this.setState({result: res}))
  }

  componentDidMount(){
    defaultSearch()
    // .then(res => console.log(res))
     .then(res => this.setState({result: res.response.docs}))
    savedArticles()
    .then(res => this.setState({saved: res}))
  }
  render() {
    return (
      <div className="mw8 center">
        <Hader />
        <Search submit={this.handleSubmit} change={this.handleChange} sY={this.state.startYear} eY={this.state.endYear} topic={this.state.topic} />
        <Saved articles={this.state.saved} />
        <div>Results</div>
        <Result results={this.state.result} />
      </div>
    );
  }
}

export default App;
