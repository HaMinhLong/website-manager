import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListCategory = (params) =>
  axiosServices.get(`/web/v1/category?${stringify(params)}`);

const getOneCategory = (id, params) =>
  axiosServices.get(`/web/v1/category/${id}?${stringify(params)}`);

const getOneCategoryURL = (id, params) =>
  axiosServices.get(`/web/v1/category/url/${id}?${stringify(params)}`);

const createCategory = (params) =>
  axiosServices.post(`/web/v1/category`, params);

const updateCategory = (id, params) =>
  axiosServices.put(`/web/v1/category/${id}`, params);

const updateStatusCategory = (id, params) =>
  axiosServices.put(`/web/v1/category/updateStatus/${id}`, params);

const deleteCategory = (id) => axiosServices.delete(`/web/v1/category/${id}`);

export {
  getListCategory,
  getOneCategory,
  getOneCategoryURL,
  createCategory,
  updateCategory,
  updateStatusCategory,
  deleteCategory,
};
