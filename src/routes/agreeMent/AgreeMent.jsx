import './agreeMent.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AgreeMent = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

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
        {agreed ? (
          <Link to="/dashboard">
            <button>Continue</button>
          </Link>
        ) : (
          <Link to="/">
            <button>Cancel</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AgreeMent;