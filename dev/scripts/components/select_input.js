import React, { Component } from 'react';

const SelectInput = (props) => {
    const cuisineTypes = props.cuisineList.countryList.map((cuisineObj) => {
        return cuisineObj.cuisineType
    })
    cuisineTypes.sort();
    
    return(
        <form action="">
            <select onChange={(e) => {  props.setStateCuisine(e);}}>
                {cuisineTypes.map((cuisine, i) => {
                    return <option key={i}>{cuisine}</option>
                })}
            </select>
        </form>
    )
}

export default SelectInput;

