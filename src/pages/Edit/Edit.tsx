// http://localhost:3000/questionaire/edit/5
import styles from './Edit.module.scss';

export interface EditProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
    return (
        <div className={styles['__Edit']}>
            {/* <div className="">Header</div> */}
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>left</div>
                    <div className={styles.main}>
                        <div className={styles['canvas_wrapper']}></div>
                    </div>
                    <div className={styles.right}>right</div>
                </div>
            </div>
        </div>
    );
};
