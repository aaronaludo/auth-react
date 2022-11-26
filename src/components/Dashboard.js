import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';
import { useSelector } from 'react-redux'
import { logoutUser } from '../redux/actions/user';
import { useDispatch } from 'react-redux';

const Dashboard = props => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/user`, {
        headers: {
            "Authorization": `Bearer ${cookies.get('token')}`
        }
    }).catch(() => {
        dispatch(logoutUser());
        cookies.remove('token');
        props.history.push('/login');
    });
    // eslint-disable-next-line
  }, []);

  const logoutHandle = (e) => {
    e.preventDefault();
    axios.get(`http://127.0.0.1:8000/api/logout`, {
        headers: {
            "Authorization": `Bearer ${cookies.get('token')}`
        }
    }).then(() => {
        dispatch(logoutUser());
        cookies.remove('token');
        props.history.push('/login');
    });
  }
    
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>  
      <button onClick={logoutHandle}>logout</button>
    </>
  )
}

export default withRouter(Dashboard);
