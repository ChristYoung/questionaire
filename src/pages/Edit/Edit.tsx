// http://localhost:3000/questionnaire/edit/5
import styles from './Edit.module.scss';
import { EditCanvas } from './EditCanvas';
import useRequest from '../../hook/useRequest';
import { ApiEnum } from '../../enum/api.enum';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { useDispatch } from 'react-redux';
import { changeSelectedId, resetQstList } from '../../store/componentsReducer';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { EditHeader } from './EditHeader';

export interface EditProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
    const [questionnaireInfo, setQuestionnaireInfo] =
        useState<QuestionnaireInfo>(null);

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const fetchData = async () => {
        setLoading(true);
        const _data = await useRequest<QuestionnaireInfo>({
            url: `${ApiEnum.QuestionnaireDetail}/${id}`,
        });
        setQuestionnaireInfo(_data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        if (questionnaireInfo) {
            const { name, questions } = questionnaireInfo;
            dispatch(resetQstList({ questions }));
        }
    }, [questionnaireInfo]);

    return (
        <div className={styles['__Edit']}>
            <div className="">
                <EditHeader></EditHeader>
            </div>
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <LeftPanel></LeftPanel>
                    </div>
                    <div
                        className={styles.main}
                        onClick={() => {
                            dispatch(changeSelectedId(''));
                        }}>
                        <div className={styles['canvas_wrapper']}>
                            <EditCanvas loading={loading} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <RightPanel></RightPanel>
                    </div>
                </div>
            </div>
        </div>
    );
};
