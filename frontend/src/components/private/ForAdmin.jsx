import React from 'react'
import { useSelector } from 'react-redux'

const ForAdmin = ({children}) => {
    const IsAdmin = useSelector((state)=>state.userReducer.user.role)
  return (
    <div>{IsAdmin==="superAdmin"?children:null}</div>
  )
}

export default ForAdmin