import React from 'react'
import {Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";

function Home() {
  return (
   <>
   <section className="home-wrapper-2 py-5">
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <div className="services d-flex align-items-center justify-content-between">
<div className='d-flex align-items-center gap-10'>
  <img src='images/service.png' alt='services'/>
  <div>
    <h6>Free Shipping</h6>
    <p className ='mb-0'>From all orders over $5</p>
    </div>
    </div>
<div className='d-flex align-items-center gap-10'>
<img src='images/service-02.png' alt='services'/>
  <div><h6>Daily Surprise Offers</h6>
  <p className ='mb-0'> save upto 25% OFF</p>
  </div></div>
  <div className='d-flex align-items-center gap-10'>
  <img src='images/service-03.png' alt='services'/>
  <div>
    <h6>Support 24/7</h6>
    <p className ='mb-0'>Shop with an Expert</p></div>
    </div>
    <div className='d-flex align-items-center gap-10'>
  <img src='images/service-04.png' alt='services'/>
  <div>
    <h6>Affordable Prices</h6>
    <p className ='mb-0'>'Get Factory Default Price</p>
    </div></div>
    <div className='d-flex align-items-center gap-10'>
  <img src='images/service-05.png' alt='services'/>
  <div>
    <h6>Secure Payment</h6>
    <p className ='mb-0'>100% Protected Payment</p>
    </div>
    </div>
      </div>
    </div>
  </div>
</div>
   </section>
   <section className="home-wrapper-2 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Camera</h6>
                <p>10items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Watches</h6>
                <p>10items</p>
              </div>
              <img src='images/watch.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Music & Gaming</h6>
                <p>10items</p>
              </div>
              <img src='images/headphone.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Camera</h6>
                <p>10items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>
            <div className='d-flex  align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>

          </div>
        </div>
      </div>
    </div>
   </section>
   <section className="marque-wrapper py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className='d-flex'>
         
            <div className='mx-4 w-25'>
              <img src='images/brand-01.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-02.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-03.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-04.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-05.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-06.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-07.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-08.png' alt='brand'/>
            </div>
</Marquee>
          </div>
        </div>
      </div>
    </div>

   </section>
   </>
  )
}

export default Home