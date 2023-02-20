import { useEffect, useState } from "react";
import items from "../Productos_Json/ProductosJson.json";
import {Item} from "./Item"
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";


const ItemListContainer= ({greeting}) =>{
    return (
        <section>
            <h2>{greeting}</h2>
        </section>
    )
}

export default ItemListContainer









export const ItemListContainer2 = ()=>{
    const {items} = useParams();

    const [item, setItem] = useState([]);

    let promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(items);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!item){
                setItem(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === item);
                setItem(nuevaLista)
            }
        })
    },[Item])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={item}/>
        </div>
    )
}