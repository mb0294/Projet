import axios from "axios";
import { ADD_ATHELET_FAIL, ADD_ATHELET_SUCCESS, DELETE_ATHELET_FAIL, DELETE_ATHELET_SUCCESS, DETAIL_ATHELET_FAIL, DETAIL_ATHELET_SUCCESS, EDIT_ATHELET_FAIL, EDIT_ATHELET_SUCCESS, GET_ALL_ATHELETS_FAIL, GET_ALL_ATHELETS_LOADING, GET_ALL_ATHELETS_SUCCESS } from "../consts/constAthelet";

export const getAllAthelets = () => async (dispatch) => {
    dispatch({ type: GET_ALL_ATHELETS_LOADING });
    try {
      const res = await axios.get(`http://localhost:5000/api/athelets/allAthelets`);
      dispatch({ type: GET_ALL_ATHELETS_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: GET_ALL_ATHELETS_FAIL, payload: error });
    }
  };
  export const deleteAthelet = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/athelets/${id}`);
      dispatch({ type: DELETE_ATHELET_SUCCESS, payload: res.data });
      dispatch(getAllAthelets());
    } catch (error) {
      dispatch({ type: DELETE_ATHELET_FAIL, payload: error });
    }
  };
  export const detailsAthelet = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/athelets/${id}`);
     dispatch({ type: DETAIL_ATHELET_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: DETAIL_ATHELET_FAIL, payload: error });
    console.log(error)
  }}
  export const addAthelet = (newAthelet,navigate) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:5000/api/athelets/add`,
        newAthelet,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch({ type: ADD_ATHELET_SUCCESS, payload: res.data });
      dispatch(getAllAthelets());
      navigate("/athelets/allAthelets");
    } catch (error) {
      dispatch({ type: ADD_ATHELET_FAIL, payload: error });
      console.dir(error);
      alert(error.response.data.msg);
    }
  }
  export const editAthelet = (id,updatedAthelet, navigate) => async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/athelets/${id}`,
        updatedAthelet
      );
      dispatch({ type: EDIT_ATHELET_SUCCESS, payload: res.data });
      dispatch(getAllAthelets());
      navigate(`/athelets/${id}`);
    } catch (error) {
      dispatch({ type: EDIT_ATHELET_FAIL, payload: error });
      console.log(error);
    }
  };