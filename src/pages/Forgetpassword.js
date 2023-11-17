import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function Forgetpassword() {
  return (
<>
<Meta  title={"Forgetpassword"} />
    <BreadCrumb title ='Forgetpassword' />
    <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
  <div className="col-12">
    <div className="auth-card">
      <h3 className='text-center mb-3'>Reset Your Password</h3>
      <p className="text-center mt-2 mb-3">
        We will Send you an email to reset your password 
      </p>
      <form action='' className='d-flex flex-column gap-15'>
      <div>
    <input type="email" name="email" placeholder="email" className="form-control" />
  </div>
 
  <div>
  <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
    <buuton className='button border-0' type='submit'>Submit</buuton>
   
    <Link to='/login'>Cancel</Link>
    </div>
    </div>
      </form>
    </div>
  </div>
  </div>
      </div>

  </div>
</>
  )
}

export default Forgetpassword