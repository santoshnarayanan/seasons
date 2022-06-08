import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{

    //! init state and this is the only time we do assign values using state
    state = {lat:null, errorMessage:''} ;

  componentDidMount(){
      //get current location
      window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat:position.coords.latitude}),
        (err) => this.setState({errorMessage:err.message})
      );
  }
  
  render(){
    //conditional rendering
    if(this.state.errorMessage && !this.state.lat)
      return(<div>Error:{this.state.errorMessage}</div>);
    else if(!this.state.errorMessage && this.state.lat)
      return(<SeasonDisplay lat={this.state.lat}/>);
    else
      return <div>Loading!</div>;
  }
}

export default App;