import React from 'react';
import countriesArr from '../api_terms';
import axios from 'axios';
import BeerList from './beer_list';
import BeerBlerb from './beer_blerb';
import RestoList from './resto_list';

class ResultsBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
            currentBeer: {},
            beerIndex: 0,
            restos: [],
            restoIndex: 0,
            currentResto: {},
        }
        this.getBeer = this.getBeer.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getIndexNumber = this.getIndexNumber.bind(this);
        this.countryList = props.countryList;
        this.cuisineSelected = props.cuisineSelected;
    }

// === CALL APIS AFTER MOUNT
    componentDidMount(){
        this.getBeer();
        this.getRestos();
    }
// === LCBO API CALL
    getBeer() {
        let countryName = "";
        this.countryList.forEach(country => {
            if (country.cuisineType === this.cuisineSelected) {
                countryName = country.lcbo
            }
        });
        axios.get('http://lcboapi.com/products', {
            params: {
                access_key: 'MDowZTRkM2RjYy0yZDZmLTExZTgtOWE5ZC1iMzZjYmI4MWYzOWE6YzlOMEFQdzF3TTFFSjZsWFA5ejd3Tzg5bzc1Rnd4Z0E0UWhN',
                q: `beer+${countryName}`,
                dataType: 'json'
            }
        })
        .then((res) => {
            this.setState({
                beers: res.data.result,
                currentBeer: res.data.result[0]
            });
        })
    }
// ZOMATO API CALL
    getRestos() {
        let cuisineNum = 0;
        this.countryList.forEach(country => {
            if (country.cuisineType === this.cuisineSelected) {
                cuisineNum = country.cuisineNum;
            }
        });
        console.log(cuisineNum);
        axios.get('https://developers.zomato.com/api/v2.1/search', {
            params: {
                apikey: 'fc7bda90e297088c088bd9cd062288e4',
                entity_id: 89,
                entity_type: 'city',
                cuisines: cuisineNum,
                sort: 'rating'
            }
        })
        .then((res) => {
            this.setState({
                restos: res.data.restaurants,
                currentResto: res.data.restaurants[0].restaurant
            })
        })
    }

// GET INDEX NUMBER METHOD used in conjunction with handleClick() to setState after next/prev btn click
    getIndexNumber(id){
        if (id === 'beerPrev') {
            if(this.state.beerIndex -1 < 0) {
                return this.state.beers.length -1
            } else {
                return this.state.beerIndex -1
            }
        } else if (id === 'beerNext') {
            if(this.state.beerIndex + 1 > this.state.beers.length -1) {
                return 0
            } else {
                return this.state.beerIndex +1
            }
        } else if (id === 'restoNext') {
            if(this.state.restoIndex + 1 > this.state.restos.length -1){
                return 0
            } else {
                return this.state.restoIndex +1
            }
        } else if (id === 'restoPrev') {
            if(this.state.restoIndex -1 < 0){
                return this.state.restos.length -1
            } else {
                return this.state.restoIndex -1
            }
        }
    }

// HANDLE CLICK METHOD
    handleClick(e) {
        let newIndex = 0;

        if (e.target.id === 'beerPrev') {
            newIndex = this.getIndexNumber('beerPrev');
            this.setState({
                beerIndex: newIndex,
                currentBeer: this.state.beers[newIndex]
            })
        } else if (e.target.id === 'beerNext') {
            newIndex = this.getIndexNumber('beerNext');
            this.setState({
                beerIndex: newIndex,
                currentBeer: this.state.beers[newIndex]
            })
        } else if (e.target.id === 'restoNext') {
            newIndex = this.getIndexNumber('restoNext');
            console.log(this.state.restos[newIndex])
            this.setState({
                restoIndex: newIndex,
                currentResto: this.state.restos[newIndex].restaurant
            })
        } else if (e.target.id === 'restoPrev') {
            newIndex = this.getIndexNumber('restoPrev');
            this.setState({
                restoIndex: newIndex,
                currentResto: this.state.restos[newIndex].restaurant
            })
        }
    }

// === RENDER ===
    render() {
        return (
            <div>
                {/* PREV BUTTONS */}
            <i
                className="far fa-caret-square-right fa-flip-horizontal"
                id='beerPrev'
                onClick={(e) => this.handleClick(e)}>
            </i>
            <i
                className="far fa-caret-square-right fa-flip-horizontal"
                id='restoPrev'
                onClick={this.handleClick}></i>
                <div className='resultsBox'>
                {/* RENDER BEER RES */}
                    <div className='BeerImgBox'>
                        <div className='imgFrame'>
                            <img src={this.state.currentBeer.image_thumb_url} alt="" className='beerImg'/>
                        </div>
                    </div>
                    <div className='beerText'>
                        <div className='beerText__titles'>
                            <h2>{this.state.currentBeer.name}</h2>
                            <h3>{this.state.currentBeer.producer_name}</h3>
                        </div>
                        <div className="beerBullets">
                            <BeerList beer={this.state.currentBeer}/>
                        </div>
                        <div className='beerBlerb'>
                            <BeerBlerb beer={this.state.currentBeer} />
                        </div>
                    </div>

                {/* RENDER RESTO RES */}
                    <div className='restoImgBox'>
                        <div className='imgFrame'>
                            <img src={this.state.currentResto.thumb} alt="{}" className='restoImg'/>
                        </div>
                    </div>
                    <div className='restoText'>
                        <h2 className='restoText__title'>{this.state.currentResto.name}</h2>
                        <div className='restoBullets'>
                            <RestoList 
                            resto={this.state.currentResto} 
                            location={this.state.currentResto.location}
                            rating={this.state.currentResto.user_rating} />
                        </div>
                        <div className='restoReview'>
                            {/* <RestoReview/> */}
                        </div>
                    </div>
                </div>
                {/* NEXT BUTTONS */}
                <i
                    className="far fa-caret-square-right"
                    id='beerNext'
                    onClick={this.handleClick}>
                </i>
                <i
                    className="far fa-caret-square-right"
                    id='restoNext'
                    onClick={this.handleClick}>
                </i>
            </div>
        )
    }
}

export default ResultsBox