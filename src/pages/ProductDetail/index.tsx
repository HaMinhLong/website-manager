/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { Col, Collapse, Modal, Row, Space } from "antd";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

// PROJECT IMPORT
import BreadCrumb from "layout/BreadCrumb";
import createNotification from "components/Extended/Notification";

import { ReactComponent as Grid } from "static/images/product_details/grid.svg";
import { ReactComponent as Search } from "static/images/product_details/search.svg";
import { ReactComponent as Close } from "static/images/product_details/close.svg";
import { ReactComponent as Cart } from "static/images/home/cart.svg";
import sizeOption from "static/images/product_details/size_option.png";
import right from "static/images/product_details/right.svg";
import left from "static/images/product_details/left.svg";
import { ProductType } from "types/product";
import { CategoryType } from "types/category";
import { addToCart, formatPrice, getSale } from "utils/utils";
import { useDispatch } from "app/store";
import Loading from "components/Extended/Loading";
import { updateCart } from "../../features/order/orderSlice";

const SIZE_IMAGE = 6;
const { Panel } = Collapse;

interface ProductClass {
  id: number;
  name: string;
}

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
    productClass1s: [],
    productClass2s: [],
    productPrices: [],
  });
  const [colorSelected, setColorSelected] = useState<ProductClass>({
    id: 0,
    name: "",
  });
  const [sizeSelected, setSizeSelected] = useState<ProductClass>({
    id: 0,
    name: "",
  });
  const [products, setProducts] = useState<any>([]);

  const { url, urlProduct } = params;

  useEffect(() => {
    getDetailProduct();
  }, [urlProduct]);

  useEffect(() => {
    getDetailCategory();
  }, [url]);

  useEffect(() => {
    if (category?.id) getList();
  }, [category]);

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

  const getList = () => {
    let params = {
      filter: JSON.stringify({
        status: 1,
        websiteId: 1,
        categoryId: category?.id,
      }),
      range: JSON.stringify([0, 10]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,images,price,negotiablePrice,isSale,createdAt,url",
    };

    dispatch({
      type: "product/fetch",
      payload: params,
      callback: (res) => {
        if (res?.success) {
          const {
            results: { list },
          } = res;
          setProducts(list);
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
          setColorSelected({
            id: list?.productClass1s?.[0]?.id || 0,
            name: list?.productClass1s?.[0]?.name || "",
          });
          setSizeSelected({
            id: list?.productClass2s?.[0]?.id || 0,
            name: list?.productClass2s?.[0]?.name || "",
          });
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

  const renderPrice = (price?: boolean) => {
    if (colorSelected?.id === 0 || sizeSelected?.id === 0)
      return product?.isSale && !price
        ? formatPrice(product?.negotiablePrice)
        : formatPrice(product?.price);

    const productPrice = product?.productPrices?.find(
      (item) =>
        item?.productClass1Id === colorSelected?.id &&
        item?.productClass2Id === sizeSelected?.id
    );

    return formatPrice(
      product?.isSale && !price
        ? productPrice?.negotiablePrice || 0
        : productPrice?.price || 0
    );
  };

  const renderPriceAddToCart = (price?: boolean) => {
    if (colorSelected?.id === 0 || sizeSelected?.id === 0)
      return product?.isSale && !price
        ? product?.negotiablePrice
        : product?.price;

    const productPrice = product?.productPrices?.find(
      (item) =>
        item?.productClass1Id === colorSelected?.id &&
        item?.productClass2Id === sizeSelected?.id
    );

    return product?.isSale && !price
      ? productPrice?.negotiablePrice || 0
      : productPrice?.price || 0;
  };

  const buyProduct = () => {
    const newProduct = {
      id: product?.id,
      name: product?.name,
      price: renderPriceAddToCart(),
      images: product?.images,
      quantity: quantity,
      color: colorSelected?.name,
      size: sizeSelected?.name,
    };
    const newCart = addToCart(newProduct);

    localStorage.setItem("cart", JSON.stringify(newCart));
    dispatch(updateCart(newCart?.length || 0));
    createNotification(
      "success",
      "Bạn đã thêm sản phẩm vào giỏ hàng thành công!"
    );
    setQuantity(1);
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
              {product?.productClass1s?.length > 0 && (
                <div className="color">
                  <p>Màu sắc: </p>
                  <ul>
                    {product?.productClass1s?.map((item) => (
                      <li
                        key={item?.id}
                        onClick={() =>
                          setColorSelected({ id: item?.id, name: item?.name })
                        }
                        className={
                          item?.id === colorSelected?.id ? "active" : ""
                        }
                      >
                        <p>
                          {item?.name}
                          <span>✓</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product?.productClass2s?.length > 0 && (
                <div className="size">
                  <p>Kích thước: </p>
                  <ul>
                    {product?.productClass2s?.map((item) => (
                      <li
                        key={item?.id}
                        onClick={() =>
                          setSizeSelected({ id: item?.id, name: item?.name })
                        }
                        className={
                          item?.id === sizeSelected?.id ? "active" : ""
                        }
                      >
                        <p>
                          {item?.name}
                          <span>✓</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="price">
                Giá: {renderPrice()}{" "}
                {product?.isSale && <del>{renderPrice(true)}</del>}
              </p>
              <button className="btn buy">
                <div className="bg"></div>
                <Cart />
                <span
                  onClick={() => {
                    buyProduct();
                  }}
                >
                  Mua hàng
                </span>
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
                          __html: product?.content?.split("///")?.[0],
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
                          __html: product?.content?.split("///")?.[1],
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
                  stagePadding: 0,
                },
                600: {
                  items: 2,
                  stagePadding: 0,
                },
                1024: {
                  items: 3,
                  stagePadding: 0,
                },
                1300: {
                  items: 4,
                  stagePadding: 0,
                },
              }}
              key={`carousel_shirt`}
            >
              {products
                ?.filter((item) => item?.id !== product?.id)
                ?.map((item) => (
                  <div
                    className="product"
                    style={{ width: "100%" }}
                    key={item?.id}
                  >
                    <Link
                      className="image_box"
                      to={`${category?.url}/${item?.url}`}
                    >
                      <div className="ct">Chi tiết</div>
                      <img
                        src={`${END_POINT}${item?.images?.split(",")[0]}`}
                        alt={item?.name}
                      />
                      <img
                        src={`${END_POINT}${item?.images?.split(",")[1]}`}
                        alt={item?.name}
                      />
                    </Link>
                    {item?.isSale && (
                      <div className="sale_box">
                        <p>-{getSale(item?.price, item?.negotiablePrice)}%</p>
                      </div>
                    )}
                    <div className="content">
                      <Link to={`${category?.url}/${item?.url}`}>
                        {item?.name}{" "}
                      </Link>
                      <p className="price">
                        {item?.isSale
                          ? formatPrice(item?.negotiablePrice)
                          : formatPrice(item?.price)}{" "}
                        {item?.isSale && <del>{formatPrice(item?.price)}</del>}
                      </p>
                    </div>
                  </div>
                ))}
            </OwlCarousel>
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
