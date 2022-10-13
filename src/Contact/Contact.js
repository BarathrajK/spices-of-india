import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <div className="container box">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img src="https://media.istockphoto.com/photos/herbs-and-spices-in-bowels-picture-id1297420369?b=1&k=20&m=1297420369&s=170667a&w=0&h=4g6W-cnBEVeEaKG_4-dTOs6s86Q-XsrmIQbtErEi8PY=" className="img-fluid"/>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h1>CONTACT US</h1>
                    <form className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Yuor name"/>
                        <input type="email" className="form-control" placeholder="Enter Yuor Email "/>
                        <textarea className="form-control" placeholder="Enter your massage"></textarea>
                        <button className="btn signin">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact