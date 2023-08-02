import React from "react"

export default function Card(props) {
    return(
        <div className="card-component">
            {props.item.openSpots ==0 && <div className="card--badge">SOLD OUT</div>}
            <img className="image" src={`./images/${props.item.coverImg}`}></img>
            <div className="reviews">
            <img className="star" src="./images/star.png"></img>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
            </div>
            <p className= "card-title">{props.item.title}</p>
            <p className= "price"> <span className="bold">From ${props.item.price}</span> / person</p>
        </div>
        
    )
}