import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <section id="product">
    <div className="container m-5">
        <h1 className="text-center my-5">OUR PRODUCTS</h1>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://5.imimg.com/data5/BD/GR/MY-498697/spices-packaging-pouches-500x500.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Chilli</h5>
                      <a href="#" class="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://cpimg.tistatic.com/04840475/b/4/Masala-Spices-Packaging-Pouch-.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Turmeric</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://5.imimg.com/data5/GLADMIN/Default/2021/7/PM/KK/UB/84715/spices-packaging-bags-500x500.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Garam Masala</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://i.pinimg.com/736x/f7/9c/19/f79c19d63b6da32de7040b13d1b6901b.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Omani Masala</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://m.media-amazon.com/images/I/61t519wZO2S._SX522_.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Curry Powder</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://m.media-amazon.com/images/I/717JTn8SDHL._SX466_.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Spices Garam</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://www.ruchifoodline.com/img/products/extra/RUCHI-610261fa18dff-curry-50.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Achi curry masala</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://www.ruchifoodline.com/img/products/RUCHI-Blended-Spices-Black-Pepper-Powder-50g.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Pepper</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="card">
                    <img src="https://www.ruchifoodline.com/img/products/RUCHI-Organic-Spices-Organic-Cinnamon-Sticks-100g-50.jpg" className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title text-center">Lavangam</h5>
                      <a href="#" className="btn signin">Add to cart</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Product