import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

function ResetPassword() {
  return (
 <>
  <Meta  title={"ResetPassword"} />
    <BreadCrumb title ='ResetPassword' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
  <div className="col-12">
    <div className="auth-card">
      <h3 className='text-center mb-3'>ResetPassword</h3>
      <form action='' className='d-flex flex-column gap-15'>
      <div>
    <input type="password" name="password" placeholder="New Password" className="form-control" />
  </div>
  <div className='mt-1'>
    <input type="password" name="confpassword" placeholder='Confirm Password' className="form-control" />
  </div>
  <div>
  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
    <button className='button border-0'>RESET</button>
   
    </div>
    </div>
      </form>
    </div>
  </div>
  </div>
  </Container>
 </>
  )
}

export default ResetPassword