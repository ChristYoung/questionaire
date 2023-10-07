import { nanoid } from '@reduxjs/toolkit';
import { Typography } from 'antd';
import { QstType } from '../../components/QuestionComponents/types';
import { COMPONENT_GROUP, QstTypeMapping } from '../../enum/constant.enum';
import { addOrCopyQuestion } from '../../store/componentsReducer/componentsSaga';
import styles from './ComponentLibs.module.scss';
import { useDispatch } from 'react-redux';

const { Title } = Typography;

export const ComponentLibs: React.FC = () => {
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent, qstType: QstType) => {
        e.stopPropagation();
        const newId = nanoid(36);
        dispatch(
            addOrCopyQuestion({
                id: newId,
                qstType,
                propsObj: { isHidden: false },
            }),
        );
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
