import { useState } from 'react'

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
                    <div className="sidebar-icon" onMouseEnter={handleSidebarOpen}>
                    </div>
                ) : (
                    <div onMouseLeave={handleSidebarClose}>
                        <div className="sidebar-icon">
                        </div>
                        <div className="sidebar-items">
                            <div className="sidebar-item">
                                <p>About</p>
                            </div>
                            <div className="sidebar-item">
                                <p>Recipes</p>
                            </div>
                            <div className="sidebar-item">
                                <p>My Area</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </menu>
    )

}

export default Sidebar;