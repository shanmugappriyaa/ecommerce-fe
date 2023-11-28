import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const contactSchema = Yup.object({
  fname: Yup.string().required("Name is required "),
  mobile: Yup.string().required("mobile no is required "),
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
  comment: Yup.string()
    .required("comments should not be empty")
 });

function Contact() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      mobile: "",
      comment: "",
    },
    onSubmit: (values,{resetForm}) => {
      toast.success("Query Submitted Successfully");
      resetForm();
    },
    validationSchema: contactSchema,
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="Name"
                      value={formik.values.fname}
                      onChange={formik.handleChange("fname")}
                      onBlur={formik.handleBlur("fname")}
                    />
                    <div className="error">
                      {formik.touched.fname && formik.errors.fname}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email" name="email"
                      className="form-control"
                      placeholder="email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tell"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="comment"
                      id=""
                      className="W-100"
                      cols="30"
                      rows="4"
                      placeholder="comments"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    ></textarea>
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button  className="button sec-btn signup ps-4">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>

                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    {" "}
                    <AiOutlineHome className="fs-5" />
                    <address className="mb-0">
                      Hno: 277, Near Vill chopal,sonipat,Haryana ,
                      Pincode:131103
                    </address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-5" />
                    <a href="tel:+91 9998887776">+91 9998887776</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail className="fs-5" />
                    <a href="mailto:pshanmu.priya@gmail.com">
                      pshanmu.priya@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiInfoCircle className="fs-5" />
                    <p className="mb-0">Monday - Friday 10AM -8PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
