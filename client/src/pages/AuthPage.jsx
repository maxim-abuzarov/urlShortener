import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }
        catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }
        catch (e) {

        }
    }

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1 className="center-align">Short URL</h1>


                <div className="card teal lighten-2">
                    <div className="card-content black-text">
                        <span className="card-title center-align">Auth</span>
                        <div>

                            <div className="input-field">
                                <input
                                    placeholder="Enter your email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className='black-input center-align'
                                    value={form.email}
                                    onChange={changeHandler}
                                />
                                <input
                                    placeholder="Enter your password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className='black-input center-align'
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="card-action center-align">
                        <button
                            className="btn cyan accent-2 black-text"
                            style={{marginRight: '20px'}}
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Login
                        </button>
                        <button
                            className="btn cyan accent-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;