import React from 'react';
import SelectInput from './select_input'

const IntroBox = (props) => {
    return (
        <div className='introBox'>
            <div className='introText'>
                <h2 className='introTitle'>Choose your Cuisine</h2>
                <p className='para1'>Select the type of cuisine you'd like to order and we'll provide you with the best corresponding takeout restaurants in the city</p>
                <p className='para2'>We'll also provide you with a list of the LCBO beers that match your selection.</p>
                <SelectInput cuisineList={props} setStateCuisine={props.setStateCuisine}/>
            </div>
        </div>
    )
}

export default IntroBox;