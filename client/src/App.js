import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Creat from './pages/creat';
import Read from './pages/read';
function App(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Creat/>}/>
                <Route path="/pesquisar" element={<Read/>}/>
            </Routes>
        </Router>
    );
}

export default App