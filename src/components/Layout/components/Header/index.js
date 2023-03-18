import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Tippy for search's result, tippyjs atomik for doc
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.svg';
import { faCartShopping, faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import ResultItem from '../../../ResultItem';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import { Link } from 'react-router-dom';

function Header() {
    const [stockResult, setStockResult] = useState([]);
    useEffect(() => {
        // const timerID = setInterval(() => {
        //     setStockResult((prevResult) => {
        //         return [...prevResult, Math.floor(Math.random() * 10)];
        //     });
        // }, 3000);
        // return () => {
        //     clearInterval(timerID);
        // };
    });

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <Link className={clsx(styles.logo)} to="/">
                    <img src={logo} width="200" height="60" />
                </Link>
                <Tippy
                    render={(attrs) => (
                        <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={clsx(styles['search-title'])}>Stocks</h4>
                                <ResultItem />
                                <ResultItem />
                                <ResultItem />
                                <ResultItem />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={stockResult.length > 0}
                    // visible={true}
                    interactive
                >
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
                </Tippy>
                <div className={clsx(styles.actions)}>
                    <Link className={clsx(styles['cart-btn'])} to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                    <Button small>
                        Log in
                    </Button>
                    <Button small>
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
