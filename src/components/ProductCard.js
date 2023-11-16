import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function ProductCard() {
  return <div className='col-3'>
    <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
            <img src='images/wish.svg' alt='wishlist' />
            </Link>
        </div>
        <div className="product-image">
            <img src ='images/watch.jpg' alt='product-img' />
        </div>
        <div className="product-details">
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
    count={5}
    size={24} value='3' edit={false}
    activeColor="#ffd700"
  />
            <p className="Price">$100.00</p>

        </div>
       
    </Link>
  </div>

}

export default ProductCard