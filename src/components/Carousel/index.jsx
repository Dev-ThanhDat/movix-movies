import PropTypes from 'prop-types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from '../CarouselItem';
import LoadingCarousel from '../LoadingCarousel';

function Carousel({ data, isLoading, params }) {
  return (
    <div className='contentWrapper movix-swiper '>
      <Swiper
        grabCursor={'true'}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        slidesPerView='auto'
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {!isLoading ? (
          data &&
          data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item?.id}>
              <CarouselItem
                data={item}
                params={params}
              />
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <LoadingCarousel />
            </SwiperSlide>
            <SwiperSlide>
              <LoadingCarousel />
            </SwiperSlide>
            <SwiperSlide>
              <LoadingCarousel />
            </SwiperSlide>
            <SwiperSlide>
              <LoadingCarousel />
            </SwiperSlide>
            <SwiperSlide>
              <LoadingCarousel />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  params: PropTypes.string
};

export default Carousel;
