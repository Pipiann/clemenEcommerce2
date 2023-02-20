import items from "../Productos_Json/ProductosJson.json";
import {Item} from "./Item"
// import "./styles/producto.css"


export function ItemList () {

    // let promesa = new Promise((resolve, reject)=>{
    //     setTimeout(() => {
    //         resolve(items);
    //     }, 2000);
    // })
    // useEffect(()=>{
    //             promesa.then(resultado=>{
    //                 if(!tipoProducto){
    //                     setProductos(resultado)
    //                 } else{
    //                     const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
    //                     setProductos(nuevaLista)
    //                 }
    //             })
    //         },[tipoProducto])

    return(
        <ul className="productos_grid">
            {items.map ((item)=>(
                <Item key={item.Id} item={item}/>

                
                    
                
            ))}
        </ul>
    )
}
