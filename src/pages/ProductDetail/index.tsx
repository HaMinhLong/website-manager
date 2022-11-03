/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { Row, Col, Modal, Collapse, Space } from "antd";
import { Link, useParams } from "react-router-dom";

// PROJECT IMPORT
import BreadCrumb from "layout/BreadCrumb";
import somi1 from "static/images/home/somi-1.jpg";
import somi2 from "static/images/home/somi-2.jpg";
import somi3 from "static/images/home/somi-3.jpg";

import { ReactComponent as Grid } from "static/images/product_details/grid.svg";
import { ReactComponent as Search } from "static/images/product_details/search.svg";
import { ReactComponent as Close } from "static/images/product_details/close.svg";
import { ReactComponent as Cart } from "static/images/home/cart.svg";
import sizeOption from "static/images/product_details/size_option.png";
import right from "static/images/product_details/right.svg";
import left from "static/images/product_details/left.svg";
import { ProductType } from "types/product";
import { CategoryType } from "types/category";
import { formatPrice } from "utils/utils";
import { useDispatch } from "app/store";
import Loading from "components/Extended/Loading";

const SIZE_IMAGE = 6;
const { Panel } = Collapse;

const END_POINT = process.env.REACT_APP_SERVER;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [numberImages, setNumberImages] = useState(SIZE_IMAGE);
  const [showAllImages, setShowAllImages] = useState(false);
  const [toggleListImage, setToggleListImage] = useState(true);
  const [indexImage, setIndexImage] = useState(0);
  const [imageScale, setImageScale] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [showSize, setShowSize] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<CategoryType>({});
  const [product, setProduct] = useState<ProductType>({
    url: "",
    content: "",
    images: "",
    price: 0,
    negotiablePrice: 0,
  });

  const { url, urlProduct } = params;

  useEffect(() => {
    getDetailProduct();
  }, [urlProduct]);

  useEffect(() => {
    getDetailCategory();
  }, [url]);

  const getDetailCategory = () => {
    dispatch({
      type: "category/getOneUrl",
      payload: { id: url },
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list },
          } = res;

          setCategory(list);
        }
      },
    });
  };

  const getDetailProduct = () => {
    dispatch({
      type: "product/getOneUrl",
      payload: { id: urlProduct },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list },
          } = res;

          setProduct(list);
        }
      },
    });
  };

  const changeItem = (e) => {
    const check = e.target.value;
    if ((check <= 999 && check >= 1) || check === "") {
      setQuantity(e.target.value ? Number(e.target.value) : e.target.value);
    }
  };
  const increaseItem = () => {
    if (quantity < 999) setQuantity((quantity || 1) + 1);
  };

  const decreaseItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <BreadCrumb node1={"Sản phẩm"} node2={product?.name} />
      <section className="product_details container">
        <style>
          {`body{
            overflow: ${showAllImages ? "hidden" : "auto"};
          }`}
        </style>
        <div className="details">
          <Row gutter={[32, 32]} className="image_box">
            <Col xs={24} lg={14} xl={16}>
              <Row gutter={[32, 32]}>
                {product?.images?.split(",").map(
                  (image, index) =>
                    index < numberImages && (
                      <Col
                        xs={24}
                        md={12}
                        key={image}
                        className="product_image"
                      >
                        <img
                          src={`${END_POINT}${image}`}
                          alt=""
                          onClick={() => {
                            setIndexImage(index);
                            setShowAllImages(true);
                          }}
                        />
                        {index === numberImages - 1 && (
                          <div
                            className="more_images"
                            onClick={() =>
                              setNumberImages(numberImages + SIZE_IMAGE)
                            }
                          >
                            <p>
                              +
                              {product?.images?.split(",")?.length -
                                numberImages}
                            </p>
                          </div>
                        )}
                      </Col>
                    )
                )}
              </Row>
            </Col>
            <Col xs={24} lg={10} xl={8}>
              <p className="product_name">{product?.name}</p>
              <p className="available">Còn hàng</p>
              <p className="brand">
                Thương hiệu:
                <span>{product?.producer?.name}</span>
              </p>
              <p className="type">
                Loại: <span>{category?.text}</span>
              </p>
              <div className="size">
                <p>Kích thước: </p>
                <ul>
                  <li className="active">
                    <p>
                      M<span>✓</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      L<span>✓</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      XL<span>✓</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="color">
                <p>Màu sắc: </p>
                <ul>
                  <li>
                    <p>Đỏ</p>
                  </li>
                  <li>
                    <p>Xanh</p>
                  </li>
                  <li className="active">
                    <p>Vàng</p>
                  </li>
                  <li>
                    <p>Hồng</p>
                  </li>
                </ul>
              </div>
              <p className="price">
                Giá:{" "}
                {product?.isSale
                  ? formatPrice(product?.negotiablePrice)
                  : formatPrice(product?.price)}{" "}
                {product?.isSale && <del>{formatPrice(product?.price)}</del>}
              </p>
              <button className="btn buy">
                <div className="bg"></div>
                <Cart />
                <span>Mua hàng</span>
                <div className="amount">
                  <div className="tru" onClick={() => decreaseItem()}>
                    -
                  </div>
                  <input
                    type="text"
                    maxLength={3}
                    value={quantity !== 0 ? quantity : 1}
                    onChange={(e) => changeItem(e)}
                  />
                  <div className="cong" onClick={() => increaseItem()}>
                    +
                  </div>
                </div>
              </button>
              <p
                className="show_size available"
                onClick={() => setShowSize(true)}
              >
                + Bạn biết chọn size chuẩn của mình chưa?
              </p>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="start"
                  className="collapseInfo"
                >
                  <Panel header="Thông tin chi tiết" key="1">
                    <div className="descriptions">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product?.content?.split("//")?.[0],
                        }}
                      />
                    </div>
                  </Panel>
                </Collapse>
                <Collapse expandIconPosition="start" className="collapseInfo">
                  <Panel header="Chất liệu" key="2">
                    <div className="descriptions">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product?.content?.split("//")?.[1],
                        }}
                      />
                    </div>
                  </Panel>
                </Collapse>
              </Space>
            </Col>
          </Row>
        </div>

        <div className={showAllImages ? "show_all active" : "show_all"}>
          <div
            className={toggleListImage ? "image_slider" : "image_slider active"}
          >
            <div className="icon_group">
              <Search
                className="icon search"
                onClick={() => setImageScale(imageScale + 0.2)}
              />
              <Grid
                className="icon grid"
                onClick={() => setToggleListImage(!toggleListImage)}
              />
              <Close
                className="icon close"
                onClick={() => {
                  setImageScale(1);
                  setShowAllImages(false);
                }}
              />
            </div>
            <div
              className="to_left"
              onClick={() => {
                setImageScale(indexImage === 0 ? imageScale : 1);
                setIndexImage(indexImage === 0 ? indexImage : indexImage - 1);
              }}
            >
              <img src={left} alt="" />
            </div>
            <div
              className="to_right"
              onClick={() => {
                setImageScale(
                  indexImage === product?.images?.split(",")?.length - 1
                    ? imageScale
                    : 1
                );
                setIndexImage(
                  indexImage === product?.images?.split(",")?.length - 1
                    ? indexImage
                    : indexImage + 1
                );
              }}
            >
              <img src={right} alt="" />
            </div>
            <div className="image_view">
              <div className="box">
                <img
                  src={`${END_POINT}${
                    product?.images?.split(",")?.[indexImage]
                  }`}
                  alt=""
                  style={{
                    transform: `scale(${showAllImages ? imageScale : 0})`,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={toggleListImage ? "list_images active" : "list_images"}
          >
            <Row gutter={[4, 4]}>
              {product?.images?.split(",")?.map((image, index) => (
                <Col
                  xs={24}
                  md={24}
                  lg={12}
                  key={image}
                  onClick={() => {
                    setImageScale(1);
                    setIndexImage(index);
                  }}
                >
                  <img
                    src={`${END_POINT}${image}`}
                    alt=""
                    className={index === indexImage ? "active" : ""}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="related_products">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">sản phẩm liên quan</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi3} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="HƯỚNG DẪN CHỌN SIZE"
        width={window.innerWidth <= 1024 ? "80%" : "40%"}
        open={showSize}
        onCancel={() => setShowSize(false)}
        footer={false}
        className="show_size_option"
        style={{ top: "20px", textAlign: "center", fontWeight: "700" }}
      >
        <img src={sizeOption} alt="" />
      </Modal>
      <Loading loading={loading} />
    </>
  );
};

export default ProductDetails;
