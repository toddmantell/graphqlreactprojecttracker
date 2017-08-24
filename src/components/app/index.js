import {h, Component} from 'preact';
import {Loading} from '../loading';
import Layout from './Layout';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };

    this.renderLoadingOrApp = this.renderLoadingOrApp.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 750);
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