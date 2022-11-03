import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListLocation = (params) =>
  axiosServices.get(`/web/v1/location?${stringify(params)}`);

const getOneLocation = (id) => axiosServices.get(`/web/v1/location/${id}`);

const createLocation = (params) =>
  axiosServices.post(`/web/v1/location`, params);

const updateLocation = (id, params) =>
  axiosServices.put(`/web/v1/location/${id}`, params);

const updateStatusLocation = (id, params) =>
  axiosServices.put(`/web/v1/location/updateStatus/${id}`, params);

const deleteLocation = (id) => axiosServices.delete(`/web/v1/location/${id}`);

export {
  getListLocation,
  getOneLocation,
  createLocation,
  updateLocation,
  updateStatusLocation,
  deleteLocation,
};
