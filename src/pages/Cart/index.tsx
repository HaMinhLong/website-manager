// THIRD IMPORT
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// PROJECT IMPORT
import { formatPrice } from "utils/utils";
import BreadCrumb from "layout/BreadCrumb";

const END_POINT = process.env.REACT_APP_SERVER;

const Cart = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const changeQuantity = (
    id: number,
    type: "increase" | "decrease",
    amount = 0
  ) => {
    const newData = products?.map((item) =>
      item?.id === id
        ? {
            ...item,
            quantity: amount
              ? amount
              : type === "increase"
              ? item.quantity < 999
                ? item.quantity + 1
                : item.quantity
              : item.quantity > 1
              ? item.quantity - 1
              : item.quantity,
          }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(newData));
    setProducts(newData);
  };

  const deleteItem = (id: number) => {
    const newData = products?.filter((item) => item?.id !== id);
    localStorage.setItem("cart", JSON.stringify(newData));
    setProducts(newData);
  };

  const renderTotal = () => {
    let total = 0;
    products?.forEach((e) => {
      total += e?.price * e?.quantity;
    });
    return total;
  };

  return (
    <>
      <BreadCrumb node1="Giỏ hàng" />
      <section className="cart_page container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={14} lg={16} className="left_side">
            {products?.map((item) => (
              <div className="cart_item" key={item?.id}>
                <div className="image_box">
                  <img
                    src={`${END_POINT}${item?.images?.split(",")[0]}`}
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="name_price">
                    <p>{item?.name}</p>
                    <p>{formatPrice(item?.price)}</p>
                  </div>
                  <p className="type">
                    {item?.size} / {item?.color}
                  </p>
                  <p>
                    <span>Giá: {formatPrice(item?.price)}</span>
                  </p>
                  <div className="box">
                    <div className="amount">
                      <div
                        className="tru"
                        onClick={() => changeQuantity(item?.id, "decrease")}
                      >
                        -
                      </div>
                      <input
                        type="text"
                        maxLength={3}
                        value={item?.quantity > 0 ? item?.quantity : 1}
                        onChange={(e) =>
                          changeQuantity(
                            item?.id,
                            "increase",
                            Number(e.target.value)
                          )
                        }
                      />
                      <div
                        className="cong"
                        onClick={() => changeQuantity(item?.id, "increase")}
                      >
                        +
                      </div>
                    </div>
                    <button onClick={() => deleteItem(item?.id)} type="button">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {products?.length === 0 && (
              <p style={{ color: "#ff0000", textAlign: "center" }}>
                Không có sản phẩm nào trong giỏ hàng
              </p>
            )}
          </Col>
          <Col xs={24} md={10} lg={8} className="right_side">
            <div className="total">
              <p>TỔNG</p>
              <p>{formatPrice(renderTotal())}</p>
            </div>
            <Link to="/checkout" className="checkout">
              Thanh toán
            </Link>
            <Link to="/">Tiếp tục mua hàng</Link>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Cart;
