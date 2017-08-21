import {h, Component} from 'preact';
import {Loading} from '../loading/Loading';

import styled from 'styled-components';

const Button = styled.button(`
  width: 100px;
  background-color: blue;
`);

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
          <br /><Button>I'm a button</Button>
        </div>
      );
  }

  render() {
    return this.renderLoadingOrApp();
  }
}