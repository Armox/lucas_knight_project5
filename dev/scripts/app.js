import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import Main from './components/main';
import countriesArr from './api_terms';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    phase: 1,
    cuisineSelected: '',
    }
    this.setStateCuisine = this.setStateCuisine.bind(this);
  }
  
  setStateCuisine(e){ 
    this.setState({
      cuisineSelected: e.target.value,
      phase: this.state.phase + 1
    });
  }

  render() {
    
    return (
      <div>
        <Map/>
        <div className='main-wrapper'>
          <Main 
            phase={this.state.phase}
            setStateCuisine={this.setStateCuisine}
            countryList={countriesArr}
            cuisineSelected={this.state.cuisineSelected}
            />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// apikey: "fc7bda90e297088c088bd9cd062288e4",
