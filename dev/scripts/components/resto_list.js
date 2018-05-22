import React from 'react';

const RestoList = (props) => {
    const resto = props.resto;
    const ratingObj = resto.user_rating;
    const locationObj = resto.location;
    const { user_rating, price_range, is_delivering_now, menu_url, location } = resto;
    
    return (
        <ul>
            <li>{ratingObj ? ratingObj.aggregate_rating : null}</li>
            <li>{price_range}</li>
            <li><a href={menu_url}>Menu</a></li>
            <li>delivering: {is_delivering_now === 0 ? 'Currently' : 'Closed'}</li>
            <li>{locationObj ? locationObj.address : null}</li>
        </ul>

    )
}

export default RestoList