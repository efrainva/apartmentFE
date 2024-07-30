import {React} from 'react';
import { Link, } from 'react-router-dom';


const Login = ()=>{
    
    return(

    <div className="taskcard"> 
        <Link to='/admin'>admin view</Link>
        login card
        <Link to ='tenent'>tenent view</Link>
    </div>
    )
}

export default Login;