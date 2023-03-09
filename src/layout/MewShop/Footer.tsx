// THIRD IMPORT
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// PROJECT IMPORT
import logo from 'static/MewShop/images/home/logo.png';
import facebook from 'static/MewShop/images/home/facebook.png';
import shopee from 'static/MewShop/images/home/shopee.png';
import tiki from 'static/MewShop/images/home/tiki.png';
import lazada from 'static/MewShop/images/home/lazada.png';
import sendo from 'static/MewShop/images/home/sendo.png';
import { LocationType } from 'types/location';
import { MenuType } from 'types/menu';

const Footer = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<LocationType>({});
  const [menus, setMenus] = useState<MenuType[]>([]);

  useEffect(() => {
    getLocation();
    getListMenuTop();
  }, []);

  const getListMenuTop = () => {
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

  const getLocation = () => {
    const query = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1
      }),
      range: JSON.stringify([0, 20]),
      sort: JSON.stringify(['createdAt', 'DESC'])
    };
    dispatch({
      type: 'location/fetch',
      payload: query,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setLocation(list?.[0]);
        }
      }
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer_logo">
          <img src={logo} alt="" />
          <p>
            Chúng tôi được thành lập từ tháng 1 năm 2023, với sứ mệnh đem lại những cảm giác hoàn toàn dị biệt khi lạc trong một vũ trụ cực
            kì dark với tông màu chủ đạo cyberpunk là signature.
          </p>
        </div>
        <ul className="footer_menu">
          <li>
            <p className="footer_title">Chính sách</p>
            <ul>
              <li>
                <Link to="/">Chính sách mua hàng</Link>
              </li>
              <li>
                <Link to="/">Chính sách vận chuyển</Link>
              </li>
              <li>
                <Link to="/">Chính sách thanh toán</Link>
              </li>
              <li>
                <Link to="/">Chính sách đổi trả</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="footer_menu">
          <li>
            <p className="footer_title">Hỗ trợ</p>
            <ul>
              <li>
                <Link to="/">Thông tin tư vấn 24/7</Link>
              </li>
              <li>
                <Link to="/">Hưỡng dẫn mua hàng</Link>
              </li>
              <li>
                <Link to="/">Hướng dẫn thanh toán</Link>
              </li>
              <li>
                <Link to="/">Hướng dẫn đổi trả</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="footer_menu">
          <li>
            <p className="footer_title">Sản phẩm</p>
            <ul>
              {menus
                ?.find((item) => item?.url === '/products')
                ?.children?.map((item) => (
                  <li>
                    <Link to={`/products${item?.url}`}>{item?.text}</Link>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
        <div className="footer_contact">
          <p className="footer_title">Thông tin liên hệ</p>
          <p>Địa chỉ: {location?.address}</p>
          <p>Email: {location?.email}</p>
          <p>Số điện thoại: {location?.mobile}</p>
          <p className="footer_title connect">Kết nối với chúng tôi</p>
          <div className="image_box">
            <a href="https://www.facebook.com/profile.php?id=100034814550396" target="_blank">
              <img src={facebook} alt="fabook icon" />
            </a>
            {/* <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="footer_license">
        <div className="container">
          <p>
            © 2023 tunganh.vga.store. All Rights Reserved. Develop by{' '}
            <a target="_blank" href="https://vgasoft.vn/" rel="noreferrer">
              LongHM
            </a>{' '}
            Design
          </p>
          <div className="image_box">
            <img src={shopee} alt="" />
            <img src={tiki} alt="" />
            <img src={lazada} alt="" />
            <img src={sendo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
