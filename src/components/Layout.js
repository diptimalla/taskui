import {Link , Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <div>
            
            <nav style={{backgroundColor:'lightpink' , paddingBottom:10}}>
                <h2> TASK</h2>
              
                <Link to={'/tasklist'} >Task List</Link> |  
                <Link to={'/taskform'}>Task Form</Link> |
                <Link to={'/taskitem'}>Task Item</Link> |
                <Link to={'/taskupdate'}>Task Update</Link> 
               
            </nav>

            <Outlet/>
        </div>
    )
}