import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.scss"

const LoginComponent = ({ onSubmit }) => {
    const [mode, setMode] = useState('login');
    const navigate = useNavigate();

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'login' ? 'signup' : 'login'));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(onSubmit) onSubmit();
        navigate("/");
    }

    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                    <div className="form-block__toggle-block">
                        <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode} />
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <FormContent mode={mode} onSubmit={handleSubmit} />
            </section>
        </div>
    );
};

const FormContent = ({ mode, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-block__input-wrapper">
                <div className={`form-group form-group--login ${mode === 'signup' ? 'hidden' : ''}`}>
                    <Input type="text" id="username" label="User Name" disabled={mode === 'signup'} />
                    <Input type="password" id="password" label="Password" disabled={mode === 'signup'} />
                </div>
                <div className={`form-group form-group--signup ${mode === 'login' ? 'hidden' : ''}`}>
                    <Input type="text" id="fullname" label="Full Name" disabled={mode === 'login'} />
                    <Input type="email" id="email" label="Email" disabled={mode === 'login'} />
                    <Input type="password" id="createpassword" label="Password" disabled={mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="Repeat Password" disabled={mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">
                {mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>
        </form>
    );
};

const Input = ({ id, type, label, disabled }) => (
    <input
        className="form-group__input"
        type={type}
        id={id}
        placeholder={label}
        disabled={disabled}
    />
);

export default LoginComponent;
