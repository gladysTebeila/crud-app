import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import "./newEmployee.css"


function NewEmployee(props){
    const [firstName, setFirstName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    
    let history = useHistory();

    const register = (()=>{

        props.register(firstName, lastName, email);
        
    })

    return(
        <div className="addEmployees">
             <h1>New Employee</h1>
             <h3>First Name</h3>
            <input type="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
            <h3>Last Name</h3>
            <input type="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
            <h3>Email</h3>
            <input type="Email" onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>

            <button style={{width: "100px", height: "40px"}} onClick={register}>AddEmployee</button>
        </div>
    )
}
export default NewEmployee;