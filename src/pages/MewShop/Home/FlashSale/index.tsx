// THIRD IMPORT
import { useState, useEffect, useMemo } from 'react';
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

  const flashSale = useMemo(
    () => (
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
            <p id="date">{20} NGÀY</p>
            {/* <p id="hour">{hour}</p>
  <p id="minute">{minute}</p>
  <p id="second">{second}</p> */}
          </div>
          <p style={{ marginBottom: '5px', textAlign: 'center' }}>{category?.description}</p>
          <div className="list">
            {products?.length > 0 && (
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
            )}
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
    ),
    [category, products]
  );

  return flashSale;
};

export default Index;
