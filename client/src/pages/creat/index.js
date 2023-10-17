import React, {useState} from 'react';
import Axios from "axios";
import Header from "../../components/Header"


function Creat(){
  const[values,setValues] = useState();
  //console.log(values);
  const handleChangeValues = (value) =>{
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nomel: values.nomel,
      valor: values.valor,
      categoria: values.categoria,
      quantidade: values.quantidade
    }).then((response)=> {
      console.log(response);
    });  
  };
    return(
      
      <div className="app--container">
        <Header/>
      <div>
        <h1>Controle De Estoque</h1>
        <input
        type="text"
        name="nomel"
        placeholder="Nome"
        class="register--input"
        onChange={handleChangeValues} 
        />
        <input
        type="text"
        name="valor"
        placeholder="Valor"
        class="register--input"
        onChange={handleChangeValues} 
        />
        <input
        type="text"
        name="categoria"
        placeholder="Categoria"
        class="register--input"
        onChange={handleChangeValues}        
        />
        <input
        type="text"
        name="quantidade"
        placeholder="Quantidade"
        class="register--input"
        onChange={handleChangeValues}
        />
      <button className="register--button" onClick={()=> handleClickButton()}>Cadastrar</button>                
      </div>
    </div>      
      
    )
}

export default Creat