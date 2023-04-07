import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Rating from "react-rating";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

function Products() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const array = [];

  // console.log(type);

  // const [size, setSize] = useState("");
  // const [toppings, setToppings] = useState("");
  //   const [id, setId] = useState("");
  //   const [id, setId] = useState("");
  //   const [id, setId] = useState("");
  // console.log(size, toppings);

  const API = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

  useEffect(() => {
    async function getData() {
      await axios.get(API).then(function (response) {
        setProducts(response.data);
      });
    }
    getData();
  }, [0]);

  const handleSortA = () => {
    const result = [...products];
    const data = result.sort(function (a, b) {
      return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
    });
    setProducts(data);
  };

  const handleSortB = () => {
    const result = [...products];
    const data = result.sort(function (a, b) {
      return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
    });
    setProducts(data);
  };

  const handleSortC = () => {
    const result = [...products];
    const data = result.sort(function (a, b) {
      return a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0;
    });
    setProducts(data);
  };

  const handleSortD = () => {
    const result = [...products];
    const data = result.sort(function (a, b) {
      return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
    });
    setProducts(data);
  };
  return (
    <div className="w-full z-0">
      <div className="px-10 md:px-24 md:py-20 py-16 grid gap-10">
        <div className="md:flex grid justify-between gap-5">
          <h1 className="text-3xl font-bold text-black">Our Best</h1>
          {/* DropDown  */}

          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn m-1 bg-white border-red-400 text-black hover:bg-[#f9dddd]"
            >
              Sort Items
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow text-black bg-white rounded-box w-52"
            >
              <li>
                <a onClick={handleSortA}>Price ( Low - High )</a>
              </li>
              <li>
                <a onClick={handleSortB}>Price ( High - Low )</a>
              </li>
              <li>
                <a onClick={handleSortC}>Rating ( Low - High )</a>
              </li>
              <li>
                <a onClick={handleSortD}>Rating ( High - Low )</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 z-0">
          {products.map((product, index) => {
            return (
              <div
                className="p-5 rounded-2xl sm:w-[450px] md:w-[250px] lg:w-[300px] w-full bg-red-500"
                key={index}
              >
                <div className="relative w-full h-max">
                  <img
                    src={product.img_url}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl z-0"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-[24px] font-semibold mb-1 text-slate-700">
                    {product.name}
                  </h3>
                  <p className="text-black text-[14px] tracking-wider">
                    {product.description}
                  </p>
                  {product.isVeg ? (
                    <span className="text-md tracking-wide text-black">
                      Veg
                    </span>
                  ) : (
                    <span className="text-md tracking-wide text-black">
                      Non-Veg
                    </span>
                  )}
                  <h1 className="text-black">₹ {product.price}</h1>
                </div>

                <div className="flex pt-5 justify-between items-center">
                  <Rating
                    emptySymbol={
                      <AiFillStar className="w-5 h-5" color="white" />
                    }
                    placeholderSymbol={
                      <AiFillStar className="w-5 h-5" color="yellow" />
                    }
                    placeholderRating={product.rating}
                    readonly
                  />
                  <button className="">
                    <FiPlus
                      className="w-6 h-6 cursor-pointer text-black"
                      onClick={() => {
                        setShow(!show);
                        setId(product.id);
                      }}
                    />
                  </button>
                </div>
                <div className="pt-5">
                  <button className="text-black bg-white border border-red-400 p-2 hover:bg-[#eca6a6] rounded-lg transition delay-200 duration-200 ease-in-out hover:scale-110">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* pop up component */}
      {show ? (
        <div className="inset-0 fixed bg-black opacity-80 z-30 text-white justify-center items-center flex w-full px-4 md:px-0">
          <div className="md:max-w-xl max-w-full">
            <div className="bg-red-600 text-black p-3 rounded-2xl grid gap-5 w-full">
              <div className="justify-end">
                <AiOutlineClose
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              </div>
              <div>
                <h1 className="text-xl"> Choose Size</h1>
                {!products[id].size.isRadio ? (
                  <div className="flex gap-3">
                    {products[id].size[0].items.map((item, index) => {
                      return (
                        <span
                          className="text-black font-bold cursor-pointer"
                          key={index}
                          onClick={() => setToppings(item.size)}
                        >
                          {item.size}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* <div>
                <h1 className="text-xl">Toppings</h1>
                {
                    products[id].toppings[0].isRadio ? 

                    <div className="flex gap-3">
                        {
                            products[id].toppings[0].items.map(() => {

                                return(

                                    <span></span>
                                )
                            })
                        }
                    </div>
                    :
                    <div></div>
                }
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Products;
