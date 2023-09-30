import { nanoid } from '@reduxjs/toolkit';
import { Typography } from 'antd';
import styles from './ComponentLibs.module.scss';
import { QstType } from '../../types';
import { useDispatch } from 'react-redux';
import { COMPONENT_GROUP, QstTypeMapping } from '../../enum/constant.enum';
import { addQst } from '../../store/componentsReducer';

const { Title } = Typography;

export interface ComponentLibsProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const ComponentLibs: React.FC<ComponentLibsProps> = (
    props: ComponentLibsProps,
) => {
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent, qstType: QstType) => {
        e.stopPropagation();
        dispatch(addQst({ id: nanoid(36), qstType }));
    };

    return (
        <div className="__ComponentLibs">
            {COMPONENT_GROUP.map((g, gIndex) => {
                return (
                    <div key={g.gId}>
                        <Title
                            level={3}
                            style={{
                                fontSize: '16px',
                                marginTop: gIndex === 0 ? '0' : '20px',
                            }}>
                            {g.groupName}
                        </Title>
                        <div>
                            {g.componentList.map((qstType, _index) => {
                                const QstItemComponent =
                                    QstTypeMapping[qstType];
                                return (
                                    <div
                                        key={`${qstType}_${_index}`}
                                        className={styles.wrapper}
                                        onClick={e => handleClick(e, qstType)}>
                                        <div className={styles.component}>
                                            <QstItemComponent />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
