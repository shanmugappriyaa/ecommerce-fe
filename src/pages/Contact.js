import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function Contact() {
  return (
    <>
        <Meta  title={"Contact Us"} />
    <BreadCrumb title ='Contact Us' />
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <div className="contact-inner-wrapper d-flex justify-content-between">
<div>
  <h3 className='contact-title mb-4'>Contact</h3>
  <form action='' className='d-flex flex-column gap-15'>
    <div>
      <input type='text' className='form-control' placeholder='Name' />
    </div>
    <div>
      <input type='email' className='form-control' placeholder='email'/>
    </div>
    <div>
      <input type='tell' className='form-control' placeholder='Mobile Number' />
    </div>
    <div>
      <textarea name='' id='' className='W-100' cols='30' rows='4' placeholder='comments'>
      </textarea>
    </div>
    <div>
      <button className='button border-0'>Submit</button>
    </div>
  </form>
  </div>
<div>
  <h3 className='contact-title mb-4'>Get in touch with us</h3>
  </div>
          </div>
          </div>
        </div>
      </div>

    </div>
    </>

  )
}

export default Contact