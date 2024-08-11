import Skeleton from '../Skeleton';

const LoadingCarousel = () => {
  return (
    <div className='w-full h-full'>
      <div className='overflow-hidden rounded-xl mb-[30px]'>
        <Skeleton
          width='100%'
          className='h-[582px] md:h-[435px]'
        />
      </div>
      <div>
        <span className='line-clamp-1 mb-[10px] md:text-xl leading-6'>
          <Skeleton
            width='100%'
            height='24px'
            radius='5px'
          />
        </span>
        <span className='text-sm opacity-50'>
          <Skeleton
            width='50%'
            height='14px'
            radius='5px'
          />
        </span>
      </div>
    </div>
  );
};

export default LoadingCarousel;
