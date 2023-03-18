import clsx from 'clsx';
import styles from './Cart.module.scss';
import CartItem from '../../components/CartItem';
import logo1 from '../../assets/products/speak.jpg';
import logo2 from '../../assets/images/dep.jpg';
import { useState } from 'react';

const cartList = [
    {
        srcPath: logo1,
        itemQuantity: 1,
        productName: 'JBL Speaker',
        price: 19,
    },
    {
        srcPath: logo2,
        itemQuantity: 2,
        productName: 'Dep Le',
        price: 2,
    },
    {
        srcPath: logo1,
        itemQuantity: 1,
        productName: 'JBL Speaker Xboom',
        price: 29,
    },
    {
        srcPath: logo2,
        itemQuantity: 2,
        productName: 'Dep Le',
        price: 2,
    },
    {
        srcPath: logo1,
        itemQuantity: 1,
        productName: 'JBL Speaker Xboom',
        price: 29,
    },
];

function CartPage() {
    const [cartItems, SetCartItems] = useState(cartList);
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.basket)}>
                <div className={clsx(styles['cart-promo'])}>
                    <label htmlFor="promo-code">Enter a promotional code</label>
                    <input
                        id="promo-code"
                        type="text"
                        name="promo-code"
                        maxLength="5"
                        className={clsx(styles['promo-code-field'])}
                    />
                    <button className={clsx(styles['promo-code-cta'])}>Apply</button>
                </div>
                <div className={clsx(styles['cart-labels'])}>
                    <ul>
                        <li className={clsx([styles.item, styles['item-heading']])}>Item</li>
                        <li className={clsx(styles.price)}>Price</li>
                        <li className={clsx(styles.quantity)}>Quantity</li>
                        <li className={clsx(styles.subtotal)}>Subtotal</li>
                    </ul>
                </div>
                {cartItems.map((item, idx) => {
                    return <CartItem props={item} key={idx} />;
                })}
            </div>

            <aside>
                <div className={clsx(styles.summary)}>
                    <div className={clsx(styles["summary-total-items"])}>
                        <span className={clsx(styles["total-items"])}></span> Items in your Bag
                    </div>
                    <div className={clsx(styles["summary-subtotal"])}>
                        <div className={clsx(styles["subtotal-title"])}>Subtotal</div>
                        <div className={clsx(styles["subtotal-value final-value"])} id="basket-subtotal">
                            130.00
                        </div>
                        <div className={clsx(styles["summary-promo hide"])}>
                            <div className={clsx(styles["promo-title"])}>Promotion</div>
                            <div className={clsx(styles["promo-value final-value"])} id="basket-promo"></div>
                        </div>
                    </div>
                    <div className={clsx(styles["summary-delivery"])}>
                        <select name="delivery-collection" className={clsx(styles["summary-delivery-selection"])}>
                            <option value="0" selected="selected">
                                Select Collection or Delivery
                            </option>
                            <option value="collection">Collection</option>
                            <option value="first-class">Royal Mail 1st Class</option>
                            <option value="second-class">Royal Mail 2nd Class</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select>
                    </div>
                    <div className={clsx(styles["summary-total"])}>
                        <div className={clsx(styles["total-title"])}>Total</div>
                        <div className={clsx(styles["total-value final-value"])} id="basket-total">
                            130.00
                        </div>
                    </div>
                    <div className={clsx(styles["summary-checkout"])}>
                        <button className={clsx(styles["checkout-cta"])}>Go to Secure Checkout</button>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default CartPage;
