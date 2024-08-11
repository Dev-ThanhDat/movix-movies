import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleRating = ({ rating, className }) => {
  return (
    <div
      className={`bg-white rounded-full p-[2px] w-[50px] h-[50px] ${className}`}
    >
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
          trailColor: 'transparent',
          textColor: 'black',
          textSize: '34px'
        })}
      />
    </div>
  );
};

CircleRating.propTypes = {
  rating: PropTypes.string,
  className: PropTypes.string
};

export default CircleRating;
