import PropTypes from 'prop-types';

const Skeleton = ({ className, height, width, radius }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: height,
        width: width || '100%',
        borderRadius: radius
      }}
    ></div>
  );
};

Skeleton.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.string
};

export default Skeleton;
