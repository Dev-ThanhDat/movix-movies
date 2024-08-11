import PropTypes from 'prop-types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from '../CarouselItem';

const Recommendation = ({ data, isLoading, mediaType }) => {
  return (
    <div className='mb-[50px]'>
      <div className='contentWrapper'>
        <div className='text-2xl mb-[25px]'>
          {data && data.length > 0 ? 'Recommendations' : ''}
        </div>
        <div className='movix-swiper'>
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
                    params={mediaType}
                  />
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>sdf</SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

Recommendation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  mediaType: PropTypes.string
};

export default Recommendation;
