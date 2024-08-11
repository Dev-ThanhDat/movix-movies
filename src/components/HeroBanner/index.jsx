import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUpcomingMovie } from '~/app/upcomingMovie/upcomingMovieAsync';
import LazyImage from '../LazyImage';

function HeroBanner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { upcomingBackdropData, isLoading } = useSelector(
    (state) => state.upcomingReducer
  );

  const [query, setQuery] = useState('');

  const handleSearchQuery = () => {
    if (query && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    dispatch(getUpcomingMovie());
  }, [dispatch]);

  return (
    <div className='w-full md:h-[700px] h-[450px] bg-primary flex items-center relative'>
      <div className='absolute inset-0 overflow-hidden opacity-50'>
        {!isLoading && <LazyImage src={upcomingBackdropData} />}
      </div>
      <div className='opacity-layer'></div>
      <div className='z-10 flex flex-col items-center text-center max-w-[800px] w-full my-0 mx-auto'>
        <span className='text-[50px] md:text-[90px] mb-0 md:mb-[10px] font-bold'>
          Welcome.
        </span>
        <span className='mb-10 text-lg font-medium md:text-2xl'>
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <div className='flex items-center w-full h-[50px]'>
          <input
            type='text'
            placeholder='Search for a movie or tv show....'
            onChange={(e) => setQuery(e.target.value)}
            className='flex-1 text-black h-full text-sm md:text-xl bg-white border-none outline-none rounded-l-[30px] px-[15px]'
          />
          <button
            onClick={handleSearchQuery}
            className='w-[100px] h-full gradient rounded-r-[30px] outline-none border-none md:text-lg'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
