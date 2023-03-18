import logo from '../../assets/products/speak.jpg'
import clsx from 'clsx';
import styles from './ProductPage.module.scss'
import Product from '../../components/Product';

function ProductPage() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
            <Product imgSrc={logo} name="JBL Speaker" price="15" to="product"/>
        </div>
    );
}

export default ProductPage;