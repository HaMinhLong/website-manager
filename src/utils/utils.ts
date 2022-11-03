export const formatPrice = (price: number) => {
  return price?.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

export const getSale = (price: number, priceSale: number) => {
  return Math.floor(((price - priceSale) / price) * 100);
};
