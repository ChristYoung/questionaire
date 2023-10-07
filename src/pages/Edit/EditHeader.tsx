import styles from './EditHeader.module.scss';
import { Button, Typography, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ToolBar } from './ToolBar';
import { QuestionTitle } from './QuestionTitle';

export interface EditHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const { Title } = Typography;

export const EditHeader: React.FC<EditHeaderProps> = (
    props: EditHeaderProps,
) => {
    const nav = useNavigate();
    return (
        <div className={styles['__EditHeader']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button
                            onClick={() => nav(-1)}
                            type="link"
                            icon={<LeftOutlined />}>
                            返回
                        </Button>
                        <QuestionTitle />
                    </Space>
                </div>
                <div className={styles.main}>
                    <ToolBar></ToolBar>
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button type="primary">保存</Button>
                        <Button>发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};
