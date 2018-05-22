import React from 'react'

const BeerBlerb= (props) => {
    let fullBlerb = props.beer.tasting_note;
    let shortBlerb = '';
    
    if (fullBlerb){
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