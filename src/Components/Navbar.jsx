import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";

const Navbar = ({ setData,cart }) => {
const location =useLocation()

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    setData(filteredItems);
  };

  const filterByPrice = (price) => {
    const filteredItems = items.filter((product) => product.price >= price);
    setData(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(""); // Clear input after submitting
    }
  };

  return (
    <>

      {/* Header Menu */}
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to="/" className="brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C8OqLN8b07nWYOvyJqKH_gBz1khrb024OQ&s" alt="" style={{height:50,width:150}}/></Link>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            
              
            />
            
            
          </form>

          <Link to="/cart" className="cart"><button type="button" className="btn btn-primary position-relative">
            <FaCartArrowDown style={{fontSize:"1.5rem"}}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button></Link>
        </div>

        {/* Category Filters */}
        {
          location.pathname=='/'&&
          (
            <div className="nav-bar-wraper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">No Filter</div>
          <div onClick={() => filterByCategory('mobiles')} className="items">Mobiles</div>
          <div onClick={() => filterByCategory('laptops')} className="items">Laptops</div>
          <div onClick={() => filterByCategory('tablets')} className="items">Tablets</div>
          <div onClick={() => filterByPrice(29999)} className="items">{"≥"} 29999</div>
          <div onClick={() => filterByPrice(49999)} className="items">{"≥"} 49999</div>
          <div onClick={() => filterByPrice(69999)} className="items">{"≥"} 69999</div>
          <div onClick={() => filterByPrice(89999)} className="items">{"≥"} 89999</div>
        </div>
          )
        }

        
      </header>
    </>
  );
};

export default Navbar;
