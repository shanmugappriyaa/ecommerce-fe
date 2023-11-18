import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import watch from '../images/watch.jpg'

function Checkout() {
  return (
<>
<div className="checkout-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
  <div className="col-7">
    <div className="checkout-left-data">
        <h3 className='website-name'> Shanmart</h3>
        <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
    <Link className='text-dark' to='/cart'>Cart</Link></li>&nbsp;/
    <li className="breadcrumb-item">
        <a href="#">Information</a></li>&nbsp;/
    <li className="breadcrumb-item active" aria-current="page">Shipping</li>
  </ol>
</nav>
<h4 className="title">Contact Information</h4>
<p className='user-details'>Raja Murugan(raju@gmail.com)</p>
<div class="row">
  <div class="col-md-8 mb-4">
    <div class="card mb-4">
      <div class="card-header py-3">
        <h5 class="mb-0">Biling details</h5>
      </div>
      <div class="card-body">
        <form>
          {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form7Example1" class="form-control" />
                <label class="form-label" for="form7Example1">First name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form7Example2" class="form-control" />
                <label class="form-label" for="form7Example2">Last name</label>
              </div>
            </div>
          </div>

          {/* <!-- Text input --> */}
          <div class="form-outline mb-4">
            <input type="text" id="form7Example3" class="form-control" />
            <label class="form-label" for="form7Example3">Company name</label>
          </div>

          {/* <!-- Text input --> */}
          <div class="form-outline mb-4">
            <input type="text" id="form7Example4" class="form-control" />
            <label class="form-label" for="form7Example4">Address</label>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form7Example5" class="form-control" />
            <label class="form-label" for="form7Example5">Email</label>
          </div>

          {/* <!-- Number input --> */}
          <div class="form-outline mb-4">
            <input type="number" id="form7Example6" class="form-control" />
            <label class="form-label" for="form7Example6">Phone</label>
          </div>

        <div className="d-flex justify-content-between align-items-center">
            <Link to='/cart' className='text-dark'>
                <BiArrowBack className='mt-2'/>Return to Cart</Link>
            <Link to='/cart' className='button'>Continue to shipping</Link>
        </div>
        </form>
      </div>
    </div>
  </div>

</div>
    </div>
  </div>
  <div className="col-5">
    <div className='border-bottom py-4'>
        <div className='d-flex  gap-10  align-items-center'>
        <div className="w-75 d-flex gap-10">
            <div className="w-25 position-relative">
            <img className='img-fluid' src={watch} alt='' />
        </div>
        <h5 className='title'>gfrhjkh</h5>
        <div>
        </div>
            <h5 className='flex-grow-1'>$100</h5>
        </div>
            </div> 
    </div>
    <div className='border-bottom py-4'>
    <div className='d-flex justify-content-between align-items-center'>
        <p>Subtotal</p>
        <p>$ 100</p>
    </div>
    <div className='d-flex justify-content-between align-items-center'>
        <p className='mb-0'>Shipping</p>
        <p className='mb-0'>$ 100</p>
    </div>
    </div>
    <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
        <h4>Total</h4>
        <h5>$ 10000</h5>
    </div>
    </div>
    </div>
    </div>
    </div>
</>
  )
}

export default Checkout