import Skeleton from '../Skeleton';

const LoadingCast = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[125px] h-[125px] md:w-[175px] md:h-[175px] mb-[15px] md:mb-[25px] rounded-full overflow-hidden'>
        <Skeleton
          width='100%'
          height='100%'
        />
      </div>
      <Skeleton
        width='100%'
        radius='10px'
        className='h-[14px] md:h-[18px] mb-[5px]'
      />
      <Skeleton
        width='100%'
        radius='10px'
        className='h-[14px] md:h-[16px]'
      />
    </div>
  );
};

export default LoadingCast;
