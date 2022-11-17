// THIRD IMPORT
import { useState, useEffect } from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";

// PROJECT IMPORT
import BreadCrumb from "layout/BreadCrumb";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  return (
    <>
      <BreadCrumb node1="Thanh toán" />
      <section className="checkout container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <form className="contact_form" style={{ width: "100%" }}>
              <Box>
                <Typography>Thông tin giao hàng</Typography>
                <Grid container columnSpacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12}>
                    <input type="text" required placeholder="Họ tên *" />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <input type="email" placeholder="Email" />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <input
                      type="number"
                      required
                      placeholder="Số điện thoại *"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea required placeholder="Địa chỉ*"></textarea>
                  </Grid>
                </Grid>
              </Box>
              <Typography>Phương thức vận chuyển</Typography>
              <Typography>Phương thức thanh toán</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "14px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/cart")}
                >
                  Giỏ hàng
                </Typography>
                <Button type="submit" variant="contained">
                  Hoàn tất đơn hàng
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Divider />
            <div className="box_description">
              <div className="box">
                <p>Tạm tính</p>
                <p>120.000 đ</p>
              </div>
              <div className="box">
                <p>Phí vận chuyển</p>
                <p>120.000 đ</p>
              </div>
            </div>
            <Divider />
            <div className="total">
              <p>Tổng cộng</p>
              <p>120.000 đ</p>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Index;
