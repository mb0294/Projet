import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAthelet } from '../../../redux/actions/actionsAthelet';
import { addEvent } from '../../../redux/actions/actionsEvent';
// import './Addevent.css'
export default function Addathelet()  {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(
            addAthelet(
            {
                atheletName: data.get("atheletName"),
                serieNumber: data.get("serieNumber"),
              
            },
            navigate
          )
        );
     
      };
  return (
    <div className='log'>
      <form method='POST' onSubmit={handleSubmit}>
  {/* atheletName input */}
  <div className="form-outline mb-4">
    <input name="atheletName" type="text" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Full Name</label>
  </div>
  {/* serieNumber input */}
  <div className="form-outline mb-4">
    <input name="serieNumber" type="text" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">serieNumber</label>
  </div>
 
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* Checkbox */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>
    <div className="col">
      {/* Simple link */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button type="submit"className="btn btn-primary btn-block mb-4">Register</button>
  {/* Register buttons */}
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter" />
    </button>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github" />
    </button>
  </div>
</form>
    </div>
  )
}

