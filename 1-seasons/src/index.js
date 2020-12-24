import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { latitude: null, errorMessage: null};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    
    if (this.state.latitude) {
      return <SeasonDisplay lat={ this.state.latitude }></SeasonDisplay>
    }
    
    return <Spinner>Please allow location access</Spinner>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

