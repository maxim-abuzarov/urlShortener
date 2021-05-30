import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";

const AuthPage = () => {
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data)
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
                                    onChange={changeHandler}
                                />
                                <input
                                    placeholder="Enter your password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className='black-input center-align'
                                    onChange={changeHandler}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="card-action center-align">
                        <button
                            className="btn cyan accent-2 black-text"
                            style={{marginRight: '20px'}}
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