import styles from './Header.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../../assets/images/logo.svg';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={logo} width="200" height="60" />
                </div>
                <div className={clsx(styles.search)}>
                    <input placeholder="Search in shopping holic" spellCheck={false} />
                    <button className={clsx(styles.clear)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} />
                    {/* loading */}
                    <button className={clsx(styles['search-btn'])}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={clsx(styles.actions)}>

                </div>
            </div>
        </header>
    );
}

export default Header;
