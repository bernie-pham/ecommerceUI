import clsx from 'clsx';
import styles from './CartLayout.module.scss';
import Header from '../components/Header';

function CartLayout({ children }) {
    return (
        <>
            <Header />
            <div className={clsx(styles.container)}>
                {children}
            </div>
        </>
    );
}

export default CartLayout;
