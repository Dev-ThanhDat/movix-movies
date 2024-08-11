import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '~/assets/images/movix-logo.svg';
import useDebounce from '~/hooks/useDebounce';
import { menu } from '~/utils/menu';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');

  const searchDebounse = useDebounce(query);

  const clickOpenSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const clickOpenMobile = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleControlHeader = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow('hide');
      } else {
        setShow('show');
      }
      setMobileMenu(false);
      setShowSearch(false);
    } else {
      setShow('top');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', handleControlHeader);
    return () => {
      window.removeEventListener('scroll', handleControlHeader);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    if (searchDebounse) {
      navigate(`/search/${searchDebounse}`);
      setShowSearch(false);
    }
  }, [navigate, searchDebounse]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full h-[60px] z-50 transition-all flex items-center ${
        mobileMenu ? '!bg-third' : ''
      } ${show}`}
    >
      <section className='flex items-center justify-between contentWrapper'>
        <Link to={'/'}>
          <img
            src={logo}
            alt=''
            className='h-[50px]'
          />
        </Link>
        <div className='flex items-center gap-x-[30px] md:gap-x-0'>
          <ul
            className={`flex md:items-center ${
              mobileMenu
                ? 'flex flex-col md:flex-row absolute md:static w-full bg-third md:bg-transparent top-full left-0 right-0 p-5 md:p-0 border-t-[1px] md:border-t-0 border-t-gray-700 menuBar'
                : 'hidden md:block'
            }`}
          >
            {menu &&
              menu.length > 0 &&
              menu.map((item) => (
                <NavLink
                  to={`/explore${item.path}`}
                  key={item.id}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-pink-color font-medium md:mx-[15px] py-5 md:py-0'
                      : 'hover:text-pink-color transition-al md:mx-[15px] py-5 md:py-0'
                  }
                >
                  {item.title}
                </NavLink>
              ))}
          </ul>
          <span
            className={`text-xl transition-all cursor-pointer hover:text-pink-color ml-[15px] ${
              window.location.pathname === '/' ? 'hidden' : ''
            }`}
          >
            <HiOutlineSearch onClick={clickOpenSearch} />
          </span>
          <span className='text-xl cursor-pointer hover:text-pink-color md:hidden'>
            {mobileMenu ? (
              <VscChromeClose
                onClick={() => setMobileMenu(false)}
                className='transition-all'
              />
            ) : (
              <SlMenu
                onClick={clickOpenMobile}
                className='transition-all'
              />
            )}
          </span>
        </div>
      </section>
      {showSearch && (
        <section
          className={`w-full h-[60px] bg-white absolute top-full transition-all ${
            showSearch ? 'searchBar' : ''
          }`}
        >
          <div className='flex items-center w-full h-full contentWrapper'>
            <input
              type='text'
              placeholder='Search for a movie or tv show....'
              onChange={handleSearchQuery}
              className='flex-1 text-black h-full text-sm md:text-xl bg-white border-none outline-none rounded-l-[30px] px-[15px]'
            />
            <VscChromeClose
              onClick={() => setShowSearch(false)}
              className='text-xl text-black'
            />
          </div>
        </section>
      )}
    </header>
  );
}

export default Header;
