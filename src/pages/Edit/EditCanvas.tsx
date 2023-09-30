import styles from './EditCanvas.module.scss';
import { Skeleton } from 'antd';
import { useGetQstList } from '../../hook/useGetQstList';
import { QstTypeMapping } from '../../enum/constant.enum';

export interface EditCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean; // 是否加载中
}

export const EditCanvas: React.FC<EditCanvasProps> = ({ loading }) => {
    const qstList = useGetQstList();
    console.log('qstList', qstList);

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
            {qstList.map(item => {
                const Component = QstTypeMapping[item.qstType];
                const { id, propsObj } = item;
                return (
                    <div
                        className={styles['component_wrapper']}
                        key={id}>
                        <div className={styles.ban}>
                            <Component {...propsObj}></Component>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
