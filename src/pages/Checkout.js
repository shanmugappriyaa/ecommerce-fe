import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity * cartState[index].price);
      setTotalAmount(sum);
    }
  }, [cartState]);
  const shippingSchema = Yup.object({
    firstname: Yup.string().required("FirstName is Required"),
    lastname: Yup.string().required("LastName is Required"),
    address: Yup.string().required("Name is Required"),
    email: Yup.string()
      .required("Email should not be empty")
      .email("Invalid email"),
    pincode: Yup.number().required("pincode is required"),
    phone: Yup.number().required("phone No is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      pincode: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(values);
      // setTimeout(() => {
      //   if (authState.isSuccess) {
      //     navigate("/");
      //   }
      // }, 300);
    },
    validationSchema: shippingSchema,
  });

  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 p-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name"> Shanmart</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item total-price">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp;/
                  <li className="breadcrumb-item total-price">
                    <a href="#">Information</a>
                  </li>
                  &nbsp;/
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">Raja Murugan(raju@gmail.com)</p>
              <div className="row">
                <div className="col-md-8 mb-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h4 className="mb-3">Shipping Address</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={formik.handleSubmit}>
                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <label className="form-label" for="form7Example1">
                                First name
                              </label>
                              <input
                                type="text"
                                id="form7Example1"
                                name="firstname"
                                className="form-control"
                                value={formik.values.firstname}
                                onChange={formik.handleChange("firstname")}
                                onBlur={formik.handleBlur("firstname")}
                              />
                              <div className="error">
                                {formik.touched.firstname &&
                                  formik.errors.firstname}
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-outline">
                              <label className="form-label" for="form7Example2">
                                Last name
                              </label>
                              <input
                                type="text"
                                id="form7Example2"
                                className="form-control"
                                value={formik.values.lastname}
                                onChange={formik.handleChange("lastname")}
                                onBlur={formik.handleBlur("lastname")}
                              />
                              <div className="error">
                                {formik.touched.lastname &&
                                  formik.errors.lastname}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form7Example4">
                            Address
                          </label>
                          <input
                            type="text"
                            id="form7Example4"
                            className="form-control"
                            value={formik.values.address}
                            onChange={formik.handleChange("address")}
                            onBlur={formik.handleBlur("address")}
                          />
                          <div className="error">
                            {formik.touched.address && formik.errors.address}
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form7Example3">
                            pincode
                          </label>
                          <input
                            type="number"
                            id="form7Example3"
                            className="form-control"
                            value={formik.values.pincode}
                            onChange={formik.handleChange("pincode")}
                            onBlur={formik.handleBlur("pincode")}
                          />
                          <div className="error">
                            {formik.touched.pincode && formik.errors.pincode}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form7Example5">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form7Example5"
                            className="form-control"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                          />
                          <div className="error">
                            {formik.touched.email && formik.errors.email}
                          </div>
                        </div>

                        {/* <!-- Number input --> */}
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form7Example6">
                            Phone
                          </label>
                          <input
                            type="number"
                            id="form7Example6"
                            className="form-control"
                            value={formik.values.phone}
                            onChange={formik.handleChange("phone")}
                            onBlur={formik.handleBlur("phone")}
                          />
                          <div className="error">
                            {formik.touched.phone && formik.errors.phone}
                          </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="/cart" className="text-dark">
                            <BiArrowBack className="mt-2" />
                            Return to Cart
                          </Link>
                          <Link to="/cart" className="button">
                            Continue to shipping
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div className="d-flex  gap-10 mb-2 align-items-center">
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            width={100}
                            height={100}
                            src={item?.productId?.images[0].url}
                            alt=""
                          />
                        </div>
                        <h5 className="total-price">
                          {item?.productId?.title}
                        </h5>
                        <div></div>
                        <div className="flex-grow-1">
                          <h5 className="total">
                            ${item?.price * item?.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">
                    $ {totalAmount ? totalAmount : "0"}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 10</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">
                  $ {totalAmount ? totalAmount + 10 : "0"}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
