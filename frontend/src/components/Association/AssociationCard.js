import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteAssociation, detailsAssociation } from "../../redux/actions/actionsAssociation";
import { Link, useParams } from "react-router-dom";
import ForAdmin from "../private/ForAdmin";

export default function AssociationCard({ association }) {
  const dispatch = useDispatch();
  const {id} = useParams()
  return (
    
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{association.associationName}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
   <ForAdmin> <button onClick={() => dispatch(deleteAssociation(id))} type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{zIndex: 1}}>
                Delet
              </button></ForAdmin>
  </div>
  
</div>



  );
}
