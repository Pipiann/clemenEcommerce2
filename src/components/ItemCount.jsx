import { useState } from "react";


export const Counter =() =>{
    const [Count, setCount]= useState (item.Stock)


    return (
        <>
        <p>Stock{Count}</p>
        <button onClick={()=> setCount (Count +1)}> Mas </button>
        <button onClick={()=> setCount (Count -1)}> Menos </button>
        
        </>

    )

}