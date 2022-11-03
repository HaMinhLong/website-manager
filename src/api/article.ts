import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListArticle = (params) =>
  axiosServices.get(`/web/v1/article?${stringify(params)}`);

const getOneArticle = (id) => axiosServices.get(`/web/v1/article/${id}`);

const getOneArticleURL = (id) => axiosServices.get(`/web/v1/article/url/${id}`);

const createArticle = (params) => axiosServices.post(`/web/v1/article`, params);

const updateArticle = (id, params) =>
  axiosServices.put(`/web/v1/article/${id}`, params);

const updateStatusArticle = (id, params) =>
  axiosServices.put(`/web/v1/article/updateStatus/${id}`, params);

const deleteArticle = (id) => axiosServices.delete(`/web/v1/article/${id}`);

export {
  getListArticle,
  getOneArticle,
  getOneArticleURL,
  createArticle,
  updateArticle,
  updateStatusArticle,
  deleteArticle,
};
