// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// PROJECT IMPORT
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import Loading from 'components/Extended/Loading';
import article1 from 'static/MewShop/images/home/articles-1.jpg';
import article2 from 'static/MewShop/images/home/articles-2.jpg';
import article3 from 'static/MewShop/images/home/articles-3.jpeg';
import article4 from 'static/MewShop/images/home/articles-4.jpg';

// TYPES IMPORT
import { ArticleType } from 'types/articles';
import moment from 'moment';

const Index = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { url } = params;

  const [detail, setDetail] = useState<ArticleType>({ content: '' });
  const [article, setArticle] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getOne();
    getListArticle();
  }, []);

  const getOne = () => {
    dispatch({
      type: 'article/getOneUrl',
      payload: { id: url },
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

  const getListArticle = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        url: '',
        categoryId: 8
      }),
      range: JSON.stringify([0, 5]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,title,images,description,createdAt,url'
    };

    dispatch({
      type: 'article/fetch',
      payload: params,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setArticle(list);
        }
      }
    });
  };

  const renderClassName = (index: number) => {
    switch (index) {
      case 0:
        return 'article one';
      case 1:
        return 'article two';
      case 2:
        return 'article three';
      case 3:
        return 'article four';
      default:
        return 'article five';
    }
  };

  return (
    <>
      <BreadCrumb node1={'Tin tức'} type2 urlNode1={'/articles'} node2={detail?.title} />
      <section className="article_details_page container">
        <Row gutter={[48, 32]}>
          <Col xl={16} lg={16} md={24} xs={24} className="details">
            <p className="title_article_details">{detail?.title}</p>
            <div className="descriptions">
              <div dangerouslySetInnerHTML={{ __html: detail?.content }} />
            </div>
          </Col>
          <Col xl={8} lg={8} md={24} xs={24}>
            <div className="part_one">
              <p className="articles_page_title">Tin tức {'&'} sự kiện</p>
              <div className="divider"></div>
              <div className="articles_box">
                {article?.map((item, index) => (
                  <div className={renderClassName(index)}>
                    <div className="image_box"></div>
                    <div className="content">
                      <Link to={`/article/${item?.url}`} className="article_title">
                        {item?.title}
                      </Link>
                      <p className="date">Ngày đăng: {moment(item?.createdAt).format('DD/MM/YYYY')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Index;
