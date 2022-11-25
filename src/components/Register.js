import React, { useState } from 'react';
import "./Login.css";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    
    axios.post('http://127.0.0.1:8000/api/register', {
      email: 'test@gmail.com',
      name: 'test',
      password: 'password',
      password_confirmation: 'password'
    })
    .then(res => {
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
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          {error !== null ? <div className="alert alert-danger" role="alert">{error.message ? error.message : error.error}</div> : null}
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingInputName" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
            <label htmlFor="floatingInputName">Name</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPasswordConfirmation" placeholder="Password Confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
            <label htmlFor="floatingPasswordConfirmation">Password Confirmation</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary">Sign in</button>
        </form>
          <p className="my-3 text-muted" onClick={() => history.push('/login')} style={{cursor: 'pointer'}}>Already have an account?</p>
      </main>
    </div>
  )
}

export default withRouter(Register);