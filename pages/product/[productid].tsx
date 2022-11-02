import Navbar from "../../layout/navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { corsURL, apiURL2, productByIDEP } from "../../config";
import axios from "axios";
//let token =
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zbWFuLmNvc2t1bjk1QGdtYWlsLmNvbSIsImlhdCI6MTY2NzM3NTc0NCwiZXhwIjoxNjkzMjk1NzQ0fQ.sA90SMWWyx99FfAw7Z_pV-HjElupfW1EbYY7fO5BIoU");

interface Props {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  likes?: number;
}
const Product = () => {
  const router = useRouter();
  const { productid } = router.query;
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = apiURL2 + "/" + productid;
    //var myHeaders = new Headers();
    // myHeaders.append("access-token", token);
    fetch(url, {
      method: "GET",
      //    headers: myHeaders,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProduct(result.product);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="h-screen w-screen ">
      <Navbar></Navbar>
    </div>
  );
};

export default Product;
