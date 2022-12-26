import React from 'react'
import { useSelector } from 'react-redux'

const ForAssociation = ({children}) => {
    const isAssociation = useSelector((state)=>state.userReducer.user.role)
  return (
    <div>{isAssociation==="association"?children:null}</div>
  )
}

export default ForAssociation