import { Outlet } from 'react-router-dom';
import styles from './ManageLayout.module.scss';

export interface ManageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ManageLayout: React.FC<ManageLayoutProps> = (props: ManageLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>left</div>
            <div className={styles.right}>
                <Outlet />
            </div>
        </div>
    );
};
