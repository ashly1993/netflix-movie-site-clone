import { useState } from 'react'
import Logo from '../../Assests/logo.png'
import './NavBar.css'
import Avatar from '../../Assests/Netflix-avatar.png'

function NavBar() {

const [browse, setBrowse] = useState(false)

  return (
    <div className='navBar'>
      <div className="navBarTop">
      <div className="netflixLeftSection">
        <div className="logoBox">
            <img className='netflixLogo' src={Logo} alt="Logo" />
          </div>
          <div className="menuItems">
            <ul className='netflixMenuItems'>
                <li><a href="#">Home</a></li>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">New & Popular</a></li>
                <li><a href="#">My List</a></li>
                <li><a href="#">Browse By Languages</a></li>
            </ul>
          </div>
          <div className="browseMenu">
            <a onClick={()=>{
              setBrowse(!browse)
            }} href="#">Browse</a>
          </div>
        </div>
        <div className="netflixRightSection">
        <div className="profileSection">
            <div className="searchIcon">
            <i class="fa fa-search searchIconI" aria-hidden="true"></i>
            </div>
            <div className="notificationIcon">
            <i class="fa-solid fa-bell notificationI"></i>
            </div>
            <div className="profileIcon">
             <img className='netflixAvatar' src={Avatar} alt="Avatar" />
            </div>
          </div>
        </div>  
      
      </div>
       
    { browse ?
        <div className="browseDiv">
        <ul className='browseMenuItems'>
           <li><a href="#">Home</a></li>
           <li><a href="#">TV Shows</a></li>
           <li><a href="#">Movies</a></li>
           <li><a href="#">New & Popular</a></li>
           <li><a href="#">My List</a></li>
           <li><a href="#">Browse By Languages</a></li>
       </ul>
       </div>   : null
    }  
    </div>
  )
}

export default NavBar