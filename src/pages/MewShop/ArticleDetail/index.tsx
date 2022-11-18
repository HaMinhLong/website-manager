// THIRD IMPORT
import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// PROJECT IMPORT
import BreadCrumb from "layout/MewShop/BreadCrumb";
import Loading from "components/Extended/Loading";
import article1 from "static/MewShop/images/home/articles-1.jpg";
import article2 from "static/MewShop/images/home/articles-2.jpg";
import article3 from "static/MewShop/images/home/articles-3.jpeg";
import article4 from "static/MewShop/images/home/articles-4.jpg";

// TYPES IMPORT
import { ArticleType } from "types/articles";

const Index = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { url } = params;

  const [detail, setDetail] = useState<ArticleType>({ content: "" });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = () => {
    dispatch({
      type: "article/getOneUrl",
      payload: { id: url },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list },
          } = res;
          setDetail(list);
        }
      },
    });
  };

  return (
    <>
      <BreadCrumb
        node1={"Tin tức"}
        type2
        urlNode1={"/articles"}
        node2={detail?.title}
      />
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
              <p className="articles_page_title">Tin tức {"&"} sự kiện</p>
              <div className="divider"></div>
              <div className="articles_box">
                <div className="article one">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article two">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article three">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article four">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article five">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
              </div>
              <Link to="/articles">Xem thêm</Link>
            </div>
            <div className="part_two">
              <p className="articles_page_title">Bài viết nổi bật</p>
              <div className="divider"></div>
              <div className="articles_box">
                <div className="article">
                  <div className="image_box">
                    <img src={article4} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article">
                  <div className="image_box">
                    <img src={article1} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article">
                  <div className="image_box">
                    <img src={article3} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article">
                  <div className="image_box">
                    <img src={article2} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article">
                  <div className="image_box">
                    <img src={article3} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
              </div>
              <Link to="/articles">Xem thêm</Link>
            </div>
          </Col>
        </Row>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Index;
