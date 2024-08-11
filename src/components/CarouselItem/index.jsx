import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noPoster from '~/assets/images/no-poster.png';
import CircleRating from '../CircleRating';
import LazyImage from '../LazyImage';

const CarouselItem = ({ data, params, search = false }) => {
  return (
    <Link
      to={`/${data?.media_type || params}/${data?.id}`}
      className='w-full h-full'
    >
      <div className='mb-[30px] relative '>
        {data?.poster_path ? (
          <LazyImage
            src={data?.poster_path}
            className=' h-[582px] md:h-[324px] rounded-xl'
          />
        ) : (
          <img
            src={noPoster}
            alt='poster'
            className='object-cover w-full h-full rounded-xl'
          />
        )}
        {search ? (
          <></>
        ) : (
          <>
            <CircleRating
              rating={parseFloat(data?.vote_average).toFixed(1)}
              className='absolute -bottom-5'
            />
            <span className='absolute bottom-[5px] line-clamp-1 right-[5px] z-10 py-[2px] px-[5px] rounded-[5px] text-sm capitalize bg-pink-color'>
              {data?.media_type || data?.original_language}
            </span>
          </>
        )}
      </div>
      <div>
        <span className='line-clamp-1 mb-[10px] md:text-xl leading-6'>
          {data?.title || data?.name}
        </span>
        <span className='text-sm opacity-50'>
          {dayjs(data?.release_date).format('MMM D, YYYY')}
        </span>
      </div>
    </Link>
  );
};

CarouselItem.propTypes = {
  data: PropTypes.object,
  params: PropTypes.string,
  search: PropTypes.bool
};

export default CarouselItem;
