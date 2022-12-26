import { DELETE_EVENT_FAIL, 
    DETAIL_EVENT_FAIL, 
    DETAIL_EVENT_SUCCESS, 
    GET_ALL_EVENTS_FAIL, 
    GET_ALL_EVENTS_LOADING, 
    GET_ALL_EVENTS_SUCCESS } from "../consts/constEvent";

const initialstate = {
    loading: false,
    events: [],
    oneevent: {},
    errors: null,
  };
  export const eventReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_ALL_EVENTS_LOADING:
        return { ...state, loading: true };
  
      case GET_ALL_EVENTS_SUCCESS:
        return { ...state,events: payload,loading: false, };
      case GET_ALL_EVENTS_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DELETE_EVENT_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DETAIL_EVENT_SUCCESS:
        return { ...state, oneevent: payload, loading: false };
  
      case DETAIL_EVENT_FAIL:
        return { ...state, errors: payload, loading: false };
      
  
      default:
        return state;
    }
  };