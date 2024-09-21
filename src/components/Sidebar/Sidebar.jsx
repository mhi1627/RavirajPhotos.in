

import Button from "../Button/Button"
import "./sidebar.css"
export default function Sidebar () {
    return (
        <>
        <div className="sidebar">
           <Button id = "dashboard" lable = "Dashboard" className="dashbtn"></Button>
           <Button id = "manageClients" lable = "Manage Clients" className="dashbtn"></Button>
           <Button id = "storage" lable = "Storage" className="dashbtn"></Button>
        </div>
        </>
    )
}