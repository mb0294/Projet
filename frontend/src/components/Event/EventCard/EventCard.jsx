import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./EventCard"
export default function EventCard({Event}) {
//   const {id} = useParams()
//     const navigate = useNavigate();
//   const dispatch = useDispatch();
//  useEffect(() => {
//     dispatch(detailsEvent(id)) 
    
//   }, [])
 
//   const IsAdmin = useSelector((state)=>state.userReducer.user.role)
//     const Oneevent = useSelector((state) => state.eventReducer.oneevent);
//     console.log(Oneevent._id)
//     console.log(IsAdmin)
  return (
  <>
  <Link to={`/events/${Event._id}`}>
  <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">{Event.eventTitle}</span></h2>
          <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src={Event.image} ></img>
        </div>
      </div>

   
  


</Link>

  </>
  );
}