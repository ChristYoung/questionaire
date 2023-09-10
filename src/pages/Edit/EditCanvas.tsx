import styles from './EditCanvas.module.scss';
import { QInput } from '../../components/QuestionComponents/QInput';
import { QTitle } from '../../components/QuestionComponents/QTitle';
import { Skeleton } from 'antd';
import { useGetQstList } from '../../hook/useGetQstList';

export interface EditCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean; // 是否加载中
}

export const EditCanvas: React.FC<EditCanvasProps> = ({ loading }) => {
    const qstList = useGetQstList();

    if (loading) {
        return (
            <div
                style={{
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    height: '100%',
                    padding: '30px',
                }}>
                <Skeleton
                    avatar
                    paragraph={{ rows: 4 }}
                />
            </div>
        );
    }

    return (
        <div className={styles['__EditCanvas']}>
            <div className={styles['component_wrapper']}>
                <div className={styles.ban}>
                    <QTitle></QTitle>
                </div>
            </div>
            <div className={styles['component_wrapper']}>
                <div className={styles.ban}>
                    <QInput></QInput>
                </div>
            </div>
        </div>
    );
};
