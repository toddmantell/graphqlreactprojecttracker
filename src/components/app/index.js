import {h, Component} from 'preact';
import {Loading} from '../loading';
import Layout from './Layout';
import * as dataService from '../services/dataService';

export default class App extends Component {
  state = {
      loading: true,
    projects: []
  };

  renderLoadingOrApp = this.renderLoadingOrApp.bind(this);

  async componentDidMount() {
    const {data} = await dataService.getProjects();

    this.setState({loading: false, projects: data.projects});
  }

  renderLoadingOrApp() {
      return this.state.loading ? <Loading /> : (
        <Layout projects={this.state.projects}/>
      );
  }

  render() {
    return this.renderLoadingOrApp();
  }
}