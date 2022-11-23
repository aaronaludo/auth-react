import React from 'react';
import { withRouter } from 'react-router-dom';

const Dashboard = props => {
    console.log(props.history);
    
    return (
        <div>
            dashboard to guys
        </div>
    )
}

export default withRouter(Dashboard);
