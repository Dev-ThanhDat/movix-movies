import { useNavigate } from 'react-router-dom';
import logo from '~/assets/images/not-found.png';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center'>
        <img
          src={logo}
          alt='Not Found!'
        />
        <button
          onClick={() => navigate('/')}
          className='text-center gradient py-[10px] font-medium px-5 rounded-lg capitalize hover:opacity-90 transition-all'
        >
          Back home
        </button>
      </div>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
