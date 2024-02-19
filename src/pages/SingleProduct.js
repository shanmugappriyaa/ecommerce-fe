import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getAProduct } from "../features/products/productSlice";

import { addProdToCart } from "../features/user/userSlice";

function SingleProduct() {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const dispatch = useDispatch();
  const productState = useSelector(
    (state) => state?.product?.singleproduct?.product
  );
  const authState = useSelector((state) => state?.auth);
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  const productListState = useSelector((state) => state?.product?.product);
  const { product } = productListState;
  useEffect(() => {
    dispatch(getAProduct(getProductId));
  }, []);
  useEffect(() => {
    if (cartState?.length > 0) {
      for (let i = 0; i < cartState.length; i++) {
        if (getProductId === cartState[i]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, []);


  const uploadCart = () => {
    dispatch(
      addProdToCart({
        productId: productState?._id,
        quantity,
        price: productState?.price,
      })
    );
    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  };
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container className="main-product-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                {/* <ReactImageZoom {...props} /> */}
               <img src={productState?.images[0]?.url
      && productState.images[0].url} alt=" product image"  />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Type</label>
                  <label className="product-data">Watch</label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Brand</label>
                  <label className="product-data">
                    {productState?.brand?.title}
                  </label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Categories</label>
                  <label className="product-data">
                    {productState?.category?.title}
                  </label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Tags</label>
                  <label className="product-data">{productState?.tags}</label>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <label className="product-heading">Avaiablity</label>
                  <label className="product-data">In Stock</label>
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mb-3 mt-2">
                  {alreadyAdded === false && (
                    <>
                      <label className="product-heading">Quantity:</label>
                      <div className="">
                        <input
                          type="number"
                          id=""
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "70px" }}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}

                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button  prime-btn border-0"
                      type="button"
                      onClick={() => {
                        alreadyAdded
                          ? navigate("/cart")
                          : uploadCart(
                              productState?._id,
                              quantity,
                              productState?.price
                            );
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                    </button>
                    {/* <button className="button signup">Buy it NOW</button> */}
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      
                      <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish( productState?._id);
                  }}
                >
              
                  <AiOutlineHeart className="fs-5 me-2"/> Add to Wishlist
                </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper home-wrapper-2 px-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>{productState?.description}</p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="review-wrapper home-wrapper-2 px-5 ">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={productState?.totalrating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0"> Based on 2 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {product &&
            product?.map((item, index) => {
              if (item?.tags === "popular") {
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
    </>
  );
}

export default SingleProduct;
