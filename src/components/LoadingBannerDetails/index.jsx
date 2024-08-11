import Skeleton from '../Skeleton';

const LoadingDetails = () => {
  return (
    <div className='mt-[100px] mb-[50px] md:mb-0 min-h-[700px] md:mt-[120px] w-full bg-primary '>
      <div>
        <div className='relative contentWrapper'>
          <div className='flex gap-[25px] md:gap-[50px] flex-col md:flex-row'>
            <div className='shrink-0 rounded-xl md:max-w-[350px] w-full overflow-hidden'>
              <Skeleton
                width='100%'
                className='h-[582px] md:h-[525px]'
              />
            </div>
            <div className='flex-1'>
              <Skeleton
                width='100%'
                radius='10px'
                className='h-[40px] md:h-[44px] mb-2'
              />
              <Skeleton
                width='50%'
                radius='10px'
                className='h-[24px] md:h-[28px] mb-[25px]'
              />
              <Skeleton
                width='40%'
                radius='10px'
                className='h-[80px] md:h-[90px] mb-[25px]'
              />
              <Skeleton
                width='20%'
                radius='10px'
                className='h-[24px] mb-[10px]'
              />
              <Skeleton
                width='100%'
                radius='10px'
                className='h-[72px] md:h-[48px] mb-[25px]'
              />
              <Skeleton
                width='100%'
                radius='10px'
                className='h-[55px] mb-[5px]'
              />
              <Skeleton
                width='100%'
                radius='10px'
                className='h-[55px] mb-[5px]'
              />
              <Skeleton
                width='100%'
                radius='10px'
                className='h-[55px] mb-[5px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDetails;
