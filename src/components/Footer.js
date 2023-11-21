import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

import { BsSendArrowUp } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsSendArrowUp className="new-sletter-icon" />
                <h2 className="mb-0 text-white">Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 277, Near Vill chopal,
                  <br /> sonipat,Haryana <br />
                  Pincode:131103
                </address>
                <a
                  href="tel:+91 9998887776"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 9998887776
                </a>
                <a
                  href="mailto:pshanmu.priya@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  pshanmu.priya@gmail.com
                </a>

                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" className="text-white">
                    <BsLinkedin className=" fs-3" />
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub className="fs-3" />
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram className="fs-3" />
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube className="fs-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">privacy policy</Link>
                <Link className="text-white py-2 mb-1">Refund policy</Link>
                <Link className="text-white py-2 mb-1">shipping policy</Link>
                <Link className="text-white py-2 mb-1">Terms&conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">HaedPhones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; 2023;Powered by Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
