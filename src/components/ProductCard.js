import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { AiOutlineHeart } from "react-icons/ai";

function ProductCard(props) {
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  const { grid, data } = props;
  console.log("data============>", data);
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <Link
              to={`${
                location.pathname == "/"
                  ? `/product/${item._id}`
                  : location.pathname == `/product/${item._id}`
                  ? `/product/${item._id}`
                  : `${item._id}`
              }`}
              className="product-card position-relative"
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish(item?._id);
                  }}
                >
                  {/* <img src={wish} alt="wishlist" /> */}
                 <AiOutlineHeart /> 
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images?.[0]?.url}
                  className="img-fluid d-block mx-auto "
                  alt="product-img"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating?.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.description}
                </p>
                <p className="Price">$ {item?.price}</p>
              </div>
            </Link>
          </div>
        );
      })}

      {/* <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
         <Link to={
          `${location.pathname=="/" ?"/product/:id"
          :location.pathname=='/product/:id'
          ?"/product/:id"
          :":id"}`}
        >
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
      </div> */}
    </>
  );
}

export default ProductCard;
