import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams()

  const [product, setProduct] = useState({});
  const [releatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id)
    setProduct(filterProduct[0])

    const releatedProduct = items.filter((suman) => suman.category === product.category)
    setRelatedProduct(releatedProduct)
  }, [id, product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);

    toast.success('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price} ₹</button>
          
          <button
            onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
            className="btn btn-warning">
            Add to cart
          </button>
        </div>
      </div>
      <h1 className='text-center'>Releated Products</h1>
      <Product cart={cart} setCart={setCart} items={releatedProduct} />
    </>
  )
}

export default ProductDetail;
