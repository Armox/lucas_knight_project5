import React from 'react';

const BeerList = (props) => {
    return (
        <ul>
            <li>{props.beer.secondary_category}</li>
            <li>{props.beer.alcohol_content} %alc.</li>
            <li>{props.beer.price_in_cents / 100}</li>
            <li>{props.beer.package}</li>      
        </ul>

    )
}

export default BeerList