import React from 'react'

const BeerBlerb= (props) => {
    const fullBlerb = props.beer.tasting_note;
    let shortBlerb = '';
    
    if(fullBlerb !== undefined){
        shortBlerb = fullBlerb.substring(0, 200);
        console.log(shortBlerb)
    }

    return (
        <p>{shortBlerb}...</p>
    )
}

export default BeerBlerb