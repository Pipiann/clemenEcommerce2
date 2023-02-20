// import './Item.css';
import {Link} from 'react-router-dom';

// export const Item = ({item})=>{
//     return(
//         <div className="tarjeta-producto">
//             <img src={item.pictureUrl} alt={item.title}/>
//             <h4>{item.title}</h4>
//             <p>$ {item.price}</p>
//             <Link to={`/item/${item.id}`}>
//                 <button className='boton-ver'>Ver detalle...</button>
//             </Link>
//         </div>
//     )
// }



export function Item ({item}){
    const imgUrl= "/image_clemen" + item.Foto

    return(
        <li className="producto_Card">
            <img className=" producto_Imagen" src={imgUrl} alt="producto.Producto" />
            <div className="producto_Info">
                {item.Producto}  <h3>{item.Nombre}</h3>
                <h2>${item.Precio}</h2>                
                <Link to="/item/:productId" className="styleDetalle"> <button> Detalle </button> </Link>
                
                
            </div>

        </li>

    )
}
