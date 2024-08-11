import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';
import noResults from '~/assets/images/no-results.png';

const Video = ({ show, setShow, videoId, setVideoId }) => {
  const handleClose = () => {
    setShow(false);
    setVideoId('');
  };

  return (
    <div
      className={`flex justify-center items-center w-full h-full fixed top-0 left-0 opacity-0 z-10 ${
        show ? 'opacity-100 visible' : 'invisible'
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bd-opacity-25 blur-[3.5px] transition-opacity duration-[400ms] ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={`relative w-[800px] aspect-video bg-white transition-transform duration-[250ms] ${
          show ? 'scale-100' : 'scale-[0.2]'
        }`}
      >
        <span
          className='absolute -top-[20px] right-0 cursor-pointer'
          onClick={handleClose}
        >
          Close
        </span>
        {videoId ? (
          <ReactPlayer
            url={`${import.meta.env.VITE_VIDEO_URL}?v=${videoId}`}
            controls
            width='100%'
            height='100%'
            playing={true}
          />
        ) : (
          <div className='flex items-center justify-center w-full h-full'>
            <img
              src={noResults}
              alt=''
              className='object-cover max-w-[400px]'
            />
          </div>
        )}
      </div>
    </div>
  );
};

Video.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  videoId: PropTypes.string,
  setVideoId: PropTypes.func
};

export default Video;
