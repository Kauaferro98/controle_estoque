import React from "react";
import "./styled.css";
import FormDialog from "../dialog/dialog";

export default function Card(props){
    const [open, setOpen] = React.useState(false);

    const handleClickCard = ()=>{
        setOpen(true);
    }

    return (
        <>
        <FormDialog 
        open={open} 
        setOpen={setOpen} 
        name={props.nomel} 
        valor={props.valor}
        categoria={props.categoria} 
        quantidade={props.quantidade} 
        listCard={props.listCard} 
        setListCard={props.setListCard}
        id={props.id}
        />
        <div className="card">
            <div className="card-container" onClick={() => handleClickCard()}>
                <h1 className="card-id">{props.id}</h1>
                <h1 className="card-title">{props.nomel}</h1>
                <p className="card-valor">{props.valor}</p>
                <p className="card-categoria">{props.categoria}</p>
                <p className="card-quantidade">{props.quantidade}</p>
            </div>
        </div>
        </>
    );
}