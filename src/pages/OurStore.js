import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state)=>state?.product?.product)
  const dispatch = useDispatch();
  useEffect(()=>{
    getAllProducts()
  },[])

  const getProducts=()=>{
    dispatch(getAllProducts)
  }

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="subtitle">Availablity</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    In stock(1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Out of Stock(0)
                  </label>
                </div>
                <h5 className="subtitle">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="from"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="to"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      HeadPhone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptops
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watches
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex ">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                  <div className="random-products d-flex ">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" 
                  defaultValue= {"manual"} className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">
                      Best Selling
                    </option>
                    <option value="title-ascending">Alphabetically A-Z</option>
                    <option value="price-ascending">price low to high</option>
                    <option value="price-descending">price high to low</option>
                    <option value="created-ascending">Date old to New</option>
                    <option value="created-descending">date New to Old</option>
                  </select>
                </div>

                <div className="d-flex gap-10 align-items-center ">
                  <p className="totalproducts">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      src="images/gr4.svg"
                      onClick={() => {
                        setGrid(3);
                      }}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      src="images/gr3.svg"
                      onClick={() => {
                        setGrid(4);
                      }}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      src="images/gr3.svg"
                      onClick={() => {
                        setGrid(6);
                      }}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      src="images/gr.svg"
                      onClick={() => {
                        setGrid(12);
                      }}
                      className="d-block img-fluid"
                      alt="grid"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data={productState ? productState:[]} 
                grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
