import React, {useState} from 'react';
import './App.css';
import Axios from "axios";


function App() {
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

  return (
    <div className="app--container">
     <div>
     <h1 className="h1">Controle De Estoque</h1>
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
      placeholder="valor"
      class="register--input"
      onChange={handleChangeValues}
      />
      <input
      type="text"
      name="categoria"
      placeholder="categoria"
      class="register--input"
      onChange={handleChangeValues}
      />
      <input
      type="text"
      name="quantidade"
      placeholder="quantidade"
      class="register--input"
      onChange={handleChangeValues}
      />
      <button className="register--button" onClick={()=> handleClickButton()}>Cadastrar</button>
     </div>
    </div>
  );
}

export default App;

