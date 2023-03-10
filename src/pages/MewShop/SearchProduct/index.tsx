// THIRD IMPORT
import { useState, useEffect } from 'react';
import { Row, Col, Radio, Space, Pagination } from 'antd';
import { useLocation, Link } from 'react-router-dom';

// PROJECT IMPORT
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import { useDispatch } from 'app/store';
import 'static/MewShop/css/searchProject.css';
import { ProductType, PaginationType } from 'types/product';
import Loading from 'components/Extended/Loading';
import { formatPrice, getSale } from 'utils/utils';
import closeFilter from 'static/MewShop/images/product/filter_close.png';
import filter from 'static/MewShop/images/product/filter.png';

const PAGE_SIZE = 12;
const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<PaginationType>({});
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState<any>({
    page: 1
  });

  const searchParams = search?.split('?')[1];

  useEffect(() => {
    getListProduct();
  }, []);

  useEffect(() => {
    getListProduct();
  }, [filters, sort, price]);

  const getListProduct = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        name: searchParams,
        negotiablePrice: price || ''
      }),
      range: JSON.stringify([filters?.page * PAGE_SIZE - PAGE_SIZE, filters?.page * PAGE_SIZE]),
      sort: JSON.stringify(sort ? sort?.split(',') : ['createdAt', 'DESC']),
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

  return (
    <>
      <BreadCrumb node1={'Tìm kiếm sản phẩm'} node2={searchParams} />
      <section className="products_page container">
        {products?.length > 0 && (
          <Col xl={24} lg={24} md={24} xs={24}>
            {' '}
            <p style={{ fontStyle: 'italic' }}>
              {' '}
              Sản phẩm phù hợp với tìm kiếm: <span style={{ fontWeight: 'bold' }}>{searchParams}</span>{' '}
            </p>{' '}
          </Col>
        )}
        <div className="main_section" style={{ marginTop: '20px' }}>
          <div className="left_side">
            <div className="filter_box">
              <div className="price">
                <p className="main_title">Lọc giá</p>
                <Radio.Group onChange={(e) => setPrice(e.target.value)} value={price}>
                  <Space direction="vertical">
                    <Radio value="">Tất cả</Radio>
                    <Radio value={'0,100000'}>Giá dưới 100.000đ</Radio>
                    <Radio value={'100000,200000'}>100.000đ - 200.000đ</Radio>
                    <Radio value={'200000,500000'}>200.000đ - 500.000đ</Radio>
                    <Radio value={'500000,1000000'}>500.000đ - 1.000.000đ</Radio>
                    <Radio value={'1000000,2000000'}>1.000.000đ - 2.000.000đ</Radio>
                    <Radio value={'2000000,90000000000'}>Giá trên 2.000.000đ</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className="right_side">
            <div className="sort">
              <p className="main_title">Sắp xếp: </p>
              <div className="box">
                <Radio.Group onChange={(e) => setSort(e.target.value)} value={sort}>
                  <Radio value={'name,ASC'}>A ➞ Z</Radio>
                  <Radio value={'name,DESC'}>Z ➞ A</Radio>
                  <Radio value={'negotiablePrice,ASC'}>Giá tăng dần</Radio>
                  <Radio value={'negotiablePrice,DESC'}>Giá giảm dần</Radio>
                  <Radio value={'createdAt,DESC'}>Hàng mới nhất</Radio>
                  <Radio value={'createdAt,ASC'}>Hàng cũ nhất</Radio>
                </Radio.Group>
              </div>
            </div>
            <Row gutter={[24, 5]} className="products">
              {products?.map((item) => (
                <Col xs={12} md={8} lg={8} xl={6} key={item?.id}>
                  <div className="product" style={{ marginBottom: '10px', width: '100%' }}>
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
                    </div>
                  </div>
                </Col>
              ))}
              {products?.length === 0 && (
                <Col xl={24} lg={24} md={24} xs={24}>
                  <p style={{ textAlign: 'center', color: '#ff0000' }}>Không có sản phẩm nào phù hợp với tìm kiếm của bạn.</p>
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
              <div className="price">
                <p className="main_title">Lọc giá</p>
                <Radio.Group onChange={(e) => setPrice(e.target.value)} value={price}>
                  <Space direction="vertical">
                    <Radio value="">Tất cả</Radio>
                    <Radio value={'0,100000'}>Giá dưới 100.000đ</Radio>
                    <Radio value={'100000,200000'}>100.000đ - 200.000đ</Radio>
                    <Radio value={'200000,500000'}>200.000đ - 500.000đ</Radio>
                    <Radio value={'500000,1000000'}>500.000đ - 1.000.000đ</Radio>
                    <Radio value={'1000000,2000000'}>1.000.000đ - 2.000.000đ</Radio>
                    <Radio value={'2000000,90000000000'}>Giá trên 2.000.000đ</Radio>
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

export default Index;
