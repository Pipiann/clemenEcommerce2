
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import CardWidget from './components/CardWidget';
import { ItemList } from './components/ItemList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import SobreMi from './components/SobreMi'

function App() {
  return (
    <div className="App">
       <NavBar/>
       <CardWidget/>
          <ItemListContainer greeting="Clementina Mandarina Ropa con Actitud"/>
          <ItemList/>
      <BrowserRouter>
        <Routes>
       
        
          {/* <Route path='/category/:id' element= {<ItemListContainer/>} ></Route>
          <Route path='/item/:id' element= {<ItemDetailsContainer/>} ></Route>
         <Route path='/' element= {<ItemListContainer/>} ></Route>  */}
         <Route path='/' element= {<NavBar/>} ></Route>
          <Route path='/sobremi' element= {<SobreMi/>} ></Route>

        
          
          
          
          

      
    
        
         

        </Routes> 
       
           // </BrowserRouter>
    </div>
  );
}

export default App;
