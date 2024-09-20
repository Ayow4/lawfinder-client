import './agreeMent.css';
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react'; // Import Clerk's hook
import { Link } from 'react-router-dom';

const AgreeMent = () => {
    const { isSignedIn } = useAuth(); // Get the authentication status
    const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };
  // If user is authenticated, do not render the agreement
  if (isSignedIn) {
    return null; // or redirect to dashboard
  }

  return (
    <div className='agreeMent'>
      <h2>Terms of Service & Privacy Policy</h2>
      <p>
        By using our service, you agree to our
        <a href="/termsofservice" target="_blank" rel="noopener noreferrer"> Terms of Service</a>
        &nbsp;and 
        <a href="/privacypolicy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
      </p>
      <div>
        <input 
          type="checkbox" 
          id="agree" 
          checked={agreed} 
          onChange={handleAgreementChange} 
        />
        <label htmlFor="agree">I agree to the Terms of Service and Privacy Policy</label>
      </div>
      
      <div className='buttons'>
      <Link to="/">
          <button className="cancel">Cancel</button>
        </Link>
        <Link to="/dashboard">
          <button disabled={!agreed}>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default AgreeMent;