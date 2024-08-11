import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from '~/app/popular/popularAsync';
import Carousel from '../Carousel';
import SwitchTabs from '../SwitchTabs';

function Popular() {
  const dispatch = useDispatch();

  const { popularData, isLoading } = useSelector(
    (state) => state.popularReducer
  );

  const [params, setParams] = useState('movie');

  const onTabChange = (tab) => {
    setParams(tab === 'Movies' ? 'movie' : 'tv');
  };

  useEffect(() => {
    dispatch(getPopular(params));
  }, [dispatch, params]);

  return (
    <section className='mb-[70px]'>
      <div className='flex items-center justify-between mb-5 contentWrapper'>
        <span className='text-2xl font-normal capitalize'>
          What&apos;s Popular
        </span>
        <SwitchTabs
          data={['Movies', 'TV Shows']}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel
        data={popularData?.results}
        isLoading={isLoading}
        params={params}
      />
    </section>
  );
}

export default Popular;
