
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ForAdmin from '../../components/private/ForAdmin';
import ForAssociation from '../../components/private/ForAssotiation';
import { logout } from '../../redux/actions/actionsUser';
import "./Navb.css"

function Navb() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((state)=>state.userReducer.user)
  // const inout = (event)=>{
  //   event.preventDefault();
  //   localStorage.getItem("token") ? 
  // (<div onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout</div>) : 
  // (<Link to="/login">Login</Link>);}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Carousel</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item" onClick={() => {navigate("/", { replace: true });}}>
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item" onClick={() => {navigate("/events", { replace: true });}}>
              <a className="nav-link active" aria-current="page" href="#">Events</a>
            </li>
           <ForAdmin> <li className="nav-item" onClick={() => {navigate("/newassociation", { replace: true });}}>
              <a className="nav-link disabled">Add Association president</a>
            </li></ForAdmin>
            <ForAdmin> <li className="nav-item" onClick={() => {navigate("/addevent", { replace: true });}}>
              <a className="nav-link disabled">Add Event</a>
            </li></ForAdmin>
            <ForAssociation>
               <li className="nav-item" onClick={() => {navigate("/addathelet", { replace: true });}}>
              <a className="nav-link disabled">Add Athelet</a>
            </li>
            </ForAssociation>
          </ul>
          {localStorage.getItem("token") ?
          <div className="logout" onClick={() => {dispatch(logout());navigate("/", { replace: true });}}>Logout</div> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  </header>




        
      {/* <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fixed navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout
      </div> :<Link to="/login">Login</Link> 
    </div>
  </div>
</nav> */}

{/* <nav class="navbar navbar-light bg-light">
    LSOK GAFSA  
</nav> */}
{/* <div onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout</div> :<Link to="/login">Login</Link> */}
</Container>
    </Navbar>
  );
}

export default Navb;