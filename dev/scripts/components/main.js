import React from 'react';
import IntroBox from './intro_box';
import ResultsBox from './results_box';


const Main = (props) => {
    let DisplayBox;
    if(props.phase < 2){
        DisplayBox = <IntroBox countryList={props.countryList} setStateCuisine={props.setStateCuisine}/>
    } else {
        DisplayBox = <ResultsBox countryList={props.countryList} cuisineSelected={props.cuisineSelected}/>
    }


    return(
        <div>
            {DisplayBox}
        </div>
    )
}

export default Main
