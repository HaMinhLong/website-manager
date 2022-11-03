import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  dataAll: [],
  data: {
    list: [],
    pagination: [],
  },
  info: {},
  query: {},
  filter: {},
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    save: (state, action) => {
      return {
        ...state,
        data: {
          list: action.payload,
        },
        info: {},
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
  saveAll,
  updateStatusSlice,
  removeAndSave,
  info,
  query,
} = menuSlice.actions;

export const menu = ({ menu }) => menu;

export default menuSlice.reducer;
