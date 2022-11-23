import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const routes = [
    {
        'path': '/login',
        'component': Login,
        'type': 'guest',
    },
    {
        'path': '/dashboard',
        'component': Dashboard,
        'type': 'authenticated'
    }
]

export default routes;
