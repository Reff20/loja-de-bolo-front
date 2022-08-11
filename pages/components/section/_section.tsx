import { Component, ReactElement } from "react";
import Item from "../item/_item";
import {data} from "../../utils/data"

interface SectionProps {
    title: String,
    // Items?: ReactElement
}

function Section({title}:SectionProps): ReactElement {
    return(
        <div>
            <h1 className="mx-5 text-2xl font-bold text-pink-500 text-center border-b-2 border-pink-300 leading-[0.1rem] mb-10"><span className="bg-white px-7">{title}</span></h1>
            {
                data.products.map((e, key)=>{
                    if(e.tag.toLowerCase().includes(title.toLowerCase())){
                        return(
                            <Item key={key} id={e.id} nome={e.nome} valor={e.valor} image={e.image} slug={e.slug} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Section