import React, { useEffect, useState } from 'react';
import './Body.css';

import { useSelector } from 'react-redux';

import {selectId, selectName} from "../features/stockSlice";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from './Card';

import axios from "axios";

const header = {headers: {'x-rapidapi-key': 'fce1e2482cmsh463e4323aa4458dp1e29bbjsn76b1ba1dab75'}};

const responsive = {
superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
},
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
},
mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
}
};

const responsive1 = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

function Body() {
    const name = useSelector(selectName);

    const [news, setNews] = useState([]);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        console.log("VALUES");
        
        const url = `https://yh-finance.p.rapidapi.com/auto-complete?q=${name}`;
        axios
        .get(url, header)
        .then((res) => {
            // console.log(res);
            setNews(res.data.news);
            setQuotes(res.data.quotes);
        });

    }, [name]);

    console.log(news);
    console.log(quotes);

    // news -> title
    // stocks -> score, exchDisp, longname

    return (
        <div className="body">
            <div className="body__news">
                <Carousel 
                    className="carousel" 
                    infinite={true} 
                    autoPlay={true} 
                    autoPlaySpeed={5000} 
                    responsive={responsive}
                    arrows={false}
                >
                    {news.map((n) => (
                        <h1>{n.title}</h1>
                    ))}
                </Carousel>
            </div>
            
           <div className="body__carousel">
                <Carousel 
                    className="carousel" 
                    infinite={true} 
                    autoPlay={true} 
                    autoPlaySpeed={5000} 
                    responsive={responsive1}
                    arrows={false}
                >
                    {quotes.map((quote) => (
                        <Card
                            id={quote.score}
                            score={quote.score}
                            exchDisp={quote.exchDisp}
                            longname={quote.longname}
                        />
                    ))}
                </Carousel>
           </div>
        </div>
    )
}

export default Body
