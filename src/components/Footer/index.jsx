import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-third py-[50px]'>
      <div className='flex flex-col items-center contentWrapper'>
        <ul className='flex items-center justify-center gap-[15px] mb-5 md:mb-[30px] md:gap-[30px]'>
          <li className='text-xs transition-all cursor-pointer md:text-base hover:text-pink-color'>
            Terms Of Use
          </li>
          <li className='text-xs transition-all cursor-pointer md:text-base hover:text-pink-color'>
            Privacy-Policy
          </li>
          <li className='text-xs transition-all cursor-pointer md:text-base hover:text-pink-color'>
            About
          </li>
          <li className='text-xs transition-all cursor-pointer md:text-base hover:text-pink-color'>
            Blog
          </li>
          <li className='text-xs transition-all cursor-pointer md:text-base hover:text-pink-color'>
            FAQ
          </li>
        </ul>
        <div className='text-xs md:text-sm leading-5 opacity-50 text-center md-5 md:mb-[30px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          nobis, tempore quas minima ullam iusto est fugiat quibusdam quis sunt
          accusamus, numquam maiores cumque vitae tempora enim quaerat quasi
          autem. Quibusdam excepturi non vero itaque ab sed eius quaerat
          deserunt, facilis quae dolor distinctio voluptas minima maiores
          eligendi eaque saepe enim quidem unde molestias vitae fuga nemo
          fugiat. Delectus, officia. Dicta dolorem excepturi voluptas natus
          consequuntur! Aspernatur repellendus nulla vel provident qui sed
          ipsum. Molestias, iste soluta qui tempore reprehenderit expedita
          consequatur laborum facilis sit commodi non quia mollitia dolore.
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <span className='w-[50px] h-[50px] rounded-full cursor-pointer transition-all hover:text-pink-color  hover:shadow-[0_0_0.625em] skew-x-4 bg-primary flex items-center justify-center'>
            <FaFacebookF />
          </span>
          <span className='w-[50px] h-[50px] rounded-full cursor-pointer transition-all hover:text-pink-color  hover:shadow-[0_0_0.625em] bg-primary flex items-center justify-center'>
            <FaInstagram />
          </span>
          <span className='w-[50px] h-[50px] rounded-full cursor-pointer transition-all hover:text-pink-color  hover:shadow-[0_0_0.625em] bg-primary flex items-center justify-center'>
            <FaTwitter />
          </span>
          <span className='w-[50px] h-[50px] rounded-full cursor-pointer transition-all hover:text-pink-color  hover:shadow-[0_0_0.625em] bg-primary flex items-center justify-center'>
            <FaLinkedin />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
