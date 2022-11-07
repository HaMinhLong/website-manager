// THIRD IMPORT
import React, { useState } from "react";
import { Link } from "react-router-dom";

// PROJECT IMPORT
import Banner from "pages/Home/Banner";
import ArticleHome from "pages/Home/ArticleHome";
import BrandHome from "pages/Home/BrandHome";
import ShirtHome from "pages/Home/ShirtHome";
import ShortHome from "pages/Home/ShortHome";
import TShirtHome from "pages/Home/TShirtHome";

// STATIC IMPORT
import bgProductOne from "static/images/home/bg-product-1.jpg";
import bgProductTwo from "static/images/home/bg-product-2.jpg";

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

      <TShirtHome />
      <ShortHome />
      <ShirtHome />
      <ArticleHome />
      <BrandHome />
    </React.Fragment>
  );
};

export default Home;
