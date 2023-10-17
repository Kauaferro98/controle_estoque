import logo from "../../img/shopping-cart.png"
import "./styled.css";

function Header(){

    return(
        <header className="app-list">
            <div>
                <div >
                    <a href="/"><img className="logo" src={logo}/></a>
                    <nav >
                        <ul>
                            <li className="item"><a href="/">Cadastrar Produtos</a></li>
                            <li className="item2"><a href="/pesquisar">Produtos Cadastrados</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}

export default Header