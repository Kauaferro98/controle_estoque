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
    
    const handleClickButton = () =>{
        console.log(listProdutos);
        
        
    };
    
    return(
        <div>
            <Header/>
            <div class="pesquisa-input">
                <h1>Nome do Produto:</h1>
                <input
                type="text"
                name="produto_pesquisado"
                placeholder="Nome"
                />
                <button onClick={() => handleClickButton()}>Pesquisar</button>
            </div>

            {typeof listProdutos !== "undefined" && listProdutos.map((value)=>{
               return <Card 
               key={value.id} 
               listCard={listProdutos} 
               setListCard={setListProdutos}
               id={value.id}
               nomel={value.nomel}
               valor={value.valor}
               categoria={value.categoria}
               quantidade={value.quantidade}
               ></Card>;
            })}
        </div>
    )
}

export default Read