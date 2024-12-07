import { useState, useEffect } from 'react'; // Add useState here
import { Outlet, useNavigate } from 'react-router-dom'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import ChatList from "../../components/chatList/ChatList"

const DashboardLayout = () => {


  const {userId, isLoaded} = useAuth()

  const navigate = useNavigate();

// State for toggling the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboardLayout">

    {/* Menu Toggle Button for Small Screens */}
      <button className="menuToggle" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Menu */}
      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <ChatList />
      </div>

    <div className="content">
      <Outlet />
    </div>
  </div>
  )
}

export default DashboardLayout
