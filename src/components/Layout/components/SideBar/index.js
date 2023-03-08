import clsx from 'clsx';
import styles from './SideBar.module.scss';

function SideBar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <h2>Side Bar</h2>
        </aside>
    );
}

export default SideBar;
