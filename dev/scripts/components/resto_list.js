import React from 'react';

const RestoList = (props) => {
    const resto = props.resto;
    const ratingObj = resto.user_rating;
    const locationObj = resto.location;
    const { user_rating, price_range, is_delivering_now, menu_url, location } = resto;
    
    return (
        <ul>
            <li>Rating: {ratingObj ? ratingObj.aggregate_rating : null}</li>
            <li>Price range: {price_range} / 5</li>
            <li><a href={menu_url}>Menu</a></li>
            <li>Delivery: {is_delivering_now === 0 ? 'Currently Delivering' : 'Closed'}</li>
            <li>{locationObj ? locationObj.address : null}</li>
        </ul>

    )
}

export default RestoList