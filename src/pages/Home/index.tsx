// THIRD IMPORT
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// PROJECT IMPORT
import Banner from "pages/Home/Banner";
import ArticleHome from "pages/Home/ArticleHome";
import BrandHome from "pages/Home/BrandHome";

// STATIC IMPORT
import bgProductOne from "static/images/home/bg-product-1.jpg";
import bgProductTwo from "static/images/home/bg-product-2.jpg";
import bgProductThree from "static/images/home/bg-product-3.jpg";
import bgProductFour from "static/images/home/bg-product-4.jpg";

import somi1 from "static/images/home/somi-1.jpg";
import somi2 from "static/images/home/somi-2.jpg";
import somi3 from "static/images/home/somi-3.jpg";
import sort1 from "static/images/home/sort-1.jpg";
import sort2 from "static/images/home/sort-2.jpg";
import sort3 from "static/images/home/sort-3.jpg";
import shirt11 from "static/images/home/shirt-1-1.jpg";
import shirt12 from "static/images/home/shirt-1-2.jpg";
import shirt21 from "static/images/home/shirt-2-1.jpg";
import shirt22 from "static/images/home/shirt-2-2.jpg";
import shirt31 from "static/images/home/shirt-3-1.jpg";
import shirt32 from "static/images/home/shirt-3-2.jpg";
import hotSale from "static/images/home/hot-sale.png";
import { ReactComponent as Time } from "static/images/home/time.svg";

const Home = () => {
  const [date, setDate] = useState(20);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   const date = moment().format("L");
  //   const day = date.split("/")[1];
  //   const month =
  //     parseInt(date.split("/")[0]) + 2 > 12
  //       ? parseInt(date.split("/")[0]) + 2 - 12
  //       : parseInt(date.split("/")[0]) + 2;
  //   const year =
  //     parseInt(date.split("/")[0]) + 2 > 12
  //       ? parseInt(date.split("/")[2]) + 1
  //       : date.split("/")[2];
  //   CountDownTimer(`${month}/${day}/${year}`, "count_down");
  // }, []);

  const CountDownTimer = (dt: string, id: string) => {
    let end: any = new Date(dt);
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer: any;

    const showRemaining = () => {
      let now: any = new Date();
      let distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        const text = document.getElementById(id);
        if (text) text.innerHTML = "ĐÃ HẾT THỜI GIAN SALE!";
        return;
      }
      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      let seconds = Math.floor((distance % _minute) / _second);
      setDate(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    };

    timer = setInterval(showRemaining, 1000);
  };
  return (
    <React.Fragment>
      <Banner />

      <section className="products_home">
        <div className="products_list sale">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">flash sale</p>
            </div>
          </div>
          <div id="count_down">
            <Time />
            <p id="text_time">Thời gian: </p>
            <p id="date">{date} NGÀY</p>
            {/* <p id="hour">{hour}</p>
            <p id="minute">{minute}</p>
            <p id="second">{second}</p> */}
          </div>
          <p style={{ marginBottom: "5px", textAlign: "center" }}>
            Hàng loạt bản mẫu. Hàng loạt cải tiến. Hàng loạt thử nghiệm.
          </p>
          <div className="list">
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt11} alt="" />
                <img src={shirt12} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>Sắp cháy hàng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt21} alt="" />
                <img src={shirt22} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
                <div className="status active">
                  <p>còn hàng</p>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">199.000₫</p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>Sắp cháy hàng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home sale"
          style={{ backgroundImage: `url(${bgProductOne})` }}
        >
          <div className="introduce">
            <p className="title_type_1">Sự kiện trong tuần</p>
            <p className="title_type_2">flash sale</p>
            <p className="short_description">
              Chỉ Áp dụng khi Đặt hàng qua Website
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">áo thun t-shirt</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt11} alt="" />
                <img src={shirt12} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt21} alt="" />
                <img src={shirt22} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductTwo})` }}
        >
          <div className="introduce">
            <p className="title_type_1">sản phẩm mới</p>
            <p className="title_type_2">t-shirt</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">quần sort</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Quần sort M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Quần sor M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort3} alt="" />
              </div>
              <div className="content">
                <Link to="/">Quần sor M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>

        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductThree})` }}
        >
          <div className="introduce">
            <p className="title_type_1">SẢN PHẨM HOT</p>
            <p className="title_type_2">QUẦN SHORT</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">áo sơ mi</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi3} alt="" />
              </div>
              <div className="content">
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductFour})` }}
        >
          <div className="introduce">
            <p className="title_type_1">THỜI TRANG</p>
            <p className="title_type_2">ÁO SƠ MI</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <ArticleHome />
      <BrandHome />
    </React.Fragment>
  );
};

export default Home;
