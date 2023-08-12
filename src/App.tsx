import React from 'react';
import './App.css';
import routerConfig from './routes';
import { RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';

function App() {
    return <RouterProvider router={routerConfig}></RouterProvider>;
}

export default App;
