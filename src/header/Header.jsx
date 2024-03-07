import React, { useContext, useState } from 'react'
import Logo from "../image/logo.png.webp"
import "./header.css"
import { contextApi } from '../context/Context'




function Header() {

    let { setCount, count, productArr, setProductArr } = useContext(contextApi)


    // shopping list achilib baglanmasi
    const [isBasketOpen, setBasketOpen] = useState(false);



    const increaseItem = (itemId) => {
        setProductArr(prevProductArr => prevProductArr.map((item) => {
            if (item.id === itemId) {
                const newCount = (item.count || 0) + 1;
                return {
                    ...item,
                    count: newCount,
                    totalPrice: newCount * item.price,
                };
            }
            return item;
        }));
    };

    const decreaseItem = (itemId) => {
        setProductArr(prevProductArr => prevProductArr.map((item) => {
            if (item.id === itemId && (item.count || 0) > 1) {
                const newCount = item.count - 1;
                return {
                    ...item,
                    count: newCount,
                    totalPrice: newCount * item.price,
                };
            }
            return item;
        }));
    };

    const getTotalCount = () => {
        return productArr.reduce((totalCount, item) => totalCount + (item.count || 1), 1);
    };


    return (
        <>
            <div className='header'>
                <div className='head_logo'>

                    <img src={Logo} alt="Logo" />
                </div>
                <ul className='head_menu'>


                    <li className='dropDownParent'>Home
                        <ul className='dropdownMenu'>
                            <li>Homepage 1</li>
                            <li>Homepage 2</li>
                            <li>Homepage 3</li>
                        </ul>
                    </li>

                    <li>Shop</li>
                    <li>Sale</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='head_icons'>


                    {/* // shopping list achilib baglanmasi */}
                    <i className="fa-solid fa-cart-shopping" onClick={() => setBasketOpen(!isBasketOpen)}></i>
                    <p>{count}</p>



                    <div className='productBasket'>
                        {
                            isBasketOpen && productArr.map((item) => {
                                return (
                                    <>

                                        <div className='myProduct' key={item.id}>
                                            <img key={item.id} src={item.image} alt="" />

                                            <div className='myProduct_content'>
                                                <p className='myProduct_title'>{item.title}</p>
                                                <p className='myProduct_price'>{item.totalPrice}$</p>
                                            </div>
                                            <div className='countBtn'>
                                                <button onClick={() => increaseItem(item.id)}>+</button>
                                                {item.count && <p>{item.count}</p>}
                                                <button onClick={() => decreaseItem(item.id)}>-</button>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>


                </div>

            </div>
        </>
    )
}

export default Header