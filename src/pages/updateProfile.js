import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const profileSchema = Yup.object({
  firstname: Yup.string().required("first Name is required "),
  lastname: Yup.string().required("last Name is required "),
  mobile: Yup.string().required("mobile no is required "),
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
});

function UpdateProfile() {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  //   const navigate = useNavigate();
  const userState = useSelector((state) => state.auth.user);
  // const userCartState = useSelector((state) => state?.auth?.cartProduct);
  const userOrderState = useSelector(
    (state) => state?.auth?.orders?.userOrders
  );

  console.log("userOrderState====>", userOrderState);

  //   const[edit,setEdit]= useState[true]
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState?.firstname,
      lastname: userState?.lastname,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    onSubmit: (values) => {
      dispatch(values);
      //   dispatch(UpdateProfile({data:values,config2:config2}));
      //   setEdit(true)
    },
    validationSchema: profileSchema,
  });
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  //     if (
  //       (authState.user !== null && authState.isError === false) ||
  //       authState.createUser
  //     ) {
  //       navigate("/login");
  //     }
  //   }, [authState]);
  return (
    <>
      <Meta title={"UpdateProfile"} />
      <BreadCrumb title="MyProfile" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
     
          <div className="col-8">
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
          <div className="col-4">
            <div className="auth-card">
              <h3 className="text-center mb-3">UpdateProfile</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <input
                    type="text"
                    name="firstname"
                    placeholder=" First Name"
                    className="form-control"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={userState?.email}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="email"
                    placeholder="Mobile Number"
                    className="form-control"
                    value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button prime-btn border-0">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        
        
      </Container>
    
    </>
  );
}

export default UpdateProfile;
