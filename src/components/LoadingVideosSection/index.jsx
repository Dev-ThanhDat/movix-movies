import Skeleton from '../Skeleton';

const LoadingVideosSection = () => {
  return (
    <div>
      <div className='mb-[15px] relative rounded-lg overflow-hidden h-[163px]'>
        <Skeleton
          width='100%'
          height='100%'
        />
      </div>
      <Skeleton
        width='100%'
        radius='10px'
        className='h-[14px] md:h-[16ppx]'
      />
    </div>
  );
};

export default LoadingVideosSection;
