import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// CSS
import "./carousel.css"
import { useContext, useEffect, useState } from 'react';
// import { contextApi } from '../context/Context';
import Card from '../card/Card';
import { contextApi } from '../context/Context';





function Carousel() {


    const {products} = useContext(contextApi) 

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                Pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                pagination={{
                    clickable: true,
                }}

            >

                {
                    products.map(product => <SwiperSlide key={product.id}>
                        <Card image = {product.image} title = {product.title} price = {product.price} id={product.id}/>
                    </SwiperSlide>
                    )
                }
            </Swiper>





        </>

    )
}

export default Carousel