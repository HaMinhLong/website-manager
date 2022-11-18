// THIRD IMPORT
import { Link } from "react-router-dom";

// PROJECT IMPORT
import logo from "static/MewShop/images/home/logo.png";
import facebook from "static/MewShop/images/home/facebook.png";
import twitter from "static/MewShop/images/home/twitter.png";
import instagram from "static/MewShop/images/home/instagram.png";
import youtube from "static/MewShop/images/home/youtube.png";
import shopee from "static/MewShop/images/home/shopee.png";
import tiki from "static/MewShop/images/home/tiki.png";
import lazada from "static/MewShop/images/home/lazada.png";
import sendo from "static/MewShop/images/home/sendo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo">
          <img src={logo} alt="" />
          <p>
            Chúng tôi được thành lập từ tháng 4 năm 2020, với sứ mệnh đem lại
            những cảm giác hoàn toàn dị biệt khi lạc trong một vũ trụ cực kì
            dark với tông màu chủ đạo cyberpunk là signature.
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
              <li>
                <Link to="/">Áo thun</Link>
              </li>
              <li>
                <Link to="/">Quần short</Link>
              </li>
              <li>
                <Link to="/">Sơ mi dài tay</Link>
              </li>
              <li>
                <Link to="/">Sơ mi ngắn tay</Link>
              </li>
              <li>
                <Link to="/">Quần dài</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="footer_contact">
          <p className="footer_title">Thông tin liên hệ</p>
          <p>Địa chỉ: 442 Đội Cấn - Ba Đình - Hà Nội</p>
          <p>Email: support@sapo.vn</p>
          <p>Số điện thoại: 1800 6750</p>
          <p className="footer_title connect">Kết nối với chúng tôi</p>
          <div className="image_box">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <div className="footer_license">
        <div className="container">
          <p>
            © 2021 fashion.vgasoft.vn. All Rights Reserved. Develop by{" "}
            <a target="_blank" href="https://vgasoft.vn/" rel="noreferrer">
              VGA SOFT
            </a>{" "}
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
