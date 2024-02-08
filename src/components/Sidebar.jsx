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
                    <div onMouseEnter={handleSidebarOpen}>
                    </div>
                ) : (
                    <>
                    <div onMouseEnter={handleSidebarClose}>
                    </div>
                    <div>
                        <div>
                            <p>About</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Recipes</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>My Area</p>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </menu>
    )

}

export default Sidebar;