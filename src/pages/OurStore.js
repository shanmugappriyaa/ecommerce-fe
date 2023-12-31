import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid31 } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const [brands, setBrands] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [tags, setTags] = useState([]);
  //filer
  const [catagory, setCatagory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minprice, setMinPrice] = useState(null);
  const [maxprice, setMaxPrice] = useState(null);

  const productState = useSelector((state) => state?.product?.product);
  const { product } = productState;
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [tag, brand, catagory, minprice, maxprice]);
  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newtags = [];
    for (let i = 0; i < product?.length; i++) {
      const element = product?.[i];
      newBrands.push(element.brand);
      category.push(element.category);
      newtags.push(element.tags);
    }
    const uniqueCategory = category.filter((obj, index) => {
      return index === category.findIndex((o) => obj._id === o._id);
    });
    const uniqueBrand = newBrands.filter((obj, index) => {
      return index === newBrands.findIndex((o) => obj._id === o._id);
    });
    setBrands(uniqueBrand);
    setCatagories(uniqueCategory);
    setTags(newtags);
  }, [productState]);
  const getProducts = () => {
    dispatch(getAllProducts({ tag, brand, catagory, minprice, maxprice }));
  };

  console.log("catagories-------------->", catagories);
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
                  {catagories &&
                    catagories.map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCatagory(item._id)}>
                          {" "}
                          {item.title}
                        </li>
                      );
                    })}
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
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="to"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Brands</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {brands &&
                      brands.map((item, index) => {
                        return (
                          <span
                            onClick={() => setBrand(item._id)}
                            key={index}
                            className="badge bg-light text-secondary rounded-3 py-2 px-3"
                          >
                            {item.title}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            onClick={() => setTag(item)}
                            key={index}
                            className="badge bg-light text-secondary rounded-3 py-2 px-3"
                          >
                            {item}
                          </span>
                        );
                      })}
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
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="title-ascending">Alphabetically A-Z</option>
                    <option value="price-ascending">price low to high</option>
                    <option value="price-descending">price high to low</option>
                    <option value="created-ascending">Date old to New</option>
                    <option value="created-descending">date New to Old</option>
                  </select>
                </div>

                <div className="d-flex gap-10 align-items-center ">
                  <label className="totalproducts">
                    {product ? product.length : 0} Products
                  </label>
                  <div className="d-flex gap-10 align-items-center grid">
                    <div className="grid-div">
                      <CiGrid41
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                    </div>
                    <div className="grid-div">
                      <CiGrid31
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                    </div>
                    <div className="grid-div">
                      <CiGrid2V
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                    </div>
                    <div className="grid-div">
                      <MdCheckBoxOutlineBlank
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              
              <div className="d-flex gap-10 flex-wrap">

                <ProductCard data={product ? product : []} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
