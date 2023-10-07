import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDebounceEffect, useKeyPress } from 'ahooks';
import { Button, Space } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { ApiEnum } from '../../enum/api.enum';
import useRequest from '../../hook/useRequest';
import { getQstListSelector } from '../../store/componentsReducer/componentsSlice';
import { questionnaireInfoSelector } from '../../store/questionnaireInfoReducer/questionnaireInfoSlice';
import styles from './EditHeader.module.scss';
import { QuestionTitle } from './QuestionTitle';
import { ToolBar } from './ToolBar';

export const EditHeader: React.FC = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const { questions } = useSelector(getQstListSelector);
    const { name, description, script, style, id, status } = useSelector(
        questionnaireInfoSelector,
    );

    const onSave = async () => {
        setLoading(true);
        await useRequest<QuestionnaireInfo>({
            method: 'POST',
            url: `${ApiEnum.SaveQuestionnaire}/`,
            data: { name, description, script, style, id, questions, status },
        });
        setLoading(false);
    };

    useKeyPress(['ctrl.s', 'meta.s'], (e: KeyboardEvent) => {
        e.preventDefault();
        if (!loading) {
            onSave();
        }
    });

    const onPublish = async () => {
        setLoading(true);
        await useRequest<QuestionnaireInfo>({
            method: 'POST',
            url: `${ApiEnum.SaveQuestionnaire}/`,
            data: {
                name,
                description,
                script,
                style,
                id,
                questions,
                status: 'PUB',
            },
        });
        setLoading(false);
    };

    useDebounceEffect(
        () => {
            onSave();
        },
        [name, description, script, style, questions],
        { wait: 500 },
    );

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
                        <Button
                            type="primary"
                            disabled={loading}
                            icon={loading ? <LoadingOutlined /> : null}
                            onClick={onSave}>
                            保存
                        </Button>
                        <Button
                            onClick={onPublish}
                            disabled={status === 'PUB'}>
                            发布
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};
