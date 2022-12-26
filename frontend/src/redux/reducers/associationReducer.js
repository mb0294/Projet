import {
    DELETE_ASSOCIATION_FAIL,
    DETAIL_ASSOCIATION_FAIL,
    DETAIL_ASSOCIATION_SUCCESS,
    GET_ALL_ASSOCIATIONS_FAIL,
    GET_ALL_ASSOCIATIONS_LOADING,
    GET_ALL_ASSOCIATIONS_SUCCESS,
  } from "../consts/constAssociation";
  
  const initialstate = {
    loading: false,
    associations: [],
    oneassociation: {},
    errors: null,
  };
  export const associationReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_ALL_ASSOCIATIONS_LOADING:
        return { ...state, loading: true };
  
      case GET_ALL_ASSOCIATIONS_SUCCESS:
        return { ...state,associations: payload,loading: false, };
      case GET_ALL_ASSOCIATIONS_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DELETE_ASSOCIATION_FAIL:
        return { ...state, errors: payload, loading: false };
  
      case DETAIL_ASSOCIATION_SUCCESS:
        return { ...state, oneassociation: payload, loading: false };
  
      case DETAIL_ASSOCIATION_FAIL:
        return { ...state, errors: payload, loading: false };
      
  
      default:
        return state;
    }
  };
  