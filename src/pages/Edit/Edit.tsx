// http://localhost:3000/questionnaire/edit/5
import styles from './Edit.module.scss';
import { EditCanvas } from './EditCanvas';
import useRequest from '../../hook/useRequest';
import { questionnaireDetail } from '../../enum/api.enum';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuestionnaireInfo } from '../../types';

export interface EditProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
    const [questionnaireInfo, setQuestionnaireInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const fetchData = async () => {
        setLoading(true);
        const _data = await useRequest<QuestionnaireInfo>({
            url: `${questionnaireDetail}/${id}`,
        });
        setQuestionnaireInfo(_data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div className={styles['__Edit']}>
            {/* <div className="">Header</div> */}
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles['canvas_wrapper']}>
                            <EditCanvas loading={loading} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        {JSON.stringify(questionnaireInfo)}
                    </div>
                </div>
            </div>
        </div>
    );
};
