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
}

function Item({ id, nome, valor, image, slug }: ItemProps): ReactElement {
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
      </div>
    </div>
  );
}

export default Item;
