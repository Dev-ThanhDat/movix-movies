import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiVideoOn } from 'react-icons/ci';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '../LazyImage';
import LoadingVideosSection from '../LoadingVideosSection';
import Video from '../Video';

const VideosSection = ({ data, isLoading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState('');

  return (
    <div className='mb-[50px]'>
      <div className='contentWrapper'>
        <div className='text-2xl mb-[25px]'>
          {data && data.length > 0 ? 'Official Videos' : ''}
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
                  <div key={item?.id}>
                    <div className='mb-[15px] relative rounded-lg overflow-hidden h-[163px]'>
                      <LazyImage
                        src={`/${item.key}/mqdefault.jpg`}
                        video
                      />
                      <CiVideoOn
                        className='absolute hover:text-pink-color bg-primary p-[10px] rounded-full cursor-pointer transition-all z-10 w-[50px] h-[50px] bg-opacity-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'
                        onClick={() => {
                          setVideoId(item?.key);
                          setShow(true);
                        }}
                      />
                    </div>
                    <div className='text-sm leading-5 md:text-base md:leading-6 line-clamp-1'>
                      {item?.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide>
                  <LoadingVideosSection />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingVideosSection />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingVideosSection />
                </SwiperSlide>
                <SwiperSlide>
                  <LoadingVideosSection />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
      <Video
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

VideosSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

export default VideosSection;
