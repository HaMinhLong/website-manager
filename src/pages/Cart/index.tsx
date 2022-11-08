import { useState } from "react";
import BreadCrumb from "layout/BreadCrumb";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import somi1 from "static/images/home/somi-1.jpg";
import somi2 from "static/images/home/somi-2.jpg";
import somi3 from "static/images/home/somi-3.jpg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

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
      <BreadCrumb node1={"Giỏ hàng"} />
      <section className="cart_page container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={14} lg={16} className="left_side">
            <div className="cart_item">
              <div className="image_box">
                <img src={somi1} alt="" />
              </div>
              <div className="content">
                <div className="name_price">
                  <p>Áo thun T-shirt M-F 08</p>
                  <p>249.000 ₫</p>
                </div>
                <p className="type">M / Vàng</p>
                <p>
                  <span>Giá: 249.000 ₫</span>
                </p>
                <div className="box">
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
                  <button type="button">Xóa</button>
                </div>
              </div>
            </div>
            <div className="cart_item">
              <div className="image_box">
                <img src={somi2} alt="" />
              </div>
              <div className="content">
                <div className="name_price">
                  <p>Áo thun T-shirt M-F 08</p>
                  <p>249.000 ₫</p>
                </div>
                <p className="type">M / Vàng</p>
                <p>
                  <span>Giá: 249.000 ₫</span>
                </p>
                <div className="box">
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
                  <button type="button">Xóa</button>
                </div>
              </div>
            </div>
            <div className="cart_item">
              <div className="image_box">
                <img src={somi3} alt="" />
              </div>
              <div className="content">
                <div className="name_price">
                  <p>Áo thun T-shirt M-F 08</p>
                  <p>249.000 ₫</p>
                </div>
                <p className="type">M / Vàng</p>
                <p>
                  <span>Giá: 249.000 ₫</span>
                </p>
                <div className="box">
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
                  <button type="button">Xóa</button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={10} lg={8} className="right_side">
            <div className="total">
              <p>TỔNG</p>
              <p>1.245.000 ₫</p>
            </div>
            <Link to="/cart" className="checkout">
              Thanh toán
            </Link>
            <Link to="/">Tiếp thục mua hàng</Link>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Cart;
