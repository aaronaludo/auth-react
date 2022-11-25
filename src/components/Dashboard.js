import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import cookies from 'js-cookie';

const Dashboard = props => {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/tasks`, {
        headers: {
            "Authorization": `Bearer ${cookies.get('token')}`
        }
    }).catch(() => {
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
        cookies.remove('token');
        props.history.push('/login');
    });
  }
    
  return (
    <>
      <div>dashboard to guys</div>
      <button onClick={logoutHandle}>logout</button>
    </>
  )
}

export default withRouter(Dashboard);
