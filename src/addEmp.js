import React from 'react'
import './display.css'

function DisplayEmployee(props){
    return(
        <div>
            <div className='fix'>
            <h1>Employee List</h1>
            </div>
          
            <div className="heading">
                <p style={{paddingLeft: "12px", paddingTop: "20px"}}>Name</p>
                <p style={{paddingLeft: "290px", paddingTop: "20px"}}>Surname</p>
                <p style={{paddingLeft: "290px", paddingTop: "20px"}}>Email</p>
            </div>
           {props.list.map((item) => (
               <div>
                    <div className="transaction-item">
                       <div>
                           <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{item.name}</h4>
                       </div>
                       <div>
                           <h4 style={{marginLeft: "290px", paddingTop: "20px"}}>{item.surname}</h4>
                       </div>
                       <div>
                           <h4 style={{paddingLeft: "290px", paddingTop: "20px"}}>{item.email}</h4>
                       </div>
                   </div> 
               </div>
           ))}
        </div>
    );
}
export {DisplayEmployee};