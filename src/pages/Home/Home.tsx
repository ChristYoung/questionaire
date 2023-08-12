import { useNavigate, Link } from 'react-router-dom';

export interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const nav = useNavigate();
    const goLogin = () => {
        // 跳转到登录页
        nav('/login');
    };

    return (
        <div>
            <button type="button" onClick={goLogin}>
                去登录
            </button>

            <Link to="/register">去注册</Link>
        </div>
    );
};
