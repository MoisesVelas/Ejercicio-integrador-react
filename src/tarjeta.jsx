import { Fragment } from "react"


export default function Tarjeta(props) {

  console.log(props.img)

return (


          <Fragment>

            

          <div className="col-md-4 bg-white" style={{width: 250 }}>
            <img src={props.img} classNames="card-img-top" alt={props.alt}></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          
          
            </div>

            
            </Fragment>


          )};

