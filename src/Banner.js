import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <section id="home">
    <h1 className="text-center">ORGANIC SPICES</h1>
    <p>Variety's the very spice of life ,That gives it all its flavor</p>
    <div className="input-group m-4">
        <input type="text" className="form-control" placeholder="Email Address"/>
        <button className="btn signin">Get Started</button>
    </div>
</section>
  )
}

export default Banner