
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navb from './pages/Nav/Navb';
import Login from './components/login/Login';
import AddAssociation from './components/Association/addAssociationuser/AddAssociation'
import AddEvent from'./components/Event/addEvent/AddEvent'
import Addathelet from'./components/Athelet/addAtlete/Addathelet'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './redux/actions/actionsUser';
import EventList from './components/Event/EventList';
import DetailEvent from './components/Event/DetailEvent/DetailEvent';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  return (
    <div className="App">
    <Navb />
     <Routes>
    
     <Route path="/" element={<Home/>} />
     <Route path="/login" element={<Login/>} /> 
     <Route path="/newassociation" element={<AddAssociation/>} />
     <Route path="/addevent" element={<AddEvent/>} />
     <Route path="/addathelet" element={<Addathelet/>} />
     <Route path="/events" element={<EventList/>} />
     <Route path="/events/:id" element={<DetailEvent/>} />

      </Routes>
    </div>
  );
}

export default App;
