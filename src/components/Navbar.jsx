import menu from "../assets/images/menu.png"
import search from "../assets/images/search.png"
import more from "../assets/images/more.png"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom";


function Navbar() {


    return (
        <nav className="navbar-container">
            <div className="menuLeft">
                <a href={Sidebar}><img src={menu} alt="" /></a>
            </div>
            <div className="menuRight">
                <Link id="searchIcon" to="/recipes"><img src={search} alt="search icon leads to recipes page" /></Link>
                <Link to="/about"><img src={more} alt="more icon leads to about us page" /></Link>
            </div>
        </nav>
    )

}

export default Navbar;