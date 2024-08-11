import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiPlayCircleThin } from 'react-icons/pi';
import PosterFallback from '~/assets/images/no-poster.png';
import CircleRating from '../CircleRating';
import LazyImage from '../LazyImage';
import LoadingDetails from '../LoadingBannerDetails';
import Video from '../Video';

const DetailsBanner = ({ data, isLoading, video, credits }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState('');

  const director = credits?.filter((item) => item.job === 'Director');

  const writer = credits?.filter(
    (item) =>
      item.job === 'Screenplay' || item.job === 'Story' || item.job === 'Writer'
  );

  return (
    <div className='mt-[100px] mb-[50px] md:mb-0 min-h-[700px] md:mt-[120px] w-full bg-primary '>
      {!isLoading ? (
        <div>
          <div className='absolute top-0 left-0 right-0 w-full h-full overflow-hidden opacity-10'>
            <LazyImage src={data?.backdrop_path} />
          </div>
          <div className='opacity-layer'></div>
          <div className='relative contentWrapper'>
            <div className='flex gap-[25px] md:gap-[50px] flex-col md:flex-row'>
              <div className='shrink-0 rounded-xl md:max-w-[350px] w-full overflow-hidden'>
                {data?.poster_path ? (
                  <LazyImage src={data?.poster_path} />
                ) : (
                  <img
                    src={PosterFallback}
                    alt=''
                    className='object-cover w-full h-full'
                  />
                )}
              </div>
              <div className='flex-1'>
                <p className='text-[28px] leading-10 md:text-[34px] md:leading-[44px]'>{`${
                  data?.name || data?.title
                } (${dayjs(data?.release_date).format('YYYY')})`}</p>
                <p className='leading-6 mb-[15px] italic opacity-50 md:text-xl md:leading-[28px]'>
                  {data?.tagline}
                </p>
                <div className='flex items-center gap-[15px] mb-[25px] flex-wrap flex-row'>
                  {data?.genres?.map((item) => (
                    <span
                      key={item?.id}
                      className='text-xs bg-pink-color rounded-[4px] py-[3px] px-[5px] capitalize'
                    >
                      {item?.name}
                    </span>
                  ))}
                </div>
                <div className='flex items-center gap-[25px] mb-[25px]'>
                  <CircleRating
                    rating={parseFloat(data?.vote_average).toFixed(1)}
                  />
                  <div
                    className='flex items-center gap-5 cursor-pointer hover:text-pink-color'
                    onClick={() => {
                      setShow(true);
                      setVideoId(video?.key);
                    }}
                  >
                    <PiPlayCircleThin className='text-[60px] md:text-[80px] transition-all' />
                    <span className='text-xl transition-all'>
                      Watch Trailer
                    </span>
                  </div>
                </div>
                <div className='mb-[25px]'>
                  <div className='text-2xl mb-[10px]'>Overview</div>
                  <div className='text-sm leading-6'>{data?.overview}</div>
                </div>
                <div className='border-b-[rgba(255,255,255,0.1)] border-b border-solid py-[15px] flex'>
                  {data?.status && (
                    <div className='mr-[10px] flex flex-wrap flex-row'>
                      <span className='mr-[10px] leading-6 font-semibold'>
                        Status:
                      </span>
                      <span className='mr-[10px] opacity-50 leading-6'>
                        {data?.status}
                      </span>
                    </div>
                  )}
                  {data?.release_date && (
                    <div className='mr-[10px] flex flex-wrap flex-row'>
                      <span className='mr-[10px] leading-6 font-semibold'>
                        Release Date:
                      </span>
                      <span className='mr-[10px] opacity-50 leading-6'>
                        {dayjs(data?.release_date).format('MMM D, YYYY')}
                      </span>
                    </div>
                  )}
                  {data?.origin_country && (
                    <div className='mr-[10px] flex flex-wrap flex-row'>
                      <span className='mr-[10px] leading-6 font-semibold'>
                        Release Date:
                      </span>
                      <span className='mr-[10px] opacity-50 leading-6 line-clamp-1'>
                        {data?.origin_country?.map((item) => item).join(', ')}
                      </span>
                    </div>
                  )}
                </div>
                {director?.length > 0 && (
                  <div className='border-b-[rgba(255,255,255,0.1)] border-b border-solid py-[15px] flex'>
                    <span className='mr-[10px] leading-6 font-semibold'>
                      Director:
                    </span>
                    <span className='mr-[10px] opacity-50 leading-6 line-clamp-1'>
                      {director.map((item, index) => (
                        <span key={item?.id}>
                          {item?.name}
                          {director?.length - 1 !== index && ', '}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
                {writer?.length > 0 && (
                  <div className='border-b-[rgba(255,255,255,0.1)] border-b border-solid py-[15px] flex'>
                    <span className='mr-[10px] leading-6 font-semibold'>
                      Writer:
                    </span>
                    <span className='mr-[10px] opacity-50 leading-6 line-clamp-1'>
                      {writer?.map((item, index) => (
                        <span key={item?.id}>
                          {item?.name}
                          {writer?.length - 1 !== index && ', '}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
                {data?.created_by?.length > 0 && (
                  <div className='border-b-[rgba(255,255,255,0.1)] border-b border-solid py-[15px] flex'>
                    <span className='mr-[10px] leading-6 font-semibold'>
                      Creator:
                    </span>
                    <span className='mr-[10px] opacity-50 leading-6 line-clamp-1'>
                      {data?.created_by?.map((item, index) => (
                        <span key={item.id}>
                          {item?.name}
                          {data?.created_by?.length - 1 !== index && ', '}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Video
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </div>
        </div>
      ) : (
        <LoadingDetails />
      )}
    </div>
  );
};

DetailsBanner.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  video: PropTypes.object,
  credits: PropTypes.arrayOf(PropTypes.object)
};

export default DetailsBanner;
