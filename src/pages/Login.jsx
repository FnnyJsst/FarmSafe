import './Login.css';
import Forminput1 from '../components/Forminput1';
import Buttonlarge from '../components/Buttonlarge';

function Login () {
 return (
    <div>
        <section className='gray-section'>
            <div className='login-form'>
                <h1>Get started</h1>
                <form>
                    <Forminput1 />
                    <Forminput1 />
                    <Buttonlarge />
                </form>
                <p>Already have an account? Sign in</p>
            </div>
        </section>
        <img src='/src/assets/corn-field.jpg'/>
    </div>
 )
}

export default Login;                   