import React from 'react'
import './display.css'
import bin from './picture/bin.png'

function DisplayEmployee(props){
   
    const close = document.querySelectorAll('td');
    for (let i=0; i<close.length; i++)
    {
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.display = "none";
        })
    }
   
    return(
        <div>
            <div className='fix'>
            <h1>Employee List</h1>
            </div>
          
           <table>
            <thead>
                <tr>
                    <th><h3>Name</h3></th>
                    <th><h3>Last Name</h3></th>
                    <th><h3>Email</h3></th>
                    <th><h3>Action</h3></th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((item)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{item.email}</td>
                        <td>
                            <span><button><img style={{width: '45px', height: '45px'}} src={bin} alt="delete"></img></button></span>
                        </td>
                    </tr>
                ))}
            </tbody>
           </table>
               
        </div>
    );
}
export {DisplayEmployee};