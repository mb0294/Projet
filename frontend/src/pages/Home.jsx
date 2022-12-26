import React from 'react'
import AssociationList from '../components/Association/AssociationList'
import EventList from '../components/Event/EventList'
import Homepage from './caroussel/Homepage'


const Home = () => {
  return (
    <div>
       <Homepage/>
        <AssociationList />
        
        {/* <EventList /> */}

    </div>
  )
}

export default Home