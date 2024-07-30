import React from 'react';

// import '../../App.css'


const AdminCards =(props) =>{

    console.log(props.value,'look')
    // for( let i = 0; i < )
    return(<card className = "taskcard">
        <div>
            <h3>name</h3><p>appt:number </p>
            <p>status of bill</p>
            <p>messages</p>
            <p>maitenance</p>
        </div>
        
    </card>)
}

export default AdminCards;