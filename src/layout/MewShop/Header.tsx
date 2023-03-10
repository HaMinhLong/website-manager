// THIRD IMPORT
import { useEffect, useRef, useState } from 'react';
import { Drawer } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// PROJECT IMPORT
import logo from 'static/MewShop/images/home/logo.png';
import { ReactComponent as ToRight } from 'static/MewShop/images/home/to-right.svg';
import { ReactComponent as CartTwo } from 'static/MewShop/images/home/cart_2.svg';
import quanDai from 'static/MewShop/images/home/quan-dai.jpg';
import searchIcon from 'static/MewShop/images/home/search-icon.png';
import { ReactComponent as HomeIcon } from 'static/MewShop/images/home/home-icon.svg';
import { ReactComponent as PhoneIcon } from 'static/MewShop/images/home/phone-icon.svg';
import { ReactComponent as CartIcon } from 'static/MewShop/images/home/cart-icon.svg';
import { ReactComponent as MenuIcon } from 'static/MewShop/images/home/menu-icon.svg';
import { useSelector } from 'app/store';
import { order, updateCart } from 'features/order/orderSlice';

import { MenuType } from 'types/menu';
import { Box } from '@mui/material';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderState = useSelector(order);

  const [menus, setMenus] = useState<MenuType[]>([]);
  const [toggleChildNews, setToggleChildNews] = useState<boolean>(false);
  const [toggleChildProducts, setToggleChildProducts] = useState<boolean>(false);
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [menuActive, setMenuActive] = useState<any>({});

  const cart = useRef(JSON.parse(localStorage.getItem('cart') || '[]'));

  useEffect(() => {
    dispatch(updateCart(cart.current.length || 0));
  }, []);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        getParentChild: 1
      }),
      range: JSON.stringify([0, 50]),
      attributes: 'id,text,parent,url,icon'
    };

    dispatch({
      type: 'menu/fetch',
      payload: params,
      callback: (res) => {
        setMenus(res);
      }
    });
  };

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header?.classList.toggle('active', window.scrollY > 0);
  });

  const handleClickScroll = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.hash) handleClickScroll(location.hash.split('#')[1]);
    else handleClickScroll('home');
  }, [location.pathname]);

  console.log('menuActive', menuActive);

  return (
    <>
      <div id="home" style={{ overflow: 'hidden' }}></div>
      <header className={'header'}>
        <div className="container">
          <div className="logo_header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="part_2">
            <ul className="navigation">
              {menus?.map((item) => (
                <li
                  key={item?.id}
                  className={
                    (toggleChildNews && item?.url === '/articles') || (toggleChildProducts && item?.url === '/products') ? 'active' : ''
                  }
                  onMouseEnter={() => {
                    if (item?.url === '/articles') setToggleChildNews(true);
                    if (item?.url === '/products') setToggleChildProducts(true);
                  }}
                  onMouseLeave={() => {
                    if (item?.url === '/articles') setToggleChildNews(false);
                    if (item?.url === '/products') setToggleChildProducts(false);
                  }}
                >
                  {item?.url !== '/products' ? <Link to={item?.url}>{item?.text}</Link> : <a>{item?.text}</a>}

                  {item?.children?.length > 0 && item?.url === '/products' && (
                    <ul className="child child_product">
                      {item?.children?.map((child) => (
                        <li key={child?.id}>
                          <img src={child?.icon} alt="" />
                          <Link to={`${item?.url}${child?.url}`} onClick={() => setToggleChildProducts(false)}>
                            {child?.text}
                          </Link>
                          <ul>
                            {child?.children?.map((grandchildren) => (
                              <li key={grandchildren?.id}>
                                <Link to={`${item?.url}${child?.url}${grandchildren?.url}`} onClick={() => setToggleChildProducts(false)}>
                                  <ToRight />
                                  {grandchildren?.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item?.children?.length > 0 && item?.url !== '/products' && (
                    <ul className="child">
                      {item?.children?.map((child) => (
                        <li key={child?.id}>
                          <Link to={`${item?.url}${child?.url}`} onClick={() => setToggleChildNews(false)}>
                            {child?.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="search_cart_box">
              <div className="search_header">
                <svg
                  onClick={() => setToggleSearch(true)}
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"></path>
                </svg>
              </div>
              <Link to="/cart" className="cart_header">
                <CartTwo />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    width: '20px',
                    height: '20px',
                    bgcolor: '#f88e11',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    fontSize: '12px',
                    color: '#fff'
                  }}
                >
                  {orderState?.totalProduct}
                </Box>
              </Link>
            </div>
          </div>
          <div className={toggleSearch ? 'search_container active' : 'search_container'}>
            <div className={toggleSearch ? 'search_box active' : 'search_box'}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const search = e.target['search'].value;
                  navigate(`/search?${search}`);
                  setToggleSearch(false);
                }}
              >
                <input type="search" placeholder="Nhập từ khóa tìm kiếm..." name="search" required id="search" />
                <button type="submit">
                  <img src={searchIcon} alt="button submit" />
                </button>
              </form>
              <div className="bg" onClick={() => setToggleSearch(false)}></div>
              <div className="bg_two"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="header_two">
        <div className="box">
          <Link to="/">
            <HomeIcon />
          </Link>
          <p>Trang chủ</p>
        </div>
        <div className="box">
          <Link to="/contact">
            <PhoneIcon />
          </Link>
          <p>Liên hệ</p>
        </div>
        <div className="box">
          <Link to="/cart">
            <CartIcon />
          </Link>
          <p>Giỏ hàng</p>
        </div>
        <div className="box" onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
          <p>Menu</p>
        </div>
      </div>
      <Drawer
        title={<img src={logo} alt=""></img>}
        placement="left"
        width="330"
        closable={false}
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        className="menu_res"
      >
        <ul>
          {menus
            ?.find((item) => item?.url === '/products')
            ?.children?.map((item) => (
              <li className={item?.url === menuActive?.url ? 'active' : ''}>
                <div
                  onClick={() => {
                    setMenuActive(item);
                  }}
                >
                  <img src={item?.icon} alt={item?.text} />
                  <p>{item?.text}</p>
                </div>
              </li>
            ))}
        </ul>
        {menuActive?.children && (
          <ul className="categories">
            {menuActive?.children?.map((item) => (
              <li key={item?.id}>
                <Link to={`/products${menuActive?.url}${item?.url}`} onClick={() => setOpenMenu(false)}>
                  <img src={item?.icon || quanDai} alt="" />
                  <p>{item?.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Drawer>
    </>
  );
};

export default Header;
