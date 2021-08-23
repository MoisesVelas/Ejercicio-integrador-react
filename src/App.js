import Header from "./Componente header";
import Imagen from "./imagen 2";
import Componente3 from "./componente3";
import Footer from "./footer";
import Personajes from "./personajes";
import Contacto from "./Contacto";
import { BrowserRouter as Router, Switch, Route,  }  from 'react-router-dom'



function App() {
 
 
 
  return (
     
     
     
     
     <Router>
          <div className="container-fluid">

            <Header/>
      
              
              <Switch>

            <Route path="/personajes"> 

            <Personajes/> 
           
            </Route>
            
            <Route path="/contacto">

             

              <Contacto/>


           
            </Route>

            <Route exact path="/">

            <Imagen/>


            <Componente3/>


            </Route>




            </Switch>

     

      
          
    
      <Footer/>

    </div>


    </Router>
    

  
  )};

export default App;
