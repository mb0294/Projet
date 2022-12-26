import axios from "axios";
import { Navigate } from "react-router-dom";
import { ADD_EVENT_FAIL,
    ADD_EVENT_SUCCESS,
    DELETE_EVENT_FAIL, 
    DELETE_EVENT_SUCCESS, 
    DETAIL_EVENT_FAIL,
    DETAIL_EVENT_SUCCESS,
    EDIT_EVENT_FAIL,
    EDIT_EVENT_SUCCESS,
    GET_ALL_EVENTS_FAIL,
    GET_ALL_EVENTS_LOADING,
    GET_ALL_EVENTS_SUCCESS } from "../consts/constEvent";
  
  export const getAllEvents = () => async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_LOADING });
    try {
      const res = await axios.get(`http://localhost:5000/api/events/allEvents`);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAIL, payload: error });
    }
  };
  export const deleteEvent = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(`http://localhost:5000/api/events/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
      Navigate ("/");
    } catch (error) {
      dispatch({ type: DELETE_EVENT_FAIL, payload: error });
    }
  };
  //details
  export const detailsEvent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/events/${id}`);
     dispatch({ type: DETAIL_EVENT_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: DETAIL_EVENT_FAIL, payload: error });
    console.log(error)
  }}
  export const addEvent = (newEvent,navigate) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:5000/api/events/addevent`,
        newEvent,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch({ type: ADD_EVENT_SUCCESS, payload: res.data });
      dispatch(getAllEvents());
      navigate("/");
    } catch (error) {
      dispatch({ type: ADD_EVENT_FAIL, payload: error });
      console.dir(error);
      alert(error.response.data.msg);
    }
  }
  export const editEvent = (id,editedEvent, navigate) => async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/events/${id}`,
        editedEvent
      );
      dispatch({ type: EDIT_EVENT_SUCCESS, payload: res.data });
      dispatch(getAllEvents());
      navigate(`/events/${id}`);
    } catch (error) {
      dispatch({ type: EDIT_EVENT_FAIL, payload: error });
      console.log(error);
    }
  };
  
