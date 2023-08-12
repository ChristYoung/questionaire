import { Outlet } from 'react-router-dom';
import styles from './ManageLayout.module.scss';

export const ManageLayout: React.FC<any> = (props: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>left</div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    );
};
