import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';



const Product = ({ items, cart, setCart }) => {

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

    // Log cart when it updates
    useEffect(() => {
        console.log("Updated Cart:", cart);
    }, [cart]);

    return (
        <>
            <ToastContainer />
            <div className='product-bg'>
            <div className="container my-5">
                <div className="row">
                    {items.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <Link to={`/product/${product.id}`} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className="btn btn-primary mx-3">{product.price} ₹</button>
                                    <button
                                        onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                        className="btn btn-warning">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default Product;
