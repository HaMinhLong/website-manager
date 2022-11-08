import axiosServices from "utils/axios";
import { stringify } from "qs";

const getListCollection = (params) =>
  axiosServices.get(`/web/v1/collection?${stringify(params)}`);

const getOneCollection = (id) => axiosServices.get(`/web/v1/collection/${id}`);

const getOneCollectionURL = (id) =>
  axiosServices.get(`/web/v1/collection/url/${id}`);

export { getListCollection, getOneCollection, getOneCollectionURL };
