import React from "react";
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data.js"

export default function App() {
    const info = data.map( (data)=> {
        return <Card item = {data}
        />
    })
    return(
        <div className="container">
        <Nav/>
        <Hero/>
        <div className="cards">
        {info}
        </div>
        </div> 
    )
}

