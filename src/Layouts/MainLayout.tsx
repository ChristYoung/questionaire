import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC<any> = (props: any) => {
    return (
        <>
            <div>header</div>
            <div>
                <Outlet />
            </div>
            <div>footer</div>
        </>
    );
};
