import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";

import { FiEdit } from "react-icons/fi";

const profileSchema = Yup.object({
  firstname: Yup.string().required("first Name is required "),
  lastname: Yup.string().required("last Name is required "),
  mobile: Yup.string().required("mobile no is required "),
  email: Yup.string()
    .required("Email should not be empty")
    .email("Invalid email"),
});

function UpdateProfile() {
  const userState = useSelector((state) => state.auth.user);

  const [edit, setEdit] = useState(true);
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
      // dispatch(values);config2:config2
      dispatch(updateUserProfile({ data: values }));
      setEdit(true);
    },
    validationSchema: profileSchema,
  });
  return (
    <>
      <Meta title={"UpdateProfile"} />
      <BreadCrumb title="MyProfile" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between  align-items-center">
              <h3 className="text-center mb-3 my-3">UpdateProfile</h3>

              <FiEdit className="fs-3" onClick={() => setEdit(false)} />
            </div>
            <div className="auth-card">
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder=" First Name"
                    className="form-control"
                    value={formik.values.firstname}
                    disabled={edit}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    value={formik.values.lastname}
                    disabled={edit}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={userState?.email}
                  />
                </div>
                <div>
                  <label for="exampleFormControlInput1" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="email"
                    placeholder="Mobile Number"
                    className="form-control"
                    value={formik.values.mobile}
                    disabled={edit}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    {edit === false && (
                      <button
                        type="submit"
                        className="btn btn-primary border-0"
                      >
                        Save
                      </button>
                    )}
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
