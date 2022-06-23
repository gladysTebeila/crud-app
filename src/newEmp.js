import React, {useState} from "react"
import "./addEmployee.css"
function AddEmployee(props){

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    const add=(()=>{

        /*const employee={
            name:name,
            surname:surname,
            email:email,
        };*/

        props.add(name, surname, email);
    })

    return(
        <div className="container">

            <h1 style={{paddingLeft: "5px"}}>New Employee</h1>
            <p>First Name</p>
            <input type="text"  placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <p>Last Name</p>
            <input type="text" placeholder="Enter your last name" onChange={(e)=>setSurname(e.target.value)} />
            <p>Email</p>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br></br>

            <button className="btn" onClick={add}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;