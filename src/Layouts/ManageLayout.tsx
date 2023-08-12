import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button, Space, Divider } from 'antd';
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './ManageLayout.module.scss';

export interface ManageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ManageLayout: React.FC<ManageLayoutProps> = (props: ManageLayoutProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Space direction="vertical">
                    <Button type="primary" size="large" icon={<PlusOutlined></PlusOutlined>}>
                        创建问卷
                    </Button>
                    <Divider />
                    <Button size="large" icon={<BarsOutlined></BarsOutlined>} onClick={() => navigate('/manage/list')}>
                        我的问卷
                    </Button>
                    <Button size="large" icon={<DeleteOutlined></DeleteOutlined>} onClick={() => navigate('/manage/trash')}>
                        回收站
                    </Button>
                </Space>
            </div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    );
};
