import './Login.css';
import Forminput1 from '../components/Forminput1';
import Buttonlarge from '../components/Buttonlarge';

function Login () {
 return (
    <>
        <section className='gray-section'>
            <form>
                <h1>Get started</h1>
                <Forminput1 placeholder="e-mail address"/>
                <Forminput1 placeholder="password"/>
                <Buttonlarge />
            </form>
            <p>Already have an account? Sign in</p>
        </section>
        <img src='/src/assets/field.jpg'/>   
        <img className='logo' src='/src/assets/Rectangle 6.png'/> 
    </>
 )
}

export default Login;                   