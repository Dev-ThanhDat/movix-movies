import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyImage({ src, className, video }) {
  return (
    <LazyLoadImage
      className={`lazy-load-image-background ${className}`}
      alt=''
      effect='blur'
      src={`${
        video
          ? import.meta.env.VITE_VIDEO_IMG_URL
          : import.meta.env.VITE_IMAGE_URL
      }${src}`}
    />
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  video: PropTypes.bool
};

export default LazyImage;
