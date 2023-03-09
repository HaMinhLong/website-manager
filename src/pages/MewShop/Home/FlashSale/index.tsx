// THIRD IMPORT
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// PROJECT IMPORT
import { useDispatch } from 'app/store';

import hotSale from 'static/MewShop/images/home/hot-sale.png';
import { ReactComponent as Time } from 'static/MewShop/images/home/time.svg';
import { CategoryType } from 'types/category';
import { formatPrice, getSale } from 'utils/utils';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(20);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState<CategoryType>({});

  useEffect(() => {
    getDetailCategory();
  }, []);

  const getDetailCategory = () => {
    dispatch({
      type: 'collection/getOne',
      payload: { id: 1 },
      callback: (res) => {
        if (res?.success) {
          const {
            results: {
              list: { category, products }
            }
          } = res;
          setCategory(category);
          setProducts(products);
        }
      }
    });
  };

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

  //   const CountDownTimer = (dt: string, id: string) => {
  //     let end: any = new Date(dt);
  //     let _second = 1000;
  //     let _minute = _second * 60;
  //     let _hour = _minute * 60;
  //     let _day = _hour * 24;
  //     let timer: any;

  //     const showRemaining = () => {
  //       let now: any = new Date();
  //       let distance = end - now;
  //       if (distance < 0) {
  //         clearInterval(timer);
  //         const text = document.getElementById(id);
  //         if (text) text.innerHTML = "ĐÃ HẾT THỜI GIAN SALE!";
  //         return;
  //       }
  //       let days = Math.floor(distance / _day);
  //       let hours = Math.floor((distance % _day) / _hour);
  //       let minutes = Math.floor((distance % _hour) / _minute);
  //       let seconds = Math.floor((distance % _minute) / _second);
  //       setDate(days);
  //       setHour(hours);
  //       setMinute(minutes);
  //       setSecond(seconds);
  //     };

  //     timer = setInterval(showRemaining, 1000);
  //   };

  return (
    <section className="products_home">
      <div className="products_list sale">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">{category?.text}</p>
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
        <p style={{ marginBottom: '5px', textAlign: 'center' }}>{category?.description}</p>
        <div className="list">
          <OwlCarousel
            className="owl-theme"
            dots={false}
            items={4}
            margin={10}
            autoplay
            loop
            touchDrag={true}
            responsive={{
              0: {
                items: 2,
                stagePadding: 0
              },
              600: {
                items: 2,
                stagePadding: 0
              },
              1024: {
                items: 2,
                stagePadding: 0
              },
              1300: {
                items: 3,
                stagePadding: 0
              }
            }}
            key={`carousel_shirt`}
          >
            {products?.map((item) => (
              <div style={{ width: '100%' }} className="product" key={item?.id}>
                <Link to={`${item?.category?.url}/${item?.url}`} className="image_box">
                  <div className="ct">Chi tiết</div>
                  <img src={`${END_POINT}${item?.images?.split(',')[0]}`} alt={item?.name} />
                  <img src={`${END_POINT}${item?.images?.split(',')[1]}`} alt={item?.name} />
                </Link>
                {item?.isSale && (
                  <div className="sale_box">
                    <p>-{getSale(item?.price, item?.negotiablePrice)}%</p>
                  </div>
                )}
                <div className="content">
                  <Link to={`${item?.category?.url}/${item?.url}`}>{item?.name} </Link>
                  <p className="price">
                    {item?.isSale ? formatPrice(item?.negotiablePrice) : formatPrice(item?.price)}{' '}
                    {item?.isSale && <del>{formatPrice(item?.price)}</del>}
                  </p>
                  <div className="status">
                    <img style={{ width: '17px', height: '17px' }} src={hotSale} alt="" />
                    <p>Sắp cháy hàng</p>
                    <div className="bg"></div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
        {/* <Link to={`/collection${category?.url}`} className="btn btn_more">
          Xem thêm
        </Link> */}
      </div>
      <div
        className="bg_home sale"
        style={{
          backgroundImage: `url(${`${END_POINT}${category?.images?.split(',')[0]}`})`
        }}
      >
        <div className="introduce">
          <p className="title_type_1">Sự kiện trong tuần</p>
          <p className="title_type_2">{category?.text}</p>
          <p className="short_description">Chỉ Áp dụng khi Đặt hàng qua Website</p>
          {/* <Link to={`/collection${category?.url}`} className="btn btn_more">
            Xem thêm
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
