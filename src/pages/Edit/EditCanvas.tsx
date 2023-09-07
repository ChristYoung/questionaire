import styles from './EditCanvas.module.scss';
import { QInput } from '../../components/QuestionComponents/QInput';
import { QTitle } from '../../components/QuestionComponents/QTitle';

export interface EditCanvasProps extends React.HTMLAttributes<HTMLDivElement> {}

export const EditCanvas: React.FC<EditCanvasProps> = () => {
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
