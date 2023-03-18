import clsx from 'clsx';
import styles from './ResultItem.module.scss';

function ResultItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>Power Bank 20000mah</span>
                </h4>
            </div>
        </div>
    );
}

export default ResultItem;
