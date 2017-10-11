import React, { Component } from 'react';
import {Loading} from '../loading';
import Layout from './Layout';
import * as dataService from '../services/dataService';

export default class App extends Component {
  state = {
    loading: true,
    projects: [],
    chosenProject: false
  };

  renderLoadingOrApp = this.renderLoadingOrApp.bind(this);
  handleDropDownChange = this.handleDropDownChange.bind(this);

  async componentDidMount() {
    setTimeout(async () => {
      const {data} = await dataService.getProjects();
      
      this.setState({loading: false, projects: data.projects});
    }, 750);
  }
  //For Innovate Session: have multiple microservices that feed into the resolvers?

  renderLoadingOrApp() {
      return this.state.loading ? <Loading /> : (
        <Layout projects={this.state.projects} onChange={this.handleDropDownChange} chosenProject={this.state.chosenProject}/>
      );
  }

  handleDropDownChange(event) {
    const chosenProject = this.state.projects.filter(project => {
      return project.id == event.target.value;
    })[0];

    if (chosenProject) this.setState({chosenProject});
  }

  render() {
    return this.renderLoadingOrApp();
  }
}