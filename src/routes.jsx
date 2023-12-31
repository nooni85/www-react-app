import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/user/login';
import Join from "./pages/user/join";
import Root from "./pages/root";

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />
	},
	{
		path: "/user",
		element: <Home />,
		children: [
			{
        path: "/user/sign-in",
        element: <Login />
      },
			{
        path: "/user/sign-up",
        element: <Join />
      }
		]
	}
]);

export default routes;