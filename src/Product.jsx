import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Product = ({ prod }) => {
  // eslint-disable-next-line react/prop-types
  let { name, price, img, offerDate, limit, freeShipping, discount } = prod;
  // console.log(img);

  const [image, setImage] = useState(0);
  const [limitProd, setLimit] = useState(limit);
  const [discountProd, setDiscount] = useState(discount);
  const [free, setFree] = useState(freeShipping);

  let discountedPrice =
    discountProd > 0 && discountProd <= 100
      ? price - price * (discountProd / 100)
      : price;
  discountedPrice = discountedPrice.toFixed(2);
  return (
    <>
      <div className="bg-gray-200 pt-2 md:pt-8  pb-8 px-2 h-auto lg:h-screen ">
        <div className="bg-white card-prod rounded-xl flex p-10 flex-col gap-5 max-w-[22rem] mx-auto justify-center items-center md:max-w-[40rem]  md:flex-row md:justify-start md:items-start lg:max-w-[52rem] md:gap-15 lg:gap-20">
          <div className="flex flex-col justify-center items-center">
            <img src={img[image]} alt="" />
            <div className="flex gap-[14px] ">
              <span
                onClick={() => {
                  setImage(0);
                }}
                className="w-4 h-4 bg-[#D3B9A0] border hover:border-red-950 rounded-full inline-block cursor-pointer"
              ></span>
              <span
                onClick={() => {
                  setImage(1);
                }}
                className="w-4 h-4 bg-black border hover:border-red-950  rounded-full inline-block cursor-pointer "
              ></span>
              <span
                onClick={() => {
                  setImage(2);
                }}
                className="w-4 h-4 bg-[#D1E8E0] border hover:border-red-950 rounded-full inline-block cursor-pointer"
              ></span>
            </div>
          </div>
          <div className="text-center mt-2 md:mt-6  space-y-5 md:text-start">
            {limitProd < 1 ? (
              <h1 className="bg-red-700 rounded-full text-white text-xs px-4 py-2 max-w-[6.2rem] text-center mx-auto md:mx-0">
                Stock Out
              </h1>
            ) : free ? (
              <h1 className="bg-black rounded-full text-white text-xs px-4 py-2 max-w-[7.2rem] mx-auto md:mx-0">
                Free shipping
              </h1>
            ) : null}

            <h1 className="text-md  md:text-lg  lg:text-2xl">{name}</h1>
            <div>
              <h1 className="font-extrabold text-2xl   ">৳{discountedPrice}</h1>
              <del className="decoration-red-800 text-lg">৳{price}</del>
              <span className="bg-red-800 text-white ml-1 text-sm ">
                -{discountProd}%
              </span>
            </div>
            <p className="text-gray-500 text-xs ">
              The offer is valid until {offerDate} or as long as stock lasts!
            </p>

            <p className="text-sm ">{limitProd} pcs. in stock.</p>
            <button className="bg-orange-500 hover:bg-orange-600  text-center block w-full rounded-md text-sm text-white px-6 py-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[40rem] my-3 mx-auto flex flex-col md:flex-row">
        <label htmlFor="disc">Discount:</label>
        <input
          type="number"
          name="disc"
          max={100}
          min={0}
          value={discountProd}
          className="border border-2 border-gray-500"
          onChange={function (e) {
            if (e.target.value >= 0 && e.target.value <= 100)
              setDiscount(e.target.value);
          }}
        />
        <label htmlFor="limit">Total Products: </label>
        <input
          type="number"
          name="limit"
          max={1000}
          min={0}
          value={limitProd}
          className="border border-2 border-gray-500"
          onChange={function (e) {
            if (e.target.value >= 0 && e.target.value <= 1000)
              setLimit(e.target.value);
          }}
        />
        <div>
          <label htmlFor="freeShipping">Free Shipping: </label>
          <input
            type="checkbox"
            name="freeShipping"
            checked={free}
            onChange={() => {
              setFree((x) => !x);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
