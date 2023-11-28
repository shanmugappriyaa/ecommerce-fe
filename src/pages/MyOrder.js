import React, { useEffect } from 'react'
import Container from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../features/user/userSlice'


function MyOrder() {
  const dispatch = useDispatch();
  // const orderState = useSelector( state => state.auth.orderedProduct.order)
  const userOrderState = useSelector(
    (state) => state?.auth?.orders?.Orders
   );
 
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])
  return (
    <>
     
      <BreadCrumb title="My-Orders" />
       <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
            <h2> Order Details</h2>
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-2">Date</h4>
              <h4 className="cart-col-1">OrderId</h4>
              <h4 className="cart-col-2">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userOrderState &&
              userOrderState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2  d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-2 order-data">
                      {item?.createdAt?.split("T")?.[0]}
                    </div>
                    <div className="cart-col-1  gap-15 d-flex align-items-center">
                      <div className="w-75 order-data">
                        <p>{item?._id} </p>
                      </div>
                    </div>

                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <h5 className="order-data">{item?.orderItems?.length}</h5>
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="order-data">$ {item?.totalPrice}</h5>
                    </div>
                  </div>
                );
              })}
          </div> 
           
            
          
          </div>
          </Container>
        
    </>
  )
}

export default MyOrder
{/* <div className="row">
<div className="col-3">
    <h5> Orderid</h5>
</div>
<div className="col-3">
    <h5> Total Amount</h5>
</div>
<div className="col-3">
    <h5> status</h5>
</div>
            </div> */}
              {/* <div className="col-12 mt-3">
        {
          orderState && orderState?.map((item,index)=>{
            return(
              <div key ={index} className="row">
              <div className="col-3">
                  <p> {item?._id}</p>
              </div>
              <div className="col-3">
                  <p>{item?.totalPrice}</p>
              </div>
              <div className="col-3">
                  <p>{item?.orderStatus}</p>
              </div>
                          
                       
                        <div className="col-12">
                          <div className="row bg-secondary p-3">
              <div className="col-3">
                  <p> Orderid</p>
              </div>
              <div className="col-3">
                  <p> Total Amount</p>
              </div>
              <div className="col-3">
                  <p> status</p>
              </div>
                          </div>
                        
                        </div>
                        </div>
            )
          })
        }
          </div> */}