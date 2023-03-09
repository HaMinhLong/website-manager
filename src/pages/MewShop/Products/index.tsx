/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useState, useEffect } from 'react';
import { Row, Col, Radio, Space, Pagination } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';

// PROJECT IMPORT
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import article1 from 'static/MewShop/images/home/articles-1.jpg';
import article2 from 'static/MewShop/images/home/articles-2.jpg';
import article3 from 'static/MewShop/images/home/articles-3.jpeg';
import article4 from 'static/MewShop/images/home/articles-4.jpg';
import filter from 'static/MewShop/images/product/filter.png';
import closeFilter from 'static/MewShop/images/product/filter_close.png';
import { ProductType, PaginationType } from 'types/product';
import { CategoryType } from 'types/category';
import { ProducerType } from 'types/producer';
import { formatPrice, getSale } from 'utils/utils';
import { useDispatch } from 'app/store';
import Loading from 'components/Extended/Loading';
import { ArticleType } from 'types/articles';
import moment from 'moment';

const END_POINT = process.env.REACT_APP_SERVER;
const PAGE_SIZE = 12;

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [sort, setSort] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType>({});
  const [producers, setProducers] = useState<ProducerType[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({});
  const [categoryChild, setCategoryChild] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<any>({
    page: 1
  });
  const [article, setArticle] = useState<ArticleType[]>([]);

  const { url, urlChild, collection } = params;

  useEffect(() => {
    getDetailCategory();
    getListArticle();
  }, [url, urlChild, collection]);

  useEffect(() => {
    if (category?.id && !collection) {
      getList();
      getListProducer();
    } else {
      setProducts([]);
      setProducers([]);
    }
  }, [category]);

  useEffect(() => {
    getList();
  }, [filters]);

  const getDetailCategory = () => {
    setLoading(true);
    dispatch({
      type: 'category/getOneUrl',
      payload: {
        id: urlChild || url || collection,
        params: { findChild: !collection }
      },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: {
              list: { category, children }
            }
          } = res;
          setCategory(category);
          setCategoryChild(children);
        }
      }
    });
  };

  const getList = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        categoryId: category?.id
      }),
      range: JSON.stringify([filters?.page * PAGE_SIZE - PAGE_SIZE, filters?.page * PAGE_SIZE]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,name,price,isSale,images,negotiablePrice,createdAt,url'
    };

    dispatch({
      type: 'product/fetch',
      payload: params,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list, pagination }
          } = res;
          setProducts(list);
          setPagination(pagination);
        }
      }
    });
  };

  const getListProducer = () => {
    let params = {
      filter: JSON.stringify({
        websiteId: 1,
        categoryId: category.id
      })
    };

    dispatch({
      type: 'product/producer',
      payload: params,
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          setProducers(list);
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
      range: JSON.stringify([0, 4]),
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

  return (
    <>
      <BreadCrumb node1={category?.text} />
      <section className="products_page container">
        <h1 className="page_title type_2">{category?.text}</h1>
        <p>{category?.description}</p>
        {!urlChild && (
          <div className="categories_box">
            {categoryChild?.map((item) => (
              <div className="category" key={item?.id} onClick={() => navigate(`/products${category?.url}${item?.url}`)}>
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
        )}
        <div className="main_section" style={{ marginTop: '20px' }}>
          <div className="left_side">
            <div className="filter_box">
              <div className="brand">
                <p className="main_title">Thương hiệu</p>
                <Radio.Group onChange={(e) => setBrand(e.target.value)} value={brand}>
                  <Space direction="vertical">
                    <Radio value="">Tất cả</Radio>
                    {producers?.map((item) => (
                      <Radio value={item?.id} key={item?.id}>
                        {item?.name}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </div>

              <div className="price">
                <p className="main_title">Lọc giá</p>
                <Radio.Group onChange={(e) => setPrice(e.target.value)} value={price}>
                  <Space direction="vertical">
                    <Radio value="">Tất cả</Radio>
                    <Radio value={1}>Giá dưới 100.000đ</Radio>
                    <Radio value={2}>100.000đ - 200.000đ</Radio>
                    <Radio value={3}>200.000đ - 500.000đ</Radio>
                    <Radio value={4}>500.000đ - 1.000.000đ</Radio>
                    <Radio value={5}>1.000.000đ - 2.000.000đ</Radio>
                    <Radio value={6}>Giá trên 2.000.000đ</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>

            <div className="articles_box">
              <div className="main_title">TIN TỨC MỚI NHẤT</div>
              {article?.map((item) => (
                <div className="article">
                  <div
                    className="image_box"
                    onClick={() => {
                      navigate(`/article/${item?.url}`);
                    }}
                  >
                    <img src={`${END_POINT}${item?.images?.split(',')[0]}`} alt={item?.title} />
                  </div>
                  <div className="content">
                    <Link to={`/article/${item?.url}`} className="article_title">
                      {item?.title}
                    </Link>
                    <p className="date">{moment(item?.createdAt).format('DD/MM/YYYY')}</p>
                  </div>
                </div>
              ))}
              <Link to="/articles">Xem thêm</Link>
            </div>
          </div>

          <div className="right_side">
            <div className="sort">
              <p className="main_title">Sắp xếp: </p>
              <div className="box">
                <Radio.Group onChange={(e) => setSort(e.target.value)} value={sort}>
                  <Radio value={1}>A ➞ Z</Radio>
                  <Radio value={2}>Z ➞ A</Radio>
                  <Radio value={3}>Giá tăng dần</Radio>
                  <Radio value={4}>Giá giảm dần</Radio>
                  <Radio value={5}>Hàng mới nhất</Radio>
                  <Radio value={6}>Hàng cũ nhất</Radio>
                </Radio.Group>
              </div>
            </div>
            <Row gutter={[32, 5]} className="products">
              {products?.map((item) => (
                <Col xs={12} md={8} lg={8} xl={6} key={item?.id}>
                  <div className="product" style={{ marginBottom: '10px' }}>
                    <Link to={`${collection ? item?.category?.url : category?.url}/${item?.url}`} className="image_box">
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
                      <Link to={`${collection ? item?.category?.url : category?.url}/${item?.url}`}>{item?.name} </Link>
                      <p className="price">
                        {item?.isSale ? formatPrice(item?.negotiablePrice) : formatPrice(item?.price)}{' '}
                        {item?.isSale && <del>{formatPrice(item?.price)}</del>}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
              {products?.length === 0 && (
                <Col xl={24} lg={24} md={24} xs={24}>
                  <p style={{ textAlign: 'center', color: '#ff0000' }}>Không có sản phẩm nào trong danh mục này.</p>
                </Col>
              )}
              {products?.length > 0 && (
                <Col xl={24} lg={24} md={24} xs={24}>
                  <Pagination
                    defaultCurrent={pagination?.current}
                    size="default"
                    pageSize={PAGE_SIZE}
                    total={pagination?.total}
                    className="paginationPage"
                    style={{ marginTop: '30px' }}
                    onChange={(page) => setFilters({ ...filters, page: page })}
                  />
                </Col>
              )}
            </Row>
          </div>
          <div className={openFilter ? 'filter_mobile active' : 'filter_mobile'}>
            <img src={openFilter ? closeFilter : filter} alt="" onClick={() => setOpenFilter(!openFilter)} />
            <div className="filter_box">
              <div className="brand">
                <p className="main_title">Thương hiệu</p>
                <Radio.Group onChange={(e) => setBrand(e.target.value)} value={brand}>
                  <Space direction="vertical">
                    <Radio value="">Tất cả</Radio>
                    {producers?.map((item) => (
                      <Radio value={item?.id} key={item?.id}>
                        {item?.name}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </div>

              <div className="price">
                <p className="main_title">Lọc giá</p>
                <Radio.Group onChange={(e) => setPrice(e.target.value)} value={price}>
                  <Space direction="vertical">
                    <Radio value={1}>Giá dưới 100.000đ</Radio>
                    <Radio value={2}>100.000đ - 200.000đ</Radio>
                    <Radio value={3}>200.000đ - 500.000đ</Radio>
                    <Radio value={4}>500.000đ - 1.000.000đ</Radio>
                    <Radio value={5}>1.000.000đ - 2.000.000đ</Radio>
                    <Radio value={6}>Giá trên 2.000.000đ</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
            <div className={openFilter ? 'bg active' : 'bg'} onClick={() => setOpenFilter(false)}></div>
          </div>
        </div>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default Products;
