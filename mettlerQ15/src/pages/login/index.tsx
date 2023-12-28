import React from 'react';
import LoginImage from '../../assets/images/login.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="row">
            <div className="col-md-9 d-flex align-items-stretch">
                <img src={LoginImage} alt="LogIn Image" className="img-fluid" />
            </div>
            <div className="col-md-3">
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='card md-8 lg-6 xl-5'>
                            <div className="card overflow-hidden">
                                <div className="pt-0 card-body">
                                    <div className="auth-logo">
                                        <Link to="/" className="auth-logo-light">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src={''}
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                        <Link to="/" className="auth-logo-dark">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src={''}
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <form className="form-horizontal"
                                            onSubmit={(e) => {
                                                e.preventDefault()
                                                localStorage.setItem('authStaff','AUthenticated')
                                                navigate('/dashboard')
                                            }}
                                        >
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    type="text"
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">PassWord</label>
                                                <input
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    type="password"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <select className="form-select" id="inputGroupSelect01">
                                                    <option selected>Select Organization</option>
                                                    <option value={1}>MHC-1</option>
                                                    <option value={2}>MHC-2</option>
                                                    <option value={3}>MHC-3</option>
                                                </select>

                                            </div>

                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customControlInline"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="customControlInline"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="mt-3 d-grid">
                                                <button
                                                    className="btn btn-block text-white"
                                                    type="submit"
                                                    style={{ backgroundColor: '#0f3995' }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
