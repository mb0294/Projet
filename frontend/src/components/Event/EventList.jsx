import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/actions/actionsEvent";
import EventCard from "./EventCard/EventCard";

const EventList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllEvents())
    
   
    },[])
    
    const Events = useSelector((state) => state.eventReducer.events);

    return (
      <div><div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: 200,
        flexWrap: "wrap",
      }}>
      {Events.map((Event) => (
        <EventCard Event={Event} key={Event._id} />
    
      ))}
    </div>
  </div>
);
};

export default EventList;
