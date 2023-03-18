import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './CartItem.module.scss';

function CartItem({ props, OnCheckOut, otherProps }) {
    const { srcPath, itemQuantity, productName, price } = props;
    const [quantity, setQuantity] = useState(itemQuantity);
    const [subtotal, setSubtotal] = useState(itemQuantity * price);
    const handleChangeQuantity = (value) => {
        setQuantity(value);
    };
    useEffect(() => {
        setSubtotal(quantity * price);
    }, [quantity]);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles['product-img'])}>
                    <img className={clsx(styles['product-frame'])} src={srcPath} alt="Image" />
                </div>
                <div className={clsx(styles['product-details'])}>
                    <h1>
                        <strong>
                            <span className={clsx(styles['item-quantity'])}>{quantity}</span>x {productName}
                        </strong>
                    </h1>
                </div>
            </div>
            <div className={clsx(styles.price)}>{price}</div>
            <div className={clsx(styles.quantity)}>
                <input
                    type="number"
                    value={quantity}
                    onChange={(quantity) => handleChangeQuantity}
                    min="1"
                    className={clsx(styles['quantity-field'])}
                />
            </div>
            <div className={clsx(styles.subtotal)}>{subtotal}</div>
            <div className={clsx(styles['btn-remove'])}>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
