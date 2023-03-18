import clsx from 'clsx';
import styles from './ProductDetail.module.scss';
import logo from '../../assets/products/speak.jpg';
import { useEffect, useRef, useState } from 'react';
import Category from '../../components/Category';

const catogories = [
    {
        label: 'Size',
        options: ['X', 'XL', 'S'],
    },
    {
        label: 'Size',
        options: ['X', 'XL', 'S'],
    },
    {
        label: 'Size',
        options: ['X', 'XL', 'S'],
    },
    {
        label: 'Size',
        options: ['X', 'XL', 'S'],
    },
];

function ProductDetail() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        setCats(catogories)

    })
    const [quantity, setQuantity] = useState(2)
    const handleOnDesQty = () => {
        setQuantity(prev => prev - 1)
    }
    const handleOnIncQty = () => {
        setQuantity(prev => prev + 1)
    }
    const handleChangeQty = (value) => {
        setQuantity(value)
    }
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles['heading-section'])}>
                    <h2>Product Details</h2>
                </div>
                <div className={clsx(styles.row)}>
                    <div className="col-md-6">
                        <div className="">
                            <img src={logo} className={clsx(styles['product-img'])} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={clsx(styles['product-dtl'])}>
                            <div className={clsx(styles['product-info'])}>
                                <div className={clsx(styles['product-name'])}>Variable Product</div>
                                {/* <div className={clsx(styles["reviews-counter"])}>
                                    <div class="rate">
                                        <input type="radio" id="star5" name="rate" value="5" checked />
                                        <label for="star5" title="text">
                                            5 stars
                                        </label>
                                        <input type="radio" id="star4" name="rate" value="4" checked />
                                        <label for="star4" title="text">
                                            4 stars
                                        </label>
                                        <input type="radio" id="star3" name="rate" value="3" checked />
                                        <label for="star3" title="text">
                                            3 stars
                                        </label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">
                                            2 stars
                                        </label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">
                                            1 star
                                        </label>
                                    </div>
                                    <span>3 Reviews</span>
                                </div> */}
                                <div className={clsx(styles['product-price-discount'])}>
                                    <span>$39.00</span>
                                    <span className={clsx(styles['line-through'])}>$29.00</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className={clsx(styles.row)}>
                                <div className={clsx(styles.category)}>
                                    {cats.map((cat, idx) => (
                                        <Category cat={cat} key={idx}/>
                                    ))}
                                </div>
                            </div>

                            <div className={clsx(styles["product-count"])}>
                                <label >Quantity</label>
                                <div className={clsx(styles["display-flex"])}>
                                    <div className={clsx(styles.qtyminus)} onClick={handleOnDesQty}>-</div>
                                    <input type="text" value={quantity}  className={clsx(styles.qty)}  onChange={(e) => handleChangeQty.bind(null, e.target.value)} />
                                    <div className={clsx(styles.qtyplus)} onClick={handleOnIncQty}>+</div>
                                </div>
                                <button className={clsx(styles["round-black-btn"])}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
