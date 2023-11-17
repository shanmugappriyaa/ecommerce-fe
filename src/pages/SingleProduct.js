import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function SingleProduct() {
  return (
<>
<Meta  title={"Product Name"} />
    <BreadCrumb title ='Product Name' />
    <div className="main-product-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
  <div className="col-6">
    </div>
    <div className="col-6">
    </div>
    </div>
    </div>
    </div>
    <div className="description-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
  <div className="col-12">
  <h4>Description</h4>
    <div className='bg-white p-3'>
  
  <p >
  Lorem ipsum dolor sit amet. Et quam dicta sit consequatur omnis est labore consequatur non voluptatibus soluta vel officiis sint et repudiandae laboriosam sit velit voluptate. Ut nihil ratione eum 
  </p>
    </div>

    </div>
    </div>
      </div>
    </div>
    <section className="review-wrapper home-wrapper-2 ">
      <div className="container-xxl">
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
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className='mb-0'> Based on 2 Reviews</p>
            </div>
            </div>
        </div>
    </div>
  </div>
    </div>
    </div>
      </div>
    </section>
    <section className="popular-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
  <div className="col-12">
    <h3 className="section-heading">
        Our Popular Products
    </h3>
    </div>
    </div>
    <div className="row">
        <ProductCard />
       

    </div>
    </div>
    </section>
</>
  )
}

export default SingleProduct