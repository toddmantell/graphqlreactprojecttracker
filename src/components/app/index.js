import {h, Component} from 'preact';
import {Loading} from '../loading/Loading';

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
        <div>
          Application Root
        </div>
      );
  }

  render() {
    return this.renderLoadingOrApp();
  }
}