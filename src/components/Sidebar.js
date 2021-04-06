import React from "react"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebar__header">
            <img
               style={{ height: "80px" }}
               src="https://uilogos.co/img/logomark/treva.png"
               alt=""
            />
         </div>
         <div className="sidebar__body">
            <SidebarOption title="Home" />
            <SidebarOption title="Dashboard" />
            <SidebarOption title="My course"/>
            <SidebarOption title="Achievements"/>
            <SidebarOption title="Forum" />
         </div>
      </div>
   )
}

export default Sidebar
