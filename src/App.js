
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer, { ItemListContainer2 } from './components/ItemListContainer';
import CardWidget from './components/CardWidget';
import { ItemList } from './components/ItemList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import SobreMi from './components/SobreMi'

function App() {
  return (
    <div className="App">
       


          <BrowserRouter>
        <div className="App">
            <div>
                <NavBar/>
                <CardWidget/>
                {/* <ItemListContainer greeting="Clementina Mandarina Ropa con Actitud"/> */}
                <ItemList/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Clementina Mandarina Ropa con Actitud" />}/>
                  <Route path="/category/:id" element={<ItemListContainer2 />}/>
                  <Route path="/item/:productId" element={<ItemDetailsContainer/>}/>
                  <Route path="/cart" element={<CardWidget/>}/>
             {/*      <Route path='*' element={<ItemListContainer />}/> */}
                 
                </Routes>
            </div>
        </div>
      </BrowserRouter>

        
          
          
          
          

      
    
        
         

        {/* </Routes>  */}
       
           {/* // </BrowserRouter> */}
    </div>
  );
}

export default App;
