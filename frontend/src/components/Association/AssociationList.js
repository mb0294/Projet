import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssociations } from "../../redux/actions/actionsAssociation";
import AssociationCard from "./AssociationCard";

const AssociationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (getAllAssociations())
  
 
  },[])
  
  const associations = useSelector((state) => state.associationReducer.associations);

  return (
    <div>
       
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 200,
          flexWrap: "wrap",
        }}>
        {associations.map((association) => (
          <AssociationCard association={association} key={association._id} />
      
        ))}
      </div>
    </div>
  );
};

export default AssociationList;
