import AddEmployee from './newEmp'
import {DisplayEmployee} from './addEmp'

function Home(props){
    return(
        <div className="container">
            <AddEmployee add={props.add} />
            <DisplayEmployee list={props.list} />
        </div>
    )
}

export default Home;