// THIRD IMPORT
import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

// PROJECT IMPORT

import { ArticleType } from 'types/articles';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<ArticleType>({ content: '' });

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    let params = {
      filter: JSON.stringify({ status: 1, websiteId: 1, categoryId: 6 }),
      range: JSON.stringify([0, 4]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'images,description'
    };

    dispatch({
      type: 'article/fetch',
      payload: params,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setDetail(list?.[0]);
        }
      }
    });
  };

  console.log('banner home', detail);

  const banner = useMemo(
    () => (
      <section className="banner_home">
        {detail?.images && (
          <OwlCarousel
            className="owl-theme"
            dots={true}
            items={1}
            margin={10}
            autoplay
            loop
            touchDrag={true}
            responsive={{
              0: {
                items: 1,
                stagePadding: 0
              }
            }}
            key={`carousel_article`}
          >
            {detail?.images?.split(',')?.map((item) => (
              <img className="banner__img" src={`${END_POINT}${item}`} alt="banner" key={item} />
            ))}
          </OwlCarousel>
        )}
        <div className="content__banner">
          <p className="smallTitle__content--banner">{detail?.description?.split('//')?.[0]}</p>
          <p className="title__content--banner">{detail?.description?.split('//')?.[1]}</p>
          <Link to={`products/${detail?.description?.split('//')?.[2] || 'quan-ao'}`}>
            <span>Shop Now</span>
          </Link>
        </div>
      </section>
    ),
    [detail]
  );

  return banner;
};

export default Index;
