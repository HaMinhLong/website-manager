/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useState, useEffect } from "react";
import BreadCrumb from "layout/BreadCrumb";
import { Pagination, Row, Col } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";

// PROJECT IMPORT
import Loading from "components/Extended/Loading";
import article1 from "static/images/home/articles-1.jpg";
import article2 from "static/images/home/articles-2.jpg";
import article3 from "static/images/home/articles-3.jpeg";
import article4 from "static/images/home/articles-4.jpg";

// TYPES IMPORT
import { ArticleType } from "types/articles";

const END_POINT = process.env.REACT_APP_SERVER;
const PAGE_SIZE = 3;

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { url } = params;

  const [article, setArticle] = useState<ArticleType[]>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getList();
  }, [url]);

  const getList = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        url: url || "",
        categoryId: url ? "" : 3,
      }),
      range: JSON.stringify([0, 3]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,title,images,description,createdAt,url",
    };

    dispatch({
      type: "article/fetch",
      payload: params,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list, pagination },
          } = res;
          setArticle(list);

          setPagination(pagination);
        }
      },
    });
  };

  const handleTableChange = (page: number) => {
    const query = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        url: url || "",
        categoryId: url ? "" : 3,
      }),
      range: JSON.stringify([page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,title,images,description,createdAt,url",
    };

    dispatch({
      type: "article/fetch",
      payload: query,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list, pagination },
          } = res;
          setArticle(list);

          setPagination(pagination);
        }
      },
    });
  };

  return (
    <>
      <BreadCrumb node1={"Tin tức"} />
      <section className="articles_page container">
        <Row gutter={[32, 32]}>
          <Col xl={16} lg={16} md={24} xs={24} className="articles_container">
            <Row gutter={[32, 32]}>
              {article?.map((item, index) => (
                <Col
                  xl={index === 0 ? 24 : 12}
                  lg={index === 0 ? 24 : 12}
                  md={index === 0 ? 24 : 12}
                  xs={24}
                  key={item?.id}
                >
                  <div className={index === 0 ? "article first" : "article"}>
                    <div
                      className="image_box"
                      onClick={() => {
                        navigate(`/article/${item?.url}`);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`${END_POINT}${item?.images?.split(",")[0]}`}
                        alt={item?.title}
                      />
                      <div className="overlay"></div>
                    </div>

                    <div className="content">
                      <Link
                        to={`/article/${item?.url}`}
                        className="article_title"
                      >
                        {item?.title}
                      </Link>
                      <p className="date">
                        {moment(item?.createdAt).format("DD/MM/YYYY")}
                      </p>
                      <p className="article_short_description">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}

              {article?.length > 0 && (
                <Col xl={24} lg={24} md={24} xs={24}>
                  <Pagination
                    defaultCurrent={pagination?.current}
                    size="default"
                    pageSize={3}
                    total={pagination?.total}
                    className="paginationPage"
                    onChange={(page) => handleTableChange(page)}
                  />
                </Col>
              )}
            </Row>
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
            </div>
          </Col>
        </Row>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Index;
