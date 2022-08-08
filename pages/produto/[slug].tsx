import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Header from "../components/header/_header";
import { data } from "../utils/data";

export default function ProductScreen(): ReactElement {
  const [isQtd, setQtd] = useState(1);
  const [isProduct, setProduct] = useState<any | any>();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((e) => e.slug === slug);

  useEffect(() => {
    setProduct(product);
  }, [product]);

  const incrementQtd = () => {
    setQtd(isQtd + 1);
  };

  const decrementQtd = () => {
    isQtd > 1 && setQtd(isQtd - 1);
  };

  const addCart = () => {
    if (!localStorage.getItem("cart")) {
      let obj = [
        {
          id: isProduct.id,
          slug: isProduct.slug,
          qtd: isQtd,
        },
      ];
      localStorage.setItem("cart", JSON.stringify(obj));
    } else {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      let newCart = cart.filter((e: any) => e.slug !== isProduct.slug);
      localStorage.clear();
      newCart.push({
        id: isProduct.id,
        slug: isProduct.slug,
        qtd: isQtd,
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="pt-[4rem]">Produto não encontrado...</div>
      </>
    );
  }
  return (
    <div>
      <Header />
      <div className="pt-[6rem]">
        <div className="border-b-2 mx-12 ">
          <h1 className="font-bold text-3xl text-center text-pink-500">
            {product.nome}
          </h1>
          <p className="m-4 mx-6 text-justify">{product.desc}</p>
        </div>
        <div className="border-b-2 pb-6 mx-12 flex flex-col space-y-6">
          <div className="flex justify-center mt-5">
            <img
              className="w-[30rem] h-[30rem]"
              src={product.image}
              alt="bolo"
            />
          </div>
          <div className="space-y-6">
            <div className="flex space-x-4 items-center justify-center">
              <div
                className="bg-blue-200 active:bg-blue-300 rounded-full w-8 h-8 text-center"
                onClick={decrementQtd}
              >
                <button className="text-xl font-bold">-</button>
              </div>
              <p className="font-bold">{isQtd}</p>
              <div
                className="bg-blue-200 active:bg-blue-300 rounded-full w-8 h-8 text-center"
                onClick={incrementQtd}
              >
                <button className="text-xl font-bold">+</button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={addCart}
                className="bg-red-200 active:bg-red-300 w-36 h-12 font-bold"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
