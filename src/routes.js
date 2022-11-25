import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

const routes = [
    {
        'path': '/login',
        'component': Login,
        'type': 'guest',
    },
    {
        'path': '/register',
        'component': Register,
        'type': 'guest',
    },
    {
        'path': '/dashboard',
        'component': Dashboard,
        'type': 'authenticated'
    }
]

export default routes;
