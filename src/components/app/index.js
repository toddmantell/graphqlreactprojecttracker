import {h, Component} from 'preact';
import {Loading} from '../loading';
import Layout from './Layout';
import * as dataService from '../services/dataService';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      projects: []
    };

    this.renderLoadingOrApp = this.renderLoadingOrApp.bind(this);
  }

  async componentDidMount() {
    const projects = await dataService.getProjects();

    console.log('projects', projects);
  }

  renderLoadingOrApp() {
      return this.state.loading ? <Loading /> : (
        <Layout />
      );
  }

  render() {
    return this.renderLoadingOrApp();
  }
}