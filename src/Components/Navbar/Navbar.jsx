import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
// import { useState } from "react"


const Navbar = ({setSidebar, query="", setQuery}) => {
    
  
  // const {query} = useParams();
  const navigate = useNavigate();

    const handleSearch = (e) => {
      // e.preventDefault(); // Prevent default form submission
      

      if (query.trim() !== "") {
        console.log("Navigating to:", `/search?q=${encodeURIComponent(query)}`);
        navigate(`/search/${encodeURIComponent(query)}`);

 // Use query parameters
      }
    };

  

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} onClick={()=> setSidebar(prev=>prev===false? true:false)} alt="" />
        <Link to='/'> <img className='logo' src={logo} alt="" /></Link>
       
      </div>
      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
        <div action="submit">
        <input
        type="text"
        value={query}
        
        onChange={(e) => {console.log("User typed:", e.target.value);
          setQuery(e.target.value)}}
        placeholder="Search"
      />
      </div>
      <div>
        <button onClick={() => handleSearch(query)}><img  src={search_icon} alt="" /></button>
        
        </div>
        </div>
      </div >

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='User-icon' alt="" />

      </div>
    </nav>
  )
}

export default Navbar
