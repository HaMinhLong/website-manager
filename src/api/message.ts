import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListMessage = (params) =>
  axiosServices.get(`/web/v1/message?${stringify(params)}`);

const getOneMessage = (id) => axiosServices.get(`/web/v1/message/${id}`);

const createMessage = (params) => axiosServices.post(`/web/v1/message`, params);

const updateMessage = (id, params) =>
  axiosServices.put(`/web/v1/message/${id}`, params);

const updateStatusMessage = (id, params) =>
  axiosServices.put(`/web/v1/message/updateStatus/${id}`, params);

const deleteMessage = (id) => axiosServices.delete(`/web/v1/message/${id}`);

export {
  getListMessage,
  getOneMessage,
  createMessage,
  updateMessage,
  updateStatusMessage,
  deleteMessage,
};
