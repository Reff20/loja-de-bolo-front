import { Component, ReactElement } from "react";

interface SectionProps {
    title: String,
    // Items?: ReactElement
}

function Section({title}:SectionProps): ReactElement {
    return(
        <div>
            <h1 className="mx-5 text-2xl font-bold text-pink-500 text-center border-b-2 border-pink-300 leading-[0.1rem]"><span className="bg-white p-7">{title}</span></h1>
        </div>
    )
}

export default Section