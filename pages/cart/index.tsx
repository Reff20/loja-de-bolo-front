import { NextPage } from "next";
import React, { ReactElement, useEffect, useState } from "react";
import Header from "../components/header/_header";
import Item from "../components/item/_item";

export default function Cart(): ReactElement {
    const [isItems, setItems] = useState<any | any>()
    
    useEffect(()=>{
        let items = JSON.parse(localStorage.getItem("cart") || "[]")
        setItems(items)
    },[])
    
  return (
    <>
      <Header />
      <div className="pt-[5rem]">
        <h1 className="text-center text-2xl font-bold text-pink-500">
          Carrinho
        </h1>
        <div>
            {isItems && isItems.map((e:any)=>{
                return(
                    <Item id={e.id} image={e.image} nome={e.nome} slug={e.slug} valor={e.valor} cart />
                )
            })}
          {/* <Item
            id={data.products[0].id}
            image={data.products[0].image}
            nome={data.products[0].nome}
            slug={data.products[0].slug}
            valor={data.products[0].valor}
            cart
          /> */}
        </div>
      </div>
    </>
  );
}
