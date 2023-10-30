import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faUserDoctor, 
    faDashboard ,
    faPlus, 
    faSearch, 
    faSignOut, 
    faChartPie,
    faUtensils,
faStore  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
    <div className='col-2  text-white p-0 sidebar'>
                <div className="text-center my-5">
                    <FontAwesomeIcon 
                        icon={faUserDoctor} 
                        className='fs-1 text-white ' />
                </div>
                <div >
                    <ul >
                        <Link to='/' >
                            <li 
                                className='fs-4 pe-3 my-4 py-2 '>
                                <FontAwesomeIcon 
                                    icon={faDashboard} 
                                    className='fs-3 ms-3'
                                    />
Dashboard                            
                            </li>
                        </Link>
                        <Link to='/add' >
                            <li className='fs-4 pe-3 my-4 py-2'>
                                <FontAwesomeIcon 
                                    icon={faPlus} 
                                    className='fs-3 ms-3'
                                    />
Add Patient                            
                            </li>
                        </Link>
                        <Link to='/search' >
                            <li className='fs-4 pe-3 my-4 py-2'>
                                <FontAwesomeIcon 
                                    icon={faSearch} 
                                    className='fs-3 ms-3'
                                    />
                                Search
                            
                            </li>
                        </Link>
                        <Link to='/meals' >
                            <li 
                                className='fs-4 pe-3 my-4 py-2 '>
                                <FontAwesomeIcon 
                                    icon={faUtensils } 
                                    className='fs-3 ms-3'
                                    />
                                Meals
                            
                            </li>
                        </Link>
                        <Link to='/stock' >
                            <li 
                                className='fs-4 pe-3 my-4 py-2 '>
                                <FontAwesomeIcon 
                                    icon={faStore } 
                                    className='fs-3 ms-3'
                                    />
                                Stock
                            
                            </li>
                        </Link>

                        
                        
                    </ul>
                </div>

    </div>
  )
}

export default Sidebar