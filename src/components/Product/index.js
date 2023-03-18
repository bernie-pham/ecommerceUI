import styles from './Product.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

function Product({ imgSrc, name, price, brand_name, to, ...props }) {
    return (
        <div className={clsx(styles['col-md-3'])}>
            <div className={clsx(styles.wrapper)} {...props}>
                <Link to={to} className={clsx(styles['product-img'])}>
                    <img alt={name} src={imgSrc} />
                </Link>
                <div className={clsx(styles['product-name'])}>
                    <div className={clsx(styles['product-title'])}>
                        <h4 title={name}>
                            {/* <Link to={to}>{name}</Link> */}
                            {name}
                        </h4>
                    </div>
                    <div className={clsx([styles['band-name']])} title={brand_name}>
                        <p>{`by ${brand_name}`}</p>
                    </div>
                    <div className={clsx(styles['product-footer'])}>
                        <div className={clsx(styles['footer-left'])}>
                            <span className={clsx(styles.price)}>{`${price}$`}</span>
                        </div>
                        <div className={clsx(styles['footer-right'])}>
                            <Link to={to} className={clsx(styles['buy-btn'])}>
                                <FontAwesomeIcon icon={faBasketShopping} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
