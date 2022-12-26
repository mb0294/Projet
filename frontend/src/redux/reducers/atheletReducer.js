import { DELETE_ATHELET_FAIL, DETAIL_ATHELET_FAIL, DETAIL_ATHELET_SUCCESS, GET_ALL_ATHELETS_FAIL, GET_ALL_ATHELETS_LOADING, GET_ALL_ATHELETS_SUCCESS } from "../consts/constAthelet";


const initialstate = {
    loading: false,
    events: [],
    oneevent: {},
    errors: null,
  };
  export const AtheletReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_ALL_ATHELETS_LOADING:
        return { ...state, loading: true };
  
      case GET_ALL_ATHELETS_SUCCESS:
        return { ...state,Athelets: payload,loading: false, };
      case GET_ALL_ATHELETS_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DELETE_ATHELET_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DETAIL_ATHELET_SUCCESS:
        return { ...state, findOneAthelet: payload, loading: false };
  
      case DETAIL_ATHELET_FAIL:
        return { ...state, errors: payload, loading: false };
      
  
      default:
        return state;
    }
  };