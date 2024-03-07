import React, { useContext, useState } from 'react'
import { contextApi } from '../context/Context'



function Card({ image, title, price, id }) {

    let { count, setCount, productId, setProductId, productArr, setProductArr, products } = useContext(contextApi);


    const buttonClick = (itemId) => {

        setCount(count + 1)

        let findItem = products.find(product => product.id == itemId);

        if (!productId.includes(itemId)) {
            setProductArr(productArr)
            productId.push(findItem.id)
            productArr.push(findItem)
        } else {
            findItem.totalPrice += price;
            console.log(findItem)
        }

    }

    return (
        <>

            <div className='product-slide'>

                <div className='imgPart' style={{ backgroundImage: `url(${image})` }}>

                    <div className='imgContent'>
                        <div className='favIcon'>
                            <i className="fa-regular fa-heart"></i>
                        </div>

                        <div className='addtoCard'>
                            <button onClick={() => buttonClick(id)}>ADD TO CARD</button>
                        </div>
                    </div>
                </div>
                <img src={image} alt="image" />
                <p className='productTitle'>{title}</p>
                <p className='productPrice'>${price}</p>
            </div>

        </>
    )
}

export default Card