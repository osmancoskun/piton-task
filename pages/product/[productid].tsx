import Navbar from "../../layout/navbar";
import React, { useEffect, useState } from "react";
import { corsURL, apiURL, productByIDEP } from "../../config";
let token =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zbWFuLmNvc2t1bjk1QGdtYWlsLmNvbSIsImlhdCI6MTY2NzIyNzE0MCwiZXhwIjoxNjkzMTQ3MTQwfQ.nA4V_-llKOMv7ncxVKNpNOHblLsNoZw1Lhf201BbtiM";

interface Props {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  likes?: number;
}
const Product = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    let url = corsURL + apiURL + productByIDEP;
    var myHeaders = new Headers();
    myHeaders.append("access-token", token);
    fetch(url, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result.product);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="h-screen w-screen ">
      <Navbar></Navbar>
      <div className="container mx-auto px-20">
        <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">
          <div className="flex flex-wrap items-center">
            <div className="flex w-full h-48 md:h-64 lg:h-72 relative">
              <div className="w-8/12 pr-4 relative">
                <img
                  src={products.image}
                  className="w-full h-full rounded-lg bg-white"
                />
              </div>
            </div>

            <div className="w-full pt-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-xl">{products.title}</h2>
                  <div className="flex items-center">
                    <div className="bg-green-200 py-1 px-3 mt-2 rounded-full inline-block text-black">
                      {products.price}$
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap text-center pt-4 mb-2">
                  <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
                    {products.category}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-50">
                  {products.description}
                </p>
              </div>

              <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                <button className="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
