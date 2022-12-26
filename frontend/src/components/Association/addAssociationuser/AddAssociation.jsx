import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../redux/actions/actionsUser';
import './addassociatin.css'
export default function SignUp()  {
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(
          register(
            {
                serieNumber: data.get("serieNumber"),
              firstName: data.get("firstName"),
              lastName: data.get("lastName"),
              role: data.get("role"),
            },
            navigate
          )
        );
      };
  return (
    <div className='log'>
      <form method='POST' onSubmit={handleSubmit}>
  {/* firstName input */}
  <div className="form-outline mb-4">
    <input name="firstName" type="text" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">first Name</label>
  </div>
  {/* lastName input */}
  <div className="form-outline mb-4">
    <input name="lastName" type="text" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">last Name</label>
  </div>
  {/* serieNumber input */}
  <div className="form-outline mb-4">
    <input name="serieNumber" type="text" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">serieNumber</label>
  </div>
  {/* role input */}
  <div className="form-outline mb-4">
    <input name="role" type="text" id="form2Example2" value="association" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Role</label>
  </div>
  {/* Password input */}
  <div className="form-outline mb-4">
    <input name="password" type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
     
     
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

