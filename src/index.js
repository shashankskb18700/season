import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = { lat: null ,erroMessage:''};

  
  }


  componentDidMount() {
     window.navigator.geolocation.getCurrentPosition(
       (position) => this.setState({ lat: position.coords.latitude }),
       (err) => this.setState({ erroMessage: err.message })
     );
  }

  renderContent() {
    if (this.state.lat && !this.state.erroMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.erroMessage && !this.state.lat) {
      return <div>{this.state.erroMessage}</div>;
    }
    return <Spinner message="please accept location request" />;

  }
  
  render() {
    return(
    <div className="red">
      {this.renderContent()}
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
