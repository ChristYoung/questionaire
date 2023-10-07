import styles from './EditHeader.module.scss';
import { Button, Typography, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ToolBar } from './ToolBar';
import { QuestionTitle } from './QuestionTitle';
import useRequest from '../../hook/useRequest';
import { useSelector, useDispatch } from 'react-redux';
import { getQstListSelector } from '../../store/componentsReducer/componentsSlice';
import { questionnaireInfoSelector } from '../../store/questionnaireInfoReducer/questionnaireInfoSlice';
import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { ApiEnum } from '../../enum/api.enum';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useKeyPress } from 'ahooks';

export interface EditHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const { Title } = Typography;

export const EditHeader: React.FC<EditHeaderProps> = (
    props: EditHeaderProps,
) => {
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const { questions } = useSelector(getQstListSelector);
    const { name, description, script, style, id } = useSelector(
        questionnaireInfoSelector,
    );

    const onSave = async () => {
        setLoading(true);
        await useRequest<QuestionnaireInfo>({
            method: 'POST',
            url: `${ApiEnum.SaveQuestionnaire}/`,
            data: { name, description, script, style, id, questions },
        });
        setLoading(false);
    };

    useKeyPress(['ctrl.s', 'meta.s'], (e: KeyboardEvent) => {
        e.preventDefault();
        if (!loading) {
            onSave();
        }
    });
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
                        <Button>发布</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};
