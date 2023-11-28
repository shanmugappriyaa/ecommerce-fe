import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";

import { addToWishlist } from "../features/products/productSlice";

import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";

import { AiOutlineHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getallProducts();
  }, []);
  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;
  const authState = useSelector((state) => state.auth);
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  useEffect(() => {
    console.log("authState----------------->", authState);
    authState?.user === null && navigate("/login");
  }, [authState]);

  return (
    <>
      <Container class1="banner-wrapper pt-5 px-4 home-wrapper-2">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner banner-height">
            {product &&
              product?.map((item, index) => {
                if (item?.tags === "upcoming") {
                  console.log("product irem-->", item);
                  return (
                    <div
                      key={index}
                      className={
                        index === 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <img
                        src={item?.images?.[0]?.url}
                        className="d-block w-100 "
                        alt="..."
                      />
                    </div>
                  );
                }
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
      <Container class1="home-wrapper-2 pt-5 px-4">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-20" key={j}>
                    {i.image}
                    <div className="ps-2">
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper pt-5 px-4 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {product &&
            product?.map((item, index) => {
              if (item?.tags === "feature") {
                return (
                  <div key={index} className="col-3 mb-5">
                    <div className="product-card card position-relative">
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
                      <Link
                        to={`/product/${item._id}`}
                        className="product-details"
                      >
                        <h6 className="brand">{item?.brand?.title}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating?.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="Price">$ {item?.price}</p>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      {/* <Container class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand01} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand02} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand03} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand04} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand05} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand06} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand07} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand08} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container> */}
    </>
  );
}

export default Home;
