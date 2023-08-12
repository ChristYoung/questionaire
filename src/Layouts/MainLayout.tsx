import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './MainLayout.module.scss';

export interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const { Header, Content, Footer } = Layout;
export const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    return (
        <Layout>
            <Header className={styles.header}>header(8-5未看完)</Header>
            <Content className={styles.main}>
                <Outlet />
            </Content>
            <Footer className={styles.footer}>问卷 &copy; 2023</Footer>
        </Layout>
    );
};
