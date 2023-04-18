import React from "react";
// import css from './Section.module.css';
// import { ReactPropTypes } from "react";

const Section = ({title, children}) => {
    return (
        <section>
            <h2 className="Title">{title}</h2>
            {children}
        </section>
    )
}

export default Section;