import React, {useState,useEffect} from "react";
import Axios from "axios";
import Header from "../../components/Header"
import Card from "../../components/card/card"
import "./styled.css"
function Read(){
    const [listProdutos, setListProdutos] = useState();
    useEffect(()=>{
        Axios.get("http://localhost:3001/get").then((response) => {setListProdutos(response.data);});
    },[]);
    
    
   
    
    return(
        <div>
            <Header/>
            <div class="pesquisa-input">
                <h1>Produtos:</h1>
                
            </div>
            <div className="card">
                {typeof listProdutos !== "undefined" && listProdutos.map((value)=>{
                return <Card 
                key={value.id} 
                listCard={listProdutos} 
                setListCard={setListProdutos}
                id={value.idprodutos}
                nomel={value.nomel}
                valor={value.valor}
                categoria={value.categoria}
                quantidade={value.quantidade}
                ></Card>;
                })}
            </div>
        </div>
    )
}

export default Read