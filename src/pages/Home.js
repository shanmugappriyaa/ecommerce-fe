import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import { addToWishlist } from "../features/products/productSlice";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";

import { AiOutlineCamera,AiOutlineHeart } from "react-icons/ai";
import { GiWatch } from "react-icons/gi";


import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getallProducts();
  }, []);
  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;

  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    {/* <img src={i.image} alt="services" /> */}
                    {i.image}
                    <div>
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

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10items</p>
                </div>
                <GiWatch/>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10items</p>
                </div>
      <AiOutlineCamera />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10items</p>
                </div>
                <GiWatch/>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10items</p>
                </div>
                <AiOutlineCamera />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10items</p>
                </div>
                <GiWatch/>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10items</p>
                </div>
                <AiOutlineCamera />
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10items</p>
                </div>
                <GiWatch/>
              </div>
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10items</p>
                </div>
                <AiOutlineCamera />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper  py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {product &&
            product?.map((item, index) => {
              if (item) {
                return (
                  <div key={index} className="col-3">
                    <Link className="product-card position-relative">
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
                        <p className="Price">$ {item?.price}</p>
                      </div>
                    </Link>
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
