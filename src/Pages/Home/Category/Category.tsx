import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import Slide1 from "../../../assets/10.jpg"
import Slide2 from "../../../assets/19.jpg"
import Slide3 from "../../../assets/12.jpg"
import Slide4 from "../../../assets/13.jpg"
import Slide5 from "../../../assets/14.jpg"
import Slide6 from "../../../assets/15.jpg"
import Slide7 from "../../../assets/16.jpg"
import Slide8 from "../../../assets/20.jpg"
import Slide9 from "../../../assets/18.jpg"
const Category = () => {
    return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-auto"
      >
        <SwiperSlide >
            <img src={Slide1} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide2} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide3} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide4} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide5} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide6} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide7} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide8} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide9} alt=''/>
            <h3 className='text-4xl uppercase text-center text-white -mt-16 '>Plants</h3>
        </SwiperSlide>
      </Swiper>
    </>
    );
};
export default Category;