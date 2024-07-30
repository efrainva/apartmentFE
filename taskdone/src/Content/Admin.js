import {React} from 'react'
import '../Components/Admin/Admin.css'
import AdminCards from '../Components/Admin/AdminCards';
import TenentCard from '../Components/Admin/TenentCard';
const Admin = () => {
    return(<section className='admin'>

        <h2 className='playwrite welcome'>apartment </h2>

        <section className='twoStage'>
            <TenentCard/>
        </section>
            {/* views of tenent
            status of bill 
            tenet list 
        <AdminCards/>
            tenet grid view can see 
            name, apartment number, paid ,past due, maitenance, unoccupied paperwork,can message
            
            total tenets and enmpty apartments */}
        </section>
    )
}
export default Admin;