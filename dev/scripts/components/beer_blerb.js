import React from 'react'

const BeerBlerb= (props) => {
    let fullBlerb = '';
    let shortBlerb = '';
    
    if (props.beer.tasting_note !== undefined){
        fullBlerb = props.beer.tasting_note;
        shortBlerb = fullBlerb.substring(0, 120);
        console.log(shortBlerb)
    }

    return (
        <div>
            {shortBlerb ? (
            <p>{shortBlerb}...</p>
            ) : (
                null
            )}
        </div>   
        )
}

export default BeerBlerb