import React from 'react'
import Destination from '../../Components/Destination'
import Cards from './Cards'
import { Line } from 'react-chartjs-2'
import AnalyticItems from './Analytics/AnalyticItems'
import Topvisitpage from './VisitPage/Topvisitpage'
import VisitePages from './VisitPage/VisitePages'
import { Link } from 'react-router-dom'

function Admin() {

  return (
    <div className='Dashboard'>
        <Destination property={{microservice:'Admin',section:'Dashboard'}}/>
        <div className='content'>
          <div className='count_dashboard'>
            <Cards/>
          </div>
           <AnalyticItems/>
           <VisitePages/>
        </div>
    </div>
  )
}

export default Admin