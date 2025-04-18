import React from 'react';
import { Link } from 'react-router-dom';
import'./cart.css'

const Cart = ({ cart, setCart }) => {
  return (
    <div className="container my-5 cart-container">
  {
    cart.length === 0 ? (
      <div className="text-center">
        <h1>Your Cart is empty</h1>
        <Link to="/" className="btn btn-warning mt-3">Continue Shopping...</Link>
      </div>
    ) : (
      cart.map((product, index) => (
        <div key={index} className="card mb-3 my-4 cart-card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary mx-3">{product.price} ₹</button>
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }

  {
    cart.length !== 0 && (
      <div className="container text-center my-5 d-flex justify-content-center align-items-center btn-group-mobile">
        <button className='btn btn-warning mx-3'>CheckOut</button>
        <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
      </div>
    )
  }
</div>

    
  );
};

export default Cart;
