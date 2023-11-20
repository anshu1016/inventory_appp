import axios from "axios";
import {
  ADD_ITEM,
  ADD_SALE,
  DATA_LOADED,
  LOADING,
  LOAD_SALE,
  REMOVE_ITEM,
  UPDATE_ITEM
} from "./const";

const baseurl = "https://iinventory-management.onrender.com";
console.log(baseurl);
export const addItem = (newItems) => async (dispatch) => {
  try {
    console.log("Adding item - start");
    dispatch({ type: LOADING });
    const response = await axios.post(`${baseurl}/items`, { ...newItems });
    console.log("Adding item - success", response.data.data);
    dispatch({ type: ADD_ITEM, payload: response.data.data });
  } catch (error) {
    console.error("Adding item - error", error);
    dispatch({ type: "error" });
  }
};

export const fetchItem = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseurl}/items`);
    dispatch({ type: DATA_LOADED, payload: response.data.data });
  } catch (error) {
    dispatch({ type: "error" });
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${baseurl}/items/${itemId}`);
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  } catch (error) {
    dispatch({ type: "error" });
  }
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${baseurl}/items/${itemId}`, {
      ...updatedItem
    });
    dispatch({ type: UPDATE_ITEM, payload: response.data.data });
  } catch (error) {
    dispatch({ type: "error" });
  }
};

export const loadSales = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseurl}/sales`);

    dispatch({ type: LOAD_SALE, payload: response.data.data });
  } catch (error) {
    dispatch({ type: "error" });
  }
};

export const addSale = (newSale) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${baseurl}/sales/`, {
      ...newSale
    });
    dispatch({ type: ADD_SALE, payload: response.data.data });
  } catch (error) {}
};
