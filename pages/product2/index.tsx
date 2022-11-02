import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../layout/navbar";
import { apiURL2 } from "../../config";
import Heart from "../../assets/heart.png";
import Heart2 from "../../assets/heart2.png";
import BookCard3 from "../../components/bookCard3";
interface ProductProps {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  stock: number;
  thumbnail: string;
  title: string;
  isFavourite: boolean;
}
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = apiURL2;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
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
            <BookCard3
              key={product.id}
              id={product.id}
              name={product.title}
              image={product.thumbnail}
              price={product.price}
              description={product.description}
              likes={product.stock}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
