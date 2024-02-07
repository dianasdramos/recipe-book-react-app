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
            <div>
                {!sidebarOpen ? (
                    <div onMouseEnter={handleSidebarOpen}>
                        <i></i>
                    </div>
                ) : (
                    <>
                    </>
                )}
            </div>
        </menu>
    )

}

export default Sidebar;