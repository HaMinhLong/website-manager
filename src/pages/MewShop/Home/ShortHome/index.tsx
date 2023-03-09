// THIRD IMPORT
import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// PROJECT IMPORT
import { useDispatch } from 'app/store';
import { formatPrice, getSale } from 'utils/utils';
import { CategoryType } from 'types/category';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState<any>([]);
  const [category, setCategory] = useState<CategoryType>({});

  useEffect(() => {
    getList();
    getDetailCategory();
  }, []);

  const getDetailCategory = () => {
    dispatch({
      type: 'category/getOne',
      payload: { id: 13 },
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setCategory(list);
        }
      }
    });
  };

  const getList = () => {
    let params = {
      filter: JSON.stringify({ status: 1, websiteId: 1, categoryId: 13 }),
      range: JSON.stringify([0, 10]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,name,images,price,negotiablePrice,isSale,createdAt,url'
    };

    dispatch({
      type: 'product/fetch',
      payload: params,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setProducts(list);
        }
      }
    });
  };

  const shortHome = useMemo(
    () => (
      <section className="products_home">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">{category?.text}</p>
            </div>
          </div>
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
                  <div className="product" style={{ width: '100%' }} key={item?.id}>
                    <div className="image_box" onClick={() => navigate(`${category?.url}/${item?.url}`)}>
                      <div className="ct">Chi tiết</div>
                      <img src={`${END_POINT}${item?.images?.split(',')[0]}`} alt={item?.name} />
                      <img src={`${END_POINT}${item?.images?.split(',')[1]}`} alt={item?.name} />
                    </div>
                    {item?.isSale && (
                      <div className="sale_box">
                        <p>-{getSale(item?.price, item?.negotiablePrice)}%</p>
                      </div>
                    )}
                    <div className="content">
                      <Link to={`${category?.url}/${item?.url}`}>{item?.name} </Link>
                      <p className="price">
                        {item?.isSale ? formatPrice(item?.negotiablePrice) : formatPrice(item?.price)}{' '}
                        {item?.isSale && <del>{formatPrice(item?.price)}</del>}
                      </p>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
          <Link to={`/products${category?.url}`}>Xem thêm</Link>
        </div>

        <div
          className="bg_home"
          style={{
            backgroundImage: `url(${`${END_POINT}${category?.images?.split(',')[0]}`})`
          }}
        >
          <div className="introduce">
            <p className="title_type_1">SẢN PHẨM HOT</p>
            <p className="title_type_2">{category?.text}</p>
            <p className="short_description">{category?.description}</p>

            <Link to={`/products${category?.url}`} className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
    ),
    [category, products]
  );

  return shortHome;
};

export default Index;
