import React from "react";
import "./styled.css";
export default function Card(props){
    return <div className="card-container">
        <h1 className="card-id">{props.id}</h1>
        <h1 className="card-title">{props.nomel}</h1>
        <p className="card-valor">{props.valor}</p>
        <p className="card-categoria">{props.categoria}</p>
        <p className="card-quantidade">{props.quantidade}</p>
    </div>
}