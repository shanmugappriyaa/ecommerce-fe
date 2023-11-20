import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import { commonFile } from "../utils/Data";
function Wishlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist);
  };

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState && wishlistState.length === 0 && (
            <div className="text-center fs-3">No Data </div>
          )}
          {wishlistState &&
            wishlistState?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card">
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src=""
                      alt="cross"
                      className="position-absoulte cross img-fluid"
                    />
                    <div className="wishlist-card-image bg-white">
                      <img
                        src={
                          item?.images[0].url ? item?.images[0].url : commonFile
                        }
                        alt="watch"
                        className="img-fluid d-block mx-auto"
                        width={160}
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">$ {item?.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="col-3">
                <div className="wishlist-card">
                  <img src='images/cross.svg' alt='cross'
                  className='position-absoulte cross img-fluid'/>
                  <div className="wishlist-card-image">
                  <img src='images/watch.jpg' alt='watch'
                  className=' w-100 img-fluid'/>
                  </div>
                  <div className='py-3 px-3'>
                  <h5 className="title">
                    Apple Watch Series 9 Stainless SteelComes with GPS + Cellular
</h5>
                  <h6 className="price">$100</h6>
                  </div>
                 
                </div>
              </div>
              <div className="col-3">
                <div className="wishlist-card">
                  <img src='images/cross.svg' alt='cross'
                  className='position-absoulte cross img-fluid'/>
                  <div className="wishlist-card-image">
                  <img src='images/watch.jpg' alt='watch'
                  className=' w-100 img-fluid'/>
                  </div>
                  <div className='py-3 px-3'>
                  <h5 className="title">
                    Apple Watch Series 9 Stainless SteelComes with GPS + Cellular
</h5>
                  <h6 className="price">$100</h6>
                  </div>
                 
                </div>
              </div> */}
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
