import './SignIn.css';
import Forminput1 from '../components/Forminput1';
import Buttonlarge from '../components/Buttonlarge';
import { Link } from 'react-router-dom'; // Import Link

function Login() {
  return (
    <>
      <section className='gray-section'>
        <form>
          <h1>Sign in</h1>
          <Forminput1 placeholder="e-mail address"/>
          <Forminput1 placeholder="password"/>
          <Buttonlarge />
        </form>
        <p>Don't an account? <Link to="/">Sign up</Link></p> 
      </section>
      <img src='/src/assets/field.jpg' alt="Field"/> 
      <img className='logo' src='/src/assets/Rectangle 6.png' alt="Logo"/> 
    </>
  );
}

export default Login;
