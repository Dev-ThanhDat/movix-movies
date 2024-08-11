import PropTypes from 'prop-types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar from '~/assets/images/avatar.png';
import LazyImage from '../LazyImage';
import LoadingCast from '../LoadingCast';

const Cast = ({ data, isLoading }) => {
  return (
    <div className='mb-[50px]'>
      <div className='contentWrapper'>
        <div className='text-2xl mb-[25px]'>
          {data && data.length > 0 ? 'Top Cast' : ''}
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
                  <div
                    key={item?.id}
                    className='flex flex-col items-center'
                  >
                    <div className='w-[125px] h-[125px] md:w-[175px] md:h-[175px] mb-[15px] md:mb-[25px] rounded-full overflow-hidden'>
                      {item?.profile_path ? (
                        <LazyImage src={item?.profile_path} />
                      ) : (
                        <img
                          src={avatar}
                          alt='avatar'
                          className='object-cover w-full h-full'
                        />
                      )}
                    </div>
                    <div className='text-sm font-semibold leading-5 md:leading-6 md:text-lg line-clamp-1'>
                      {item?.name}
                    </div>
                    <div className='text-sm leading-5 opacity-50 md:text-base md:leading-6 line-clamp-1'>
                      {item?.character}
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <LoadingCast />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingCast />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingCast />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingCast />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingCast />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

Cast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

export default Cast;
