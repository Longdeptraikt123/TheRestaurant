import React, { useState } from "react";
import './login.scss'

const LogIn = () => {
    const [isFailed, setIsFailed] = useState('failed')
    const handleFailed = () => {
        setIsFailed('login-failed')
    }
    const handleClear = () => {
        setIsFailed('failed')
    }
    return (
        <div scroll="false" className="log-in">
            <form>
                <h2>Log in Form</h2>
                <div className="user-box">
                    <input
                        required='required'
                        spellCheck='false'
                        type='email'
                        placeholder=" "

                    />
                    <label>User's name</label>
                </div>
                <div className="user-box">
                    <input
                        placeholder=" "
                        required='required'
                        type='password'
                    />
                    <label>Password</label>
                </div>
                <a className="log-in-btn" onClick={handleFailed} href="#1">
                    Log in
                </a>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <a href="#ds">
                        Forget Password ?
                    </a>
                    <a href="#ds">
                        Don't have an account ?
                    </a>
                </div>
                <div className={isFailed}>
                    <h3>Login failed</h3>
                    <span>Username or password incorrect </span>
                    <button onClick={handleClear}>
                        Log in again ?
                    </button>
                </div>
            </form>
        </div>
    )
}
export default LogIn