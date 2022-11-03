import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListProduct = (params) =>
  axiosServices.get(`/web/v1/product?${stringify(params)}`);

const getOneProduct = (id) => axiosServices.get(`/web/v1/product/${id}`);

const getOneProductURL = (id) => axiosServices.get(`/web/v1/product/url/${id}`);

const getListProducerProduct = (params) =>
  axiosServices.get(`/web/v1/producer-product?${stringify(params)}`);

const createProduct = (params) => axiosServices.post(`/web/v1/product`, params);

const updateProduct = (id, params) =>
  axiosServices.put(`/web/v1/product/${id}`, params);

const updateStatusProduct = (id, params) =>
  axiosServices.put(`/web/v1/product/updateStatus/${id}`, params);

const deleteProduct = (id) => axiosServices.delete(`/web/v1/product/${id}`);

export {
  getListProduct,
  getOneProduct,
  getOneProductURL,
  getListProducerProduct,
  createProduct,
  updateProduct,
  updateStatusProduct,
  deleteProduct,
};
