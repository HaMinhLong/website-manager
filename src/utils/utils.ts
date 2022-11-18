export const formatPrice = (price: number) => {
  return price?.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

export const getSale = (price: number, priceSale: number) => {
  return Math.floor(((price - priceSale) / price) * 100);
};

export const addToCart = (product: any) => {
  const products = JSON.parse(localStorage.getItem("cart") || "[]");
  const checkExits = products?.find(
    (item) =>
      item?.id === product?.id &&
      item?.color === product?.color &&
      item?.size === product?.size
  );

  let newCart: any = [];
  if (checkExits) {
    newCart = products?.map((item) => {
      if (item?.id === checkExits?.id)
        return { ...item, quantity: item?.quantity + product?.quantity };
      return item;
    });
  } else {
    newCart = [{ ...product }].concat(products);
  }
  return newCart;
};
