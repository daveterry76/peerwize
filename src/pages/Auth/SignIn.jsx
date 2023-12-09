import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
// import logo from '../Auth/logo.svg'
import logo from '../Auth/assets/logo.png'
import '../Auth/styles/auth.scss'

const SignIn = () => {

    const { email, setEmail, password, setPassword } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLogin = () => {
        // Integrate the firebase login feature
    }


    useEffect(() => {
        document.title = 'Login to Peerwize'
    })

  return (
    <>
            <div className='logo__container'>
                <img className='logo' src={logo} alt='peerwize logo' />
                <h6>connecting skills, creating futures...</h6>
            </div>
            <div className='auth__container'>
                <h1>Login to <span>Peerwize</span></h1>
                <div>
                    <hr />
                    <h3>Don't have an account? <span><Link to='/signup'>Sign up</Link></span></h3>
                    <hr />
                </div>    
                <div className='auth__container--form'>
                    <form>
                        <input
                            type='email'
                            placeholder='Email/Phone number'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            { showPassword 
                            
                            ?

                            <svg onClick={handleShowPassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                            :     

                            <svg onClick={handleShowPassword} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            }
                        </div>
                        <Link to='/forgot-password'><p>Forgot Password</p></Link>
                        <button
                            className='auth__container--btn'
                            type="submit"
                            placeholder='Login'
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </div>   
                <h5>By continuing, you agree to our <span>Terms of service</span> and <span>Privacy policy</span></h5>            
            </div>
    </>
  )
}

export default SignIn