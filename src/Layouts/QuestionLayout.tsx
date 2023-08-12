import { Outlet } from 'react-router-dom';

export interface QuestionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const QuestionLayout: React.FC<QuestionLayoutProps> = (props: QuestionLayoutProps) => {
    return (
        <>
            <div>adasd</div>
            <Outlet />
        </>
    );
};
