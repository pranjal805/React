import React from 'react';
import { useState } from 'react';
import './Signin.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/userslice';
import { useNavigate } from 'react-router-dom'; 
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleeSubmit = async (event) => {
      event.preventDefault();
      try {
        const data = await dispatch(login({ username: email, password: password }));
        data && data?.payload?.roles && data?.payload?.roles.includes('ADMIN') ? navigate('/about'):navigate('/home');
      } catch (error) {
        console.error('Login error:', error);
      }
    };
    return (
      <div className="siginstyle">
      <form onSubmit={handleeSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            // type="email"
            className="form-control"
            id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );
  };

export default Signin;