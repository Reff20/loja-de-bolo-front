import React, { ReactElement } from "react";
import Link from "next/link";

interface ItemProps {
  id: Number;
  nome: String;
  valor: String;
  image: any;
  slug: String;
}

function Item({ id, nome, valor, image, slug }: ItemProps): ReactElement {
  return (
    <Link href={`/produto/${slug}`} passHref>
      <div className="h-16 border-b-[1px] border-black bg-blue-100 hover:bg-blue-200 active:bg-blue-200 flex flex-row mb-2">
        <div className="h-full w-12 bg-blue-300 flex items-center justify-center">
          <h1 className="text-2xl text-pink-500 font-bold">{id.toString()}</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="w-[64px] h-[64px]">
            <img src={image} className="w-full h-full" />
          </div>
          <div className="flex items-start flex-col justify-center">
            <h1 className="font-bold text-pink-500">{nome}</h1>
            <h1 className="text-gray-500">{valor}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
