import React, { useEffect, useState } from "react";
import Navbar from "../../layout/navbar";
import { apiURL, corsURL, productAllEP } from "../../config";
import BookCard from "../../components/bookCard";
import { NextPage } from "next";
let token =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zbWFuLmNvc2t1bjk1QGdtYWlsLmNvbSIsImlhdCI6MTY2NzIyNzE0MCwiZXhwIjoxNjkzMTQ3MTQwfQ.nA4V_-llKOMv7ncxVKNpNOHblLsNoZw1Lhf201BbtiM";
interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  likes: number;
}
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = corsURL + apiURL + productAllEP;
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
        setProducts(result.products);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="h-screen w-screen">
      <Navbar></Navbar>

      <div className="flex flex-wrap gap-5 p-5 border w-screen h-screen">
        {products.map((product: ProductProps) => {
          return (
            <BookCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              likes={product.likes}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
