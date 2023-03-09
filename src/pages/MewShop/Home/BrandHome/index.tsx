// THIRD IMPORT
import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

// PROJECT IMPORT
import { CategoryType } from 'types/category';
import Loading from 'components/Extended/Loading';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();

  const [detail, setDetail] = useState<CategoryType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    dispatch({
      type: 'category/getOne',
      payload: { id: 7 },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setDetail(list);
        }
      }
    });
  };

  const brandHome = useMemo(
    () => (
      <section className="brand_top container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">{detail?.text?.toUpperCase()}</p>
          </div>
        </div>
        <div className="image_box">
          {detail?.images && (
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
                  items: 4,
                  stagePadding: 0
                },
                600: {
                  items: 6,
                  stagePadding: 0
                },
                1024: {
                  items: 7,
                  stagePadding: 0
                },
                1300: {
                  items: 10,
                  stagePadding: 0
                }
              }}
              key={`carousel_article`}
            >
              {detail?.images?.split(',').map((item, index) => (
                <div data-aos="fade-left" data-aos-delay={(index + 1) * 50}>
                  <img key={item} src={`${END_POINT}${item}`} alt="brand" />
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
        <Loading loading={loading} />
      </section>
    ),
    [detail]
  );

  return brandHome;
};

export default Index;
