import { Outlet } from 'react-router-dom';

export interface QuestionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const QuestionLayout: React.FC<QuestionLayoutProps> = (props: QuestionLayoutProps) => {
    return (
        <div className="__QuestionLayout" style={{ height: '100vh' }}>
            <Outlet />
        </div>
    );
};
