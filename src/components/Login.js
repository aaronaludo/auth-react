import React, { useState } from 'react';
import "./Login.css";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { loadUserData } from '../redux/actions/user';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    
    axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password
    })
    .then(res => {
      dispatch(loadUserData(res.data.user));
      cookies.set('token', res.data.token);
      history.push('/dashboard');
    })
    .catch(err => {
      setError(err.response.data);
    });
  
  } 

  return (
    <div className='body'>
      <main className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          {error !== null ? <div className="alert alert-danger" role="alert">{error.message ? error.message : error.error}</div> : null}
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary">Sign in</button>
        </form>
          <p className="my-3 text-muted" onClick={() => history.push('/register')} style={{cursor: 'pointer'}}>Create new account?</p>
      </main>
    </div>
  )
}

export default withRouter(Login);
