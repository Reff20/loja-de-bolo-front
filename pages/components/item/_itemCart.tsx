import Link from "next/link";
import Router from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { BiTrash, BiEditAlt } from "react-icons/bi";

interface ItemCartProps {
  id: Number;
  nome: String;
  valor: any;
  image: any;
  slug: String;
  qtd: any;
}

function ItemCart({
  id,
  nome,
  valor,
  image,
  slug,
  qtd,
}: ItemCartProps): ReactElement {
  const [isOpen, setOpen] = useState<boolean | boolean>(false);
  const [isEdit, setEdit] = useState<boolean | boolean>(false);
  const [isNewQtd, setNewQtd] = useState<any | any>(false);

  return (
    <>
      <div className="w-screen h-[6rem] mb-2 flex">
        <div
          onClick={() => setOpen(!isOpen)}
          className="bg-red-600 h-full p-2 w-[10%] flex items-center justify-center cursor-pointer"
        >
          <BiTrash className="text-xl text-white cursor-pointer " />
        </div>
        <div className="bg-blue-100 w-full h-full flex">
          <div className="w-[25%] h-full flex items-end">
            <img
              src={image}
              className="w-full h-full border-r-[1px] border-black"
            />
          </div>
          <div className="flex w-full justify-between px-7 py-3 items-center-">
            <div className="flex flex-col justify-between">
              <Link href={`/produto/${slug}`}>
                <h1 className="font-bold text-pink-500">{nome}</h1>
              </Link>
              <p className="text-gray-500">R${valor}</p>
              <h1 className="font-bold text-pink-500">
                Quantidade:{" "}
                <span className="text-gray-500 font-normal">{qtd}</span>
              </h1>
            </div>

            <div className="flex flex-col justify-around">
              <h1 className="font-bold text-pink-500">Total:</h1>
              <p className="font-bold">R${valor * qtd}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setEdit(!isEdit)}
          className="bg-blue-400 h-full p-2 w-[10%] flex items-center justify-center cursor-pointer"
        >
          <BiEditAlt className="text-xl text-white cursor-pointer " />
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
                            Você tem certeza que gostaria de deletar esse item
                            do seu carrinho?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => {
                        setOpen(!isOpen);
                        let store = JSON.parse(
                          localStorage.getItem("cart") || "[]"
                        );
                        console.log(store);
                        let newStore = store.filter(
                          (e: any) => e.slug !== slug
                        );
                        console.log(newStore);
                        localStorage.clear();
                        localStorage.setItem("cart", JSON.stringify(newStore));
                        window.location.reload();
                      }}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Excluir
                    </button>
                    <button
                      onClick={() => {
                        setOpen(!isOpen);
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
        {isEdit && (
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div></div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Editar item
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Favor editar a quantidade do item.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => {
                        setEdit(!isEdit);
                        if (isNewQtd) {
                          let store = JSON.parse(
                            localStorage.getItem("cart") || "[]"
                          );
                          let newStore = store.filter(
                            (e: any) => e.slug !== slug
                          );
                          newStore.push({
                            id: id,
                            slug: slug,
                            qtd: isNewQtd,
                            nome: nome,
                            valor: valor,
                            image: image,
                          });
                          localStorage.clear();
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(newStore)
                          );
                          window.location.reload();
                        }
                      }}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-400 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Editar
                    </button>
                    <input
                      type={"number"}
                      onChange={(e) => {
                        if(e.target.value !== "0"){
                          setNewQtd(e.target.value);
                        }else{
                          setOpen(!isOpen)
                        }
                      }}
                      className=" text-center mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-100 text-base font-medium text-black outline-none focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    />
                    <button
                      onClick={() => {
                        setEdit(!isEdit);
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
    </>
  );
}

export default ItemCart;
