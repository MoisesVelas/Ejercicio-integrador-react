
import { Component } from 'react'
import Tarjeta from './tarjeta'
import imagen3 from './img/homer.jpg'
import imagen4 from './img/maggie.jpg'
import imagen5 from './img/bart.jpg'
  


class Componente3 extends Component{

render(){

return(

<div className= "conteniner-fluid col-md p-5" style= {{background: "#E9BD15"}}>

  <div className="row justify-content-around">

<Tarjeta  img={imagen3}  alt="Homero"/>

<Tarjeta img={imagen4}  alt="Maggie"/>

<Tarjeta img={imagen5}  alt="Bart"/>
  
</div>


</div>
 












    






)
}

}




export default Componente3;