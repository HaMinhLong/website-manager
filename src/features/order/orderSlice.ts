import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  dataAll: [],
  totalProduct: 0,
  data: {
    list: [],
    pagination: [],
  },
  info: {},
  query: {},
  filter: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    save: (state, action) => {
      return {
        ...state,
        data: {
          list: action.payload.list,
          pagination: action.payload.pagination,
        },
        info: {},
      };
    },
    updateCart(state, action) {
      return {
        ...state,
        totalProduct: action.payload,
      };
    },
    saveAll(state, action) {
      return {
        ...state,
        dataAll: action.payload && action.payload.results,
      };
    },
    updateStatusSlice: (state, action) => {
      const { id, status } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          list: state.data.list?.map((item) => {
            if (item.id === id) {
              return { ...item, status: status };
            }
            return item;
          }),
        },
      };
    },
    removeAndSave(state, action) {
      return {
        ...state,
        data: {
          list: action.payload.list,
          pagination: {
            ...state.data.pagination,
            total: action.payload.pagination.total,
          },
        },
      };
    },
    info: (state, action) => {
      return {
        ...state,
        info: action.payload,
      };
    },
    filter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    query: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
  },
});

export const {
  filter,
  save,
  updateCart,
  saveAll,
  updateStatusSlice,
  removeAndSave,
  info,
  query,
} = orderSlice.actions;

export const order = ({ order }) => order;

export default orderSlice.reducer;
