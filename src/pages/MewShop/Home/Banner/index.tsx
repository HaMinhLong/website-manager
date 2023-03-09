// THIRD IMPORT
import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

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
      attributes: 'images'
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

  const banner = useMemo(
    () => (
      <section className="banner_home">
        <OwlCarousel
          className="owl-theme"
          dots={false}
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
            <img src={`${END_POINT}${item}`} alt="banner" key={item} />
          ))}
        </OwlCarousel>
      </section>
    ),
    [detail]
  );

  return banner;
};

export default Index;
