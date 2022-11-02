import Navbar from "../../layout/navbar";
import { useRouter } from "next/router";
import BookCard2 from "../../components/bookCard2";
import React, { useEffect, useState } from "react";
import { apiURL2 } from "../../config";

const Product = () => {
  const router = useRouter();
  const { productid2 } = router.query;
  const [product, setProduct] = useState({
    id: "{product.id}",
    title: "{product.title}",
    price: 0,
    images: ["a", "b"],
    category: "{product.category}",
    thumbnail: "{product.thumbnail}",
    description: "{product.description}",
  });

  useEffect(() => {
    const url = apiURL2 + "/" + productid2;
    fetch(url, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <div className="h-screen w-screen ">
      <Navbar></Navbar>
      <div className="container mx-auto px-20 max-w-screen-lg">
        <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">
          <BookCard2
            key={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
            category={product.category}
            thumbnail={product.thumbnail}
            description={product.description}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
