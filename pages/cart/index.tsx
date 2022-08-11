import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Header from "../components/header/_header";
import Item from "../components/item/_item";
import ItemCart from "../components/item/_itemCart";

export default function Cart(): ReactElement {
  const router = useRouter();
  const [isItems, setItems] = useState<any | any>();
  const [isTotal, setTotal] = useState<Number | Number>();
  const [isOpen, setOpen] = useState<boolean | boolean>();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(items);
    let total = 0;
    for (let x = 0; x < items.length; x++) {
      total += items[x].valor * items[x].qtd;
    }
    setTotal(total);
  }, []);

  return (
    <>
      <Header />
      <div className="pt-[5rem] space-y-6">
        <h1 className="text-center text-2xl font-bold text-pink-500 mb-5">
          Carrinho
        </h1>
        <div>
          {isItems &&
            isItems.map((e: any, key: any) => {
              return (
                <ItemCart
                  key={key}
                  id={e.id}
                  image={e.image}
                  nome={e.nome}
                  qtd={e.qtd}
                  slug={e.slug}
                  valor={e.valor}
                />
              );
            })}
        </div>
        <h1 className="text-center text-2xl font-bold mb-5 text-blue-400">
          Valor da compra: <span className="text-black">{`R$${isTotal}`}</span>
        </h1>
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              router.push("/");
            }}
            type="button"
            className="w-[80%] inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Continuar comprando
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="w-[80%] inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Finalizar compra
          </button>
        </div>
        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div></div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Confirma a compra?
                        </h3>
                        <div className="mt-2">
                          <p className="text-gray-500">
                            O Valor é de{" "}
                            <span className="font-bold">{`R$${isTotal}`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => setOpen(!isOpen)}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Confirmar
                    </button>
                    <button
                      onClick={() => setOpen(!isOpen)}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
