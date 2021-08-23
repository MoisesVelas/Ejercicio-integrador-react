import imagen from './img/header-simpsons.gif'
import { Link } from 'react-router-dom'




function Header () {

        return (

      

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              
               <img src={imagen}  alt="header-los simpson"></img>

              </div>

              <div className="btn-group">

                     <Link  to ="/"  className="btn btn-dark" activeclassname="active">

                            Inicio

                     </Link>

                     <Link to ="/personajes"   className="btn btn-dark" activeclassname="active">

                      Personajes

                     </Link>

                     <Link to ="/contacto"   className="btn btn-dark" activeclassname="active">

                      Contacto

                     </Link>

              </div>



       </nav>

                

        
    )};

export default Header




