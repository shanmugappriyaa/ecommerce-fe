import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from '../images/wish.svg'
import watch from '../images/watch.jpg'

function ProductCard(props) {
  let location = useLocation();
  const { grid } = props;
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to='product/:id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} alt="product-img" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
              <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet. Est facilis voluptas non autem fugit
              et aliquid quidem est exercitationem maxime.
            </p>
            <p className="Price">$100.00</p>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="product-img" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet. Est facilis voluptas non autem fugit
              et aliquid quidem est exercitationem maxime.
            </p>
            <p className="Price">$100.00</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
