import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import cart from "../images/cart.svg";
import whishlistImage from "../images/wishlist.svg";
import userImage from "../images/user.svg";
import menuImage from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [total, setTotal] = useState(null);
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth)
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal = sum;
    }
  }, [cartState]);
  return (
    <>
      <header className="header-top-strip py-3">
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
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">ShanMart</Link>
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
                    <img src={whishlistImage} alt="wishlist" />
                    <p className="mb-0">
                      Favourites <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={authState?.user===null ? "/login" :""}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={userImage} alt="user" />
                    {
                      authState?.user===null ? <p className="mb-0">
                      Log in <br /> My Account</p>
                      :  <p className="mb-0">
                      Welcome <br /> {authState?.user?.firstname}
  
                    </p>
                    }
                   
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
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
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menuImage} alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to=" ">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to=" ">
                          Something else here
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to=" ">
                          Action
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links"></div>
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our Store</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
