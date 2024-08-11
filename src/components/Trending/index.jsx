import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrending } from '~/app/trending/trendingAsync';
import Carousel from '../Carousel';
import SwitchTabs from '../SwitchTabs';

function Trending() {
  const dispatch = useDispatch();

  const { trendingData, isLoading } = useSelector(
    (state) => state.trendingReducer
  );

  const [params, setParams] = useState('day');

  const onTabChange = (tab) => {
    setParams(tab === 'Day' ? 'day' : 'week');
  };

  useEffect(() => {
    dispatch(getTrending(params));
  }, [dispatch, params]);

  return (
    <section className='mb-[70px]'>
      <div className='flex items-center justify-between mb-5 contentWrapper'>
        <span className='text-2xl font-normal capitalize'>Trending</span>
        <SwitchTabs
          data={['Day', 'Week']}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel
        data={trendingData?.results}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Trending;
