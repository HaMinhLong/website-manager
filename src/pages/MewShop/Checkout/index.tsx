// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Radio, Space } from 'antd';

// PROJECT IMPORT
import BreadCrumb from 'layout/MewShop/BreadCrumb';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from 'utils/utils';
import { useDispatch } from 'app/store';
import createNotification from 'components/Extended/Notification';

const END_POINT = process.env.REACT_APP_SERVER;

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const renderTotal = () => {
    let total = 0;
    products?.forEach((e) => {
      total += e?.price * e?.quantity;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address, description } = e.target;

    const addItem = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      description: description.value,
      paymentMethodId: 2,
      websiteId: 1,
      status: 1,
      totalPrice: renderTotal()
    };
    const productOrders = products?.map((item) => {
      return {
        amount: item?.quantity,
        price: item?.price,
        negotiablePrice: item?.price,
        totalPrice: item?.price * item?.quantity,
        productId: item?.id,
        category: item?.color + ' / ' + item?.size,
        flag: 'add'
      };
    });

    dispatch({
      type: 'order/add',
      payload: {
        ...addItem,
        productOrders
      },
      callback: (res) => {
        if (res?.success) {
          createNotification('success', 'Bạn đã đặt hàng thành công! Chúng tôi sẽ sớm liên hệ với bạn!');
          localStorage.removeItem('cart');
          navigate('/');
        } else {
          createNotification('error', 'Xảy ra lỗi khi đặt hàng. Vui lòng thử lại!');
        }
      }
    });
  };

  return (
    <>
      <BreadCrumb node1="Thanh toán" />
      <section className="checkout container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <form className="contact_form" style={{ width: '100%' }} onSubmit={(e) => handleSubmit(e)}>
              <Box>
                <Typography>Thông tin giao hàng</Typography>
                <Grid container columnSpacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12}>
                    <input name="name" type="text" required placeholder="Họ tên *" />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <input name="email" type="email" placeholder="Email" />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <input name="phone" type="number" required placeholder="Số điện thoại *" />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea name="address" required placeholder="Địa chỉ*"></textarea>
                  </Grid>
                  <Grid item xs={12}>
                    <textarea name="description" placeholder="Ghi chú (tùy chọn)"></textarea>
                  </Grid>
                </Grid>
              </Box>
              <Typography>Phương thức vận chuyển</Typography>
              <Box sx={{ m: '20px 0px' }}>
                <Radio.Group value="">
                  <Space direction="vertical">
                    <Radio value="">Giao hàng tận nơi</Radio>
                  </Space>
                </Radio.Group>
              </Box>
              <Typography>Phương thức thanh toán</Typography>
              <Box sx={{ m: '20px 0px' }}>
                <Radio.Group value="">
                  <Space direction="vertical">
                    <Radio value="">Thanh toán khi nhận hàng</Radio>
                  </Space>
                </Radio.Group>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: '14px',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigate('/cart')}
                  color="primary"
                >
                  Giỏ hàng
                </Typography>
                <Button type="submit" variant="contained" disabled={!products?.length}>
                  Hoàn tất đơn hàng
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6">Đơn hàng - {products?.length || 0} sản phẩm</Typography>
            <Divider />

            <Grid sx={{ mt: '0px', mb: '15px' }} container spacing={2}>
              {products?.map((item) => (
                <Grid item xs={12} key={item?.id} display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex">
                    <img src={`${END_POINT}${item?.images?.split(',')[0]}`} alt="product" width="30px" height="40px" />
                    <Box sx={{ ml: '10px' }}>
                      <Typography color="primary" sx={{ fontSize: '14px' }}>
                        {item?.name} ({item?.quantity})
                      </Typography>
                      <Typography sx={{ fontSize: '11px' }}>
                        {item?.color} {item?.color && item?.size && '/'} {item?.size}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>{formatPrice(item?.price)}</Box>
                </Grid>
              ))}
            </Grid>

            <Divider />
            <div className="box_description">
              <div className="box">
                <p>Tạm tính</p>
                <p>{formatPrice(renderTotal())}</p>
              </div>
              <div className="box">
                <p>Phí vận chuyển</p>
                <p>40.000 đ</p>
              </div>
            </div>
            <Divider />
            <div className="total">
              <p>Tổng cộng</p>
              <Typography color="primary">{formatPrice(renderTotal() + 40000)}</Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Index;
