import React from 'react';
import SelectInput from './select_input'

const IntroBox = (props) => {
    return (
        <div className='introBox'>
            <h1>INTROBOX</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quas nobis ipsa incidunt nesciunt tempore cum, fugiat hic accusantium assumenda? Aliquid perspiciatis asperiores expedita nihil architecto eos labore quas cupiditate!</p>
            <SelectInput cuisineList={props} setStateCuisine={props.setStateCuisine}/>
        </div>
    )
}

export default IntroBox;