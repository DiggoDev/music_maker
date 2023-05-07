import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';

  import Dashboard from './container/Dashboard/Dashboard';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: (
		<Dashboard title='Dashboard title'><div id='child'></div></Dashboard>
	  ),
	},
	{
	  path: 'about',
	  element: <div>About</div>,
	},
]);

export default <RouterProvider router={router} />;