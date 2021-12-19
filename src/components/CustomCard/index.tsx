import React from 'react';
import "./index.css";
const index= ({text, titre, children}:CardProps) => {
    
    return (
        <div className="customCard">
            <h1>{titre}</h1>
            <div></div>
            <p>{text}</p>
            {children}
        </div>
    )
}

export default index;
