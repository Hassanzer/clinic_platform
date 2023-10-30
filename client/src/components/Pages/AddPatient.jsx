import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPersonPregnant, faBaby, faInfo} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function AddPatient() {
    const cards = [
        {
            icon:faPersonPregnant,
            title:' Pregnant',
            route: 'Pregnant'
           
        },
        {
            icon:faBaby,
            title: 'Baby',
            route:'baby'
           
        },
        {
            icon:faInfo,
            title: 'specialVisit',
            route:'specialVisit'
            
        }
    ]
  return (
    <div className='bg-light content'>
      <h1 className="text-secondary m-4">Add Patient</h1>
      <div className="row px-2 py-4">
        {
            cards.map((el, index) =>(
                <div className="col-4" key={index}>
                    <div className="card border-0 shadow " >
                        <div className="card-body ">
                            <span className='bg-success d-flex justify-content-center align-items-center text-white text-center mx-auto mb-2 rounded-circle'
                                style={{width:'100px', height:'100px'}}
                            >
                                <FontAwesomeIcon className="fs-1 fw-bold " icon={el.icon} />
                            </span>
                            <h1 className="card-title fw-bold  fs-3 text-center mt-4">{el.title}</h1>
                            <Link to={`/add/${el.route}`} >
                            <button className="btn btn-primary col-12 mt-5">Select</button>
                            </Link>
                        </div>
                    </div>
                </div>

            ))
        }
        

      </div>
    </div>
  )
}

export default AddPatient
