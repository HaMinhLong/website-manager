// THIRD IMPORT
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import OwlCarousel from 'react-owl-carousel';

// TYPES IMPORT
import { ArticleType } from 'types/articles';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();

  const [article, setArticle] = useState<ArticleType[]>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    let params = {
      filter: JSON.stringify({ status: 1, websiteId: 1, categoryId: 8 }),
      range: JSON.stringify([0, 10]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,title,images,description,createdAt,url'
    };

    dispatch({
      type: 'article/fetch',
      payload: params,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setArticle(list);
        }
      }
    });
  };

  const articleHome = useMemo(
    () => (
      <section className="articles_home container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">tin tức - sự kiện</p>
          </div>
        </div>

        <div className="articles_container">
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
                items: 1,
                stagePadding: 0
              },
              600: {
                items: 2,
                stagePadding: 0
              },
              1024: {
                items: 3,
                stagePadding: 0
              },
              1300: {
                items: 4,
                stagePadding: 0
              }
            }}
            key={`carousel_article`}
          >
            {article?.map((item, index) => (
              <div className="article" key={item?.id} data-aos="fade-left" data-aos-delay={(index + 1) * 50} style={{ width: '100%' }}>
                <div className="image_box" style={{ cursor: 'pointer' }}>
                  <img src={`${END_POINT}${item?.images?.split(',')[0]}`} alt={item?.title} />
                  <div className="overlay"></div>
                </div>
                <div className="date_box">
                  <div className="day">{moment(item?.createdAt).format('DD')}</div>
                  <div className="year">{moment(item?.createdAt).format('MM/YYYY')}</div>
                  <div className="icon"></div>
                </div>
                <div className="content">
                  <Link to={`/article/${item?.url}`} className="article_title">
                    {item?.title}
                  </Link>
                  <p className="article_short_description">{item?.description}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    ),
    [article]
  );

  return articleHome;
};

export default Index;
