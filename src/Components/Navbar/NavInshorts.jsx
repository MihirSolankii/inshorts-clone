import React from 'react'
import "./NavInshorts.css"
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer.js"
function NavInshorts({setCateogry}) {
   
  return (
    <div className='nav'>
      <div className='icon'><SwipeableTemporaryDrawer setCateogry={setCateogry}/></div>
      <img style={{cursor:"pointer"
      }} src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height="80%" alt='image'/>
     
    </div>
  )
}

export default NavInshorts
