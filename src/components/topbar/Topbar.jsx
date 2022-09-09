import React from 'react'
import "./topbar.css";
import {NotificationsNone,Language,Settings} from'@material-ui/icons';
function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"> 
           <span className="logo">
            Admin Panel
           </span>
            </div>
                <div className="topRight">
                    <div className='topbarIconContainer'>
                 <NotificationsNone />
                 <span className='topIconBadge'>2</span>
                 </div>
                 <div className='topbarIconContainer'>
                 <Language />
                 <span className='topIconBadge'>2</span>
                 </div>
                 <div className='topbarIconContainer'>
                 <Settings />
                 </div>
                 <img src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar