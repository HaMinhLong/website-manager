import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListOrder = (params) =>
  axiosServices.get(`/web/v1/order?${stringify(params)}`);

const getOneOrder = (id) => axiosServices.get(`/web/v1/order/${id}`);

const createOrder = (params) =>
  axiosServices.post(`/web/v1/order`, params);

const updateOrder = (id, params) =>
  axiosServices.put(`/web/v1/order/${id}`, params);

const updateStatusOrder = (id, params) =>
  axiosServices.put(`/web/v1/order/updateStatus/${id}`, params);

const deleteOrder = (id) => axiosServices.delete(`/web/v1/order/${id}`);

export {
  getListOrder,
  getOneOrder,
  createOrder,
  updateOrder,
  updateStatusOrder,
  deleteOrder,
};
