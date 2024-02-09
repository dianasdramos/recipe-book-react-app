import menu from "../assets/images/menu.png"
import search from "../assets/images/search.png"
import more from "../assets/images/more.png"
import Sidebar from "../components/Sidebar"

function Navbar() {


    return (
        <nav className="navbar-container">
            <div className="menuLeft">
                <a href={Sidebar}><img src={menu} alt="" /></a>
            </div>
            <div className="menuTitle">
                <h3><b>Page Title</b></h3>
            </div>
            <div className="menuRight">
                <a href=""><img src={search} alt="" /></a>
                <a href=""><img src={more} alt="" /></a>
            </div>
        </nav>
    )

}

export default Navbar;