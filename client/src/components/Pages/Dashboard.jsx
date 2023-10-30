import {faPersonPregnant, faBaby ,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

import Card from '../Partials/Cards/Card'
import Table from '../Partials/Table'
function Dashboard() {
    const cards =[
        {
            title:'Patients',
            icon:faPersonPregnant,
            url:'pregnant'
        },
        {
            title:'With Baby',
            icon:faBaby,
            url:'withbaby'
        },
        {
            title:'Special Case',
            icon:faInfoCircle,
            url:'specialvisit'
        },
    ]
    
  return (
    <div className='content'>
      <h1 className="text-secondary m-4 d-flex justify-content-center">Dashboard</h1>
      <div className="row px-4 py-4">
        {
            
            cards.map((item,index) =>(
              <div className="col-4" key={index}>
                <Card item={item}/>

              </div>
            ))
        }
        
      </div>
      <div className="container">
        <Table />
      </div>
    </div>
  )
}

export default Dashboard
