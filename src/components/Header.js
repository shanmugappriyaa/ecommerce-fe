import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { auth_reset } from "../features/user/userSlice";
import { product_reset } from "../features/products/productSlice";
import { brand_reset } from "../features/brand/brandSlice";
import { contact_reset } from "../features/contacts/contactSlice";
function Header() {
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);
  const handleLogout = () => {
    localStorage.clear();
    dispatch(auth_reset());

    window.location.reload();
  };

  return (
    <>
      <header className="header-top-strip py-3 px-4">
        {/* <div className="container-xxl"></div> */}
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">Free shipping over $100</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Hot-line :{" "}
              <a className="text-white" href="tel:+91 9999999999">
                +91 999999999
              </a>
            </p>
          </div>
        </div>
      </header>
      <header className="header-upper py-3 px-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">
                  <span className="shan-txt">Shan</span>Mart
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product here.."
                  aria-label="Search Product here.."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src={whishlistImage} alt="wishlist" /> */}
                    <AiOutlineHeart className="header-icon" />
                    <p className="mb-0">
                      Favourites <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <BiUserCircle className="header-icon" />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome <br /> {authState?.user?.firstname}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <BsCart4 className="header-icon" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">$ {total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {authState?.user && (
        <header className="header-bottom py-3 px-4">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center justify-content-between gap-30">
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Premium Brands
                  </button>

                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-15">
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending_nav"
                            : isActive
                            ? "active_nav"
                            : ""
                        }
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/product"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending_nav"
                            : isActive
                            ? "active_nav"
                            : ""
                        }
                      >
                        Our Store
                      </NavLink>
                      <NavLink
                        to="/myorders"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending_nav"
                            : isActive
                            ? "active_nav"
                            : ""
                        }
                      >
                        MY-ORDERS
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending_nav"
                            : isActive
                            ? "active_nav"
                            : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleLogout}
                      className="btn btn-primary text-white"
                    >
                      {" "}
                      LOGOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
// /"border border-0 bg-transparent text-white"
