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
    this.handleClick = this.handleClick.bind(this);
  }
  
  setStateCuisine(e){ 
    this.setState({
      cuisineSelected: e.target.value,
      phase: this.state.phase + 1
    });
  }

  handleClick(e) {
    console.log(e.target.id)
    if(e.target.id === 'beerPrev'){
      console.log('BEER BACK')
    } else if (e.target.id === 'beerNext'){
      console.log('BEER NEXT')
    } else if (e.target.id === 'restoNext'){
      console.log('NEXT RESTO')
    } else if (e.target.id === 'restoPrev') {
      console.log('RESTO BACK')
    }
  }

  render() {
    
    return (
      <div>
        <Map/>
        <div className='main-wrapper'>
          <i 
            className="far fa-caret-square-right fa-flip-horizontal" 
            id='beerPrev' 
            onClick={(e)=>this.handleClick(e)}>
          </i>
          <i 
            className="far fa-caret-square-right fa-flip-horizontal" 
            id='restoPrev' 
            onClick={this.handleClick}></i>
          <Main 
            phase={this.state.phase}
            setStateCuisine={this.setStateCuisine}
            countryList={countriesArr}
            cuisineSelected={this.state.cuisineSelected}
            />
          <i 
            className="far fa-caret-square-right" 
            id='beerNext' 
            onClick={this.handleClick}>
          </i>
          <i 
            className="far fa-caret-square-right" 
            id='restoNext' 
            onClick={this.handleClick}>
          </i>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// apikey: "fc7bda90e297088c088bd9cd062288e4",
