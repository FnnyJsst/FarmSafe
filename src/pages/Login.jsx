import React from 'react';
import './Login.css';
import Forminput1 from '../components/Forminput1';
import Buttonlarge from '../components/Buttonlarge';
import { Link } from 'react-router-dom'; // Import Link

function Login() {
  return (
    <>
      <section className='gray-section'>
        <form>
          <h1>Get started</h1>
          <Forminput1 placeholder="e-mail address"/>
          <Forminput1 placeholder="password"/>
          <Forminput1 placeholder="confirm password"/>
          <Buttonlarge />
        </form>
        <p>Already have an account? <Link to="/signin">Sign in</Link></p> {/* Use Link instead of anchor */}
      </section>
      <img src='/src/assets/field.jpg' alt="Field"/> {/* Add alt attribute */}
      <img className='logo' src='/src/assets/Rectangle 6.png' alt="Logo"/> {/* Add alt attribute */}
    </>
  );
}

export default Login;
