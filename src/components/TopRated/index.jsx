import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRated } from '~/app/topRated/topRatedAsync';
import Carousel from '../Carousel';
import SwitchTabs from '../SwitchTabs';

const TopRated = () => {
  const dispatch = useDispatch();

  const { topRatedData, isLoading } = useSelector(
    (state) => state.topRatedReducer
  );

  const [params, setParams] = useState('movie');

  const onTabChange = (tab) => {
    setParams(tab === 'Movies' ? 'movie' : 'tv');
  };

  useEffect(() => {
    dispatch(getTopRated(params));
  }, [dispatch, params]);

  return (
    <section className='mb-[70px]'>
      <div className='flex items-center justify-between mb-5 contentWrapper'>
        <span className='text-2xl font-normal capitalize'>Top Rated</span>
        <SwitchTabs
          data={['Movies', 'TV Shows']}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel
        data={topRatedData?.results}
        isLoading={isLoading}
        params={params}
      />
    </section>
  );
};

export default TopRated;
