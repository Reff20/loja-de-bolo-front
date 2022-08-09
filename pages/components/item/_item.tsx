import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { data } from "../../utils/data";

interface ItemProps {
  id: Number;
  nome: String;
  valor: any;
  image: any;
  slug: String;
  cart?: boolean;
}

function Item({ id, nome, valor, image, slug, cart }: ItemProps): ReactElement {
  const [isQtd, setQtd] = useState<number | number>(1);
  const [isOpen, setOpen] = useState<boolean | boolean>(false);
  const [isConfirm, setConfirm] = useState<boolean | boolean>(false);
  const [isProduct, setProduct] = useState<any | any>();

  const product = data.products;

  useEffect(() => {
    setProduct(product);
  }, [product]);

  const incrementQtd = () => {
    setQtd(isQtd + 1);
  };

  const decrementQtd = () => {
    setQtd(isQtd - 1);
    if (isQtd <= 1) setOpen(true);
  };

  return (
    <div className="w-full h-16 border-b-[1px] border-black bg-blue-100 hover:bg-blue-200 active:bg-blue-200 flex flex-row mb-2">
      <Link href={`/produto/${slug}`} passHref>
        <div className="h-full w-12 bg-blue-300 flex items-center justify-center">
          <h1 className="text-2xl text-pink-500 font-bold">{id.toString()}</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-10">
        <Link href={`/produto/${slug}`} passHref>
          <div className="w-[64px] h-[64px] flex items-end">
            <img
              src={image}
              className="w-full h-[calc(100%-0.5px)] border-b-[0.5px] border-r-[1px] border-black"
            />
          </div>
        </Link>
        <Link href={`/produto/${slug}`} passHref>
          <div className="flex items-start flex-col justify-center">
            <h1 className="font-bold text-pink-500">{nome}</h1>
            <h1 className="text-gray-500">R${valor}</h1>
          </div>
        </Link>
        {/* {cart && (
          <div className="flex h-full space-x-16 items-center justify-around">
            <div className="flex h-full space-x-5 items-center">
              <div
                className="bg-pink-400 active:bg-blue-300 rounded-full w-8 h-8 text-center"
                onClick={decrementQtd}
              >
                <button className="text-xl font-bold">-</button>
              </div>
              <p className="font-bold">{isQtd}</p>
              <div
                className="bg-pink-400 active:bg-blue-300 rounded-full w-8 h-8 text-center"
                onClick={incrementQtd}
              >
                <button className="text-xl font-bold">+</button>
              </div>
            </div>
            <button className="bg-red-500 active:bg-red-400 w-12 h-12 font-bold text-center flex items-center justify-center">
              <BiTrash className="text-2xl text-white" />
            </button>
          </div>
        )} */}
      </div>
      {isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Deletar item
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Você tem certeza que gostaria de deletar esse item do
                          seu carrinho?.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Excluir
                  </button>
                  <button
                    onClick={() => {
                      setOpen(!isOpen);
                      let storage = JSON.parse(
                        localStorage.getItem("cart") || "[]"
                      );
                      for (let x = 0; x < storage.length; x++) {
                        console.log(storage[x]);
                      }
                    }}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Manter o item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
