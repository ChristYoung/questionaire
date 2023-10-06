import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { ManageLayout } from '../layouts/ManageLayout';
import { QuestionLayout } from '../layouts/QuestionLayout';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Trash } from '../pages/Trash/Trash';
import { Edit } from '../pages/Edit/Edit';
import { Error404 } from '../pages/Error404';
import { Todolist } from '../components/TodoList/Todolist';

const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            {
                path: 'manage',
                element: <ManageLayout />,
                children: [{ path: 'trash', element: <Trash /> }],
            },
            { path: '*', element: <Error404 /> },
        ],
    },
    {
        path: 'questionnaire',
        element: <QuestionLayout />,
        children: [{ path: 'edit/:id', element: <Edit /> }],
    },
    {
        path: 'todo',
        element: <Todolist />,
    },
]);

export default routerConfig;
