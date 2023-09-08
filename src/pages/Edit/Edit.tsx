// http://localhost:3000/questionnaire/edit/5
import styles from './Edit.module.scss';
import { EditCanvas } from './EditCanvas';
import useRequest from '../../hook/useRequest';
import { questionnaireDetail } from '../../enum/api.enum';
import { useEffect } from 'react';

export interface EditProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
    const fetchData = async () => {
        const response = await useRequest({
            url: `${questionnaireDetail}/6`,
        });
        console.log('response', response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles['__Edit']}>
            {/* <div className="">Header</div> */}
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles['canvas_wrapper']}>
                            <EditCanvas />
                        </div>
                    </div>
                    <div className={styles.right}>right</div>
                </div>
            </div>
        </div>
    );
};
