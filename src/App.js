import React from 'react';

class App extends React.Component{

  constructor(props){
    //calling constructor
    super(props);
    
    //init state
    //! this is the only time we do assign values using state
    this.state = {lat:null, errorMessage:''} ;
  }

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
      return(<div>Latitude:{this.state.lat}</div>);
    else
      return <div>Loading!</div>;
  }
}

export default App;