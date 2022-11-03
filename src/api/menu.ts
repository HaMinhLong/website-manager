import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListMenu = (params) =>
  axiosServices.get(`/web/v1/menu?${stringify(params)}`);

const getOneMenu = (id) => axiosServices.get(`/web/v1/menu/${id}`);

const createMenu = (params) => axiosServices.post(`/web/v1/menu`, params);

const updateMenu = (id, params) =>
  axiosServices.put(`/web/v1/menu/${id}`, params);

const updateStatusMenu = (id, params) =>
  axiosServices.put(`/web/v1/menu/updateStatus/${id}`, params);

const deleteMenu = (id) => axiosServices.delete(`/web/v1/menu/${id}`);

export {
  getListMenu,
  getOneMenu,
  createMenu,
  updateMenu,
  updateStatusMenu,
  deleteMenu,
};
