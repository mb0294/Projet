import {
    GET_ALL_ASSOCIATIONS_LOADING,
    GET_ALL_ASSOCIATIONS_SUCCESS,
    GET_ALL_ASSOCIATIONS_FAIL,
    DELETE_ASSOCIATION_FAIL,
    DELETE_ASSOCIATION_SUCCESS,
    DETAIL_ASSOCIATION_FAIL,
    DETAIL_ASSOCIATION_SUCCESS,
    ADD_ASSOCIATION_SUCCESS,
    ADD_ASSOCIATION_FAIL,
    EDIT_ASSOCIATION_SUCCESS,
    EDIT_ASSOCIATION_FAIL,
  } from "../consts/constAssociation";
  import axios from "axios";
  
  export const getAllAssociations = () => async (dispatch) => {
    dispatch({ type: GET_ALL_ASSOCIATIONS_LOADING });
    try {
      const res = await axios.get("http://localhost:5000/api/associations/allassociations");
      dispatch({ type: GET_ALL_ASSOCIATIONS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_ASSOCIATIONS_FAIL, payload: error });
    }
  };
  export const deleteAssociation = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/associations/${id}`);
      dispatch({ type: DELETE_ASSOCIATION_SUCCESS, payload: res.data });
      dispatch(getAllAssociations());
    } catch (error) {
      dispatch({ type: DELETE_ASSOCIATION_FAIL, payload: error });
    }
  };
  export const detailsAssociation = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/associations/${id}`);
     dispatch({ type: DETAIL_ASSOCIATION_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: DETAIL_ASSOCIATION_FAIL, payload: error });
    console.log(error)
  }}
  export const addAssociation = (newAssociation,navigate) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:5000/api/associations/add`,
        newAssociation,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch({ type: ADD_ASSOCIATION_SUCCESS, payload: res.data });
      dispatch(getAllAssociations());
      navigate("/");
    } catch (error) {
      dispatch({ type: ADD_ASSOCIATION_FAIL, payload: error });
      console.dir(error);
      alert(error.response.data.msg);
    }
  }
  export const editAssociation = (id,editedAssociation, navigate) => async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/associations/${id}`,
        editedAssociation
      );
      dispatch({ type: EDIT_ASSOCIATION_SUCCESS, payload: res.data });
      dispatch(getAllAssociations());
      navigate("/associations/allassociations");
    } catch (error) {
      dispatch({ type: EDIT_ASSOCIATION_FAIL, payload: error });
      console.log(error);
    }
  };
  