import styles from './EditCanvas.module.scss';
import { Skeleton } from 'antd';
import { useGetQstList } from '../../hook/useGetQstList';
import { QstTypeMapping } from '../../enum/constant.enum';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedId } from '../../store/componentsReducer';
import classNames from 'classnames';

export interface EditCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
    loading?: boolean; // 是否加载中
}

export const EditCanvas: React.FC<EditCanvasProps> = ({ loading }) => {
    const { questions, selectedId } = useGetQstList();
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (selectedId !== id) {
            dispatch(changeSelectedId(id));
        }
    };

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
            {questions.map(item => {
                const Component = QstTypeMapping[item.qstType];
                const { id, propsObj } = item;
                return (
                    <div
                        className={classNames({
                            [styles['component_wrapper']]: true,
                            [styles['selected']]: selectedId === id,
                        })}
                        key={id}
                        onClick={e => handleClick(e, id)}>
                        <div className={styles.ban}>
                            <Component {...propsObj}></Component>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
