import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { BiPhoneCall ,BiInfoCircle  } from "react-icons/bi";
import { AiOutlineHome,AiOutlineMail } from "react-icons/ai";


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
  
  <ul className='ps-0'>
    <li className='mb-3 d-flex gap-15 align-items-center'> <AiOutlineHome className='fs-5'/>
    <address className='mb-0'>
    Hno: 277, Near Vill chopal,sonipat,Haryana , Pincode:131103
      </address></li>
    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall  className='fs-5'/>
    <a href="tel:+91 9998887776">+91 9998887776</a></li>
    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail  className='fs-5'/>
    <a href="mailto:pshanmu.priya@gmail.com">pshanmu.priya@gmail.com</a>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center'>
      <BiInfoCircle className='fs-5' />
      <p className='mb-0'>Monday - Friday  10AM -8PM</p></li>
  </ul>
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