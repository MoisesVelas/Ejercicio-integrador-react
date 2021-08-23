 import React from 'react'
 
 export default function Contacto() {
     return (
        <div className="conteniner-fluid col-md p-5" style= {{background: "#E9BD15"}}  >

            <h2>Contacto</h2>

            <div className="row">



            <div className="col sm-4" >

            <div className="sm-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="sm-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

                </div>
            </div>
             
         </div>

         
     )
 }
 