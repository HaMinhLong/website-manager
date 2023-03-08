// PROJECT IMPORT
import 'static/DailySupplies/css/Header.scss';

// ICONS IMPORT

// IMAGES IMPORT
import LogoDark from 'static/DailySupplies/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="header__box container">
        <div className="image__box">
          <img src={LogoDark} alt="logo dark" />
        </div>
        <div className="navigation__box">
          <ul>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Sản phẩm</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
