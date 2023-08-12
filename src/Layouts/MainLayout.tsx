import { Outlet } from 'react-router-dom';
export interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
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
