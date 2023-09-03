import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'antd';

export interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const nav = useNavigate();
    const goLogin = () => {
        // 跳转到登录页
        nav('/login');
    };

    return (
        <div>
            <p>That's the home page!</p>
            <Button onClick={goLogin} type="primary">
                去登录
            </Button>
            <Link to="/register">去注册</Link>
        </div>
    );
};
