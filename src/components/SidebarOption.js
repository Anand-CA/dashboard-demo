import React from "react"
import "./SidebarOption.css"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
function SidebarOption({ title }) {
   return (
      <div className="sidebarOption">
         <HomeRoundedIcon />
         <h4 style={{ marginLeft: "20px" }}>{title}</h4>
      </div>
   )
}

export default SidebarOption
