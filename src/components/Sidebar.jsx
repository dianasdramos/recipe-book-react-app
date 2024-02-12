import { useState } from 'react'
import { Link } from "react-router-dom";

function Sidebar() {

        const [sidebarOpen, setSidebarOpen] = useState(false);

        const handleSidebarOpen = () => {
            setSidebarOpen(true);
        };

        const handleSidebarClose = () => {
            setSidebarOpen(false);
        };

    return (
        <menu>
            <div className="sidebar">
                {!sidebarOpen ? (
                    // when the sidebar is closed, we only show the icon. And when is open, we show the icon and the text of the items
                    <div className="sidebar-icon" onMouseEnter={handleSidebarOpen}>
                    </div>
                ) : (
                    // sidebar collapsed when the pointer goes out of the sidebar
                    <div onMouseLeave={handleSidebarClose}>
                        <div className="sidebar-icon">
                        </div>
                        <div className="sidebar-items">
                            <Link to="/recipes"><div className="sidebar-item">
                                <p>Recipes</p>
                            </div>
                            </Link>
                            <Link to="/about"><div className="sidebar-item">
                                <p>About</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </menu>
    )

}

export default Sidebar;