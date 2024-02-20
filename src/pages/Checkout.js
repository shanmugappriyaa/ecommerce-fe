import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { base_url, getConfig } from "../utils/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { createAnOrder, deleteUserCart } from "../features/user/userSlice";
import { toast } from "react-toastify";

const shippingSchema = Yup.object({
  firstname: Yup.string().required("FirstName is Required"),
  lastname: Yup.string().required("LastName is Required"),
  address: Yup.string().required(" Addressis Required"),
  email: Yup.string(),

  pincode: Yup.number().required("pincode is required"),
  phone: Yup.number().required("phone No is required"),
});

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  const userState = useSelector((state) => state.auth.user);
  const orderdProductState = useSelector(
    (state) => state?.auth?.orderedProduct
  );
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [CartProductState, setCartProductState] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity * cartState[index].price);
      setTotalAmount(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        price: cartState[index].price,
      });
    }
    setCartProductState(items);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      pincode: "",
      phone: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      console.log("shipping form values------------>", CartProductState);
      // setShippingInfo(values);
      dispatch(
        createAnOrder({
          totalPrice: totalAmount,
          orderItems: CartProductState,
          paymentInfo,
          shippingInfo: { values },
        })
      );
      // navigate("/my-profile");
    },
  });

  useEffect(() => {
    if (orderdProductState?.order?._id) {
      setTimeout(() => {
        checkoutHandler(orderdProductState?.order);
      }, 300);
    }
  }, [orderdProductState]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkoutHandler = async (orderInfo) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK fail to load");
      return;
    }
    const result = await axios.post(
      base_url + "user/order/checkout",
      { amount: orderInfo.totalPrice, orderId: orderInfo._id },
      getConfig()
    );
    console.log("result================>", result.data.order);
    if (!result) {
      alert("Something Went wrong after payment");
      return;
    }
    const { amount, currency } = result.data.order;
    const order_id = result.data.order.id;

    console.log("inside------------> amount", amount, order_id);
    console.log("currency------------> currency", currency);

    const options = {
      key: "rzp_test_wFCbHhLefrZ450", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Shanmart.",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        console.log("inside------------> data", data);

        const result = await axios.post(
          base_url + "user/order/paymentVerification",
          data,
          getConfig()
        );

        console.log("inside------------> result", result);
        setPaymentInfo({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        });
        toast.success("Order Created Successfully");
        dispatch(deleteUserCart());
        navigate("/myorders");
      },
      prefill: {
        name: "ShanMart",
        email: "shanmrt@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "ShanMart Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 p-5">
        <form onSubmit={formik.handleSubmit}>
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
                <p className="user-details">
                  {userState?.firstname}({userState?.email})
                </p>
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <div className="card mb-4">
                      <div className="card-header py-3">
                        <h4 className="mb-3">Shipping Address</h4>
                      </div>
                      <div className="card-body">
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
                            type="text"
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
                            value={userState?.email}
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
                            type="text"
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
                          <Link to="/home" className="button">
                            Continue to sh0pping
                          </Link>
                        </div>
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
                      <div
                        key={index}
                        className="d-flex  gap-10 mb-2 align-items-center"
                      >
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
              <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                <button
                  className="button border-0 prime-btn"
                  disabled={!(formik.dirty && formik.isValid)}
                  type="submit"
                >
                  Place-Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Checkout;
