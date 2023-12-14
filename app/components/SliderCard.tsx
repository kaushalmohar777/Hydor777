
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SliderCard = () => {
  return (
    <div className='slider-component'>
        <h2>SliderCard</h2>
    <Swiper
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={3}
       pagination={{ clickable: true }}
       className='mySwiper'
     >
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SliderCard;