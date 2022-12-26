import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../../redux/actions/actionsEvent';
import './Addevent.css'
export default function SignUp()  {
    const dispatch = useDispatch();
    const [imag, setImag] = useState(null)
    const [eventTitle, setEventTitle] = useState("")
    const [discription, setDiscription] = useState("")
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("file",imag)
        data.append("eventTitle",eventTitle)
        data.append("discription",discription)
        dispatch(
            addEvent(
            data,
            navigate
          )
        );
     
      };
  return (
    <div className='log'>
      <form method='POST' onSubmit={handleSubmit}>
  {/* eventTitle input */}
  <div className="form-outline mb-4">
    <input name="eventTitle" type="text" id="form2Example1" onChange={e=>setEventTitle(e.target.value)} className="form-control" />
    <label className="form-label" htmlFor="form2Example1" >Event Title</label>
  </div>
  {/* discription input */}
  
  <div className="form-outline mb-4">
    <textarea class="form-control" aria-label="With textarea" onChange={e=>setDiscription(e.target.value)}></textarea>
  
    <label className="form-label" htmlFor="form2Example1" >Description</label>
  </div>
  <input name="discription" onChange={e=>setImag(e.target.files[0])} type="file" id="form2Example1" className="form-control" />
 
  {/* Submit button */}
  <button type="submit"className="btn btn-primary btn-block mb-4">Register</button>
 
  
</form>
    </div>
  )
}

