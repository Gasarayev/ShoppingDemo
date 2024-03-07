import React, { createContext, useState, useEffect } from 'react'


export const contextApi = createContext()


const Context = (props) => {



    const [count, setCount] = useState(0);
    const [productId, setProductId] = useState([]);
    const [productArr, setProductArr] = useState([]);


    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products?limit=8")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log('error', error));
    }, [])

    return (

        <contextApi.Provider value={{ count, setCount, productId, setProductId, productArr, setProductArr, products, setProducts }}>

            {props.children}

        </contextApi.Provider>


    )


}


export default Context