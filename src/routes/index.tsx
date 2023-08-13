import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../Layouts/MainLayout';
import { ManageLayout } from '../Layouts/ManageLayout';
import { QuestionLayout } from '../Layouts/QuestionLayout';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { List } from '../pages/List/List';
import { Trash } from '../pages/Trash/Trash';
import { Edit } from '../pages/Edit/Edit';
import { Stat } from '../pages/Stat/Stat';
import { Error404 } from '../pages/Error404';

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
                children: [
                    { path: 'list', element: <List /> },
                    { path: 'trash', element: <Trash /> },
                ],
            },
            { path: '*', element: <Error404 /> },
        ],
    },
    {
        path: 'questionaire',
        element: <QuestionLayout />,
        children: [
            { path: 'edit/:id', element: <Edit /> },
            { path: 'stat/:id', element: <Stat /> },
        ],
    },
]);

export default routerConfig;
