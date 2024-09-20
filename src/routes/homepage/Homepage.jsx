import { Link, useNavigate  } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
        {/* Add a button inside the modal to proceed to dashboard */}
        <button onClick={onClose}>I Agree</button>
      </div>
    </div>
  );
}

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  const [showModal, setShowModal] = useState(false); // State to show/hide modal
  const [modalContent, setModalContent] = useState({}); // Content for modal
  const navigate = useNavigate(); // For navigating to /dashboard

   // Function to handle "Get Started" click and show Terms of Service & Privacy Policy modal
   const handleGetStartedClick = () => {
    setModalContent({
      title: "Privacy Policy & Terms of Service",
      text: "Before proceeding, please review our Privacy Policy and Terms of Service."
    });
    setShowModal(true); // Show the modal first
  };

  // Function to close the modal and navigate to the dashboard
  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    navigate('/dashboard'); // Navigate to /dashboard after modal is closed
  };

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AI LAW FINDER</h1>
        <h2>Simplifying Legal Concepts for Everyone</h2>
        <h3>
          Ai Lawfinder is designed to guide you through the maze of legal information,
          providing clarity and support whether you're new to legal matters or need a quick refresher.
        </h3>
       {/* Button to open modal for Privacy Policy & Terms of Service */}
       <button onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.png"
                  : typingStatus === "human2"
                    ? "/human1.png"
                    : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "User: What is the purpose of a legal contract?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI Bot: A legal contract outlines the terms and conditions agreed upon by parties.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "User: Can you explain the concept of 'stare decisis'?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI Bot: 'Stare decisis' is the doctrine of adhering to precedent in judicial decisions.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/termsofservice">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
      </div>
       {/* Modal for displaying Privacy Policy & Terms of Service */}
       {showModal && (
        <Modal 
          content={modalContent} 
          onClose={handleCloseModal} // Close modal and navigate to dashboard
        />
      )}
    </div>
  )
}

export default Homepage