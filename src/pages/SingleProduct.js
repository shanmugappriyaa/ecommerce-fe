import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct } from "../features/products/productSlice";

function SingleProduct() {
  const location = useLocation()
  const getProductId = location.pathname.split("/")[2]
  const[quantity,setQuantity]= useState(1)
  const dispatch = useDispatch()
  const productState = useSelector(state=>state.product.Singleproduct)
  useEffect(()=>{
    dispatch(getAProduct(getProductId))
  })
  const uploadCart =()=>{

  }
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img:productState?.images[0]?.url ? productState?.images[0]?.url: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container className="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
              {productState?.title}
                </h3>
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
                  <h3 className="product-heading">Type</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categories</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Avaiablity</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mb-3 mt-2">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      id=""
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control"
                      onChange={(e)=>setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0"
                    type = "button"  onClick={()=>{uploadCart({productState?._id})}}>
                      Add to Cart</button>
                    <button className="button signup">Buy it NOW</button>
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
              {productState?.description}
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="review-wrapper home-wrapper-2 ">
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
      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
