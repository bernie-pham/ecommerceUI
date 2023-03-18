import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ to, href, primary, outline, small, large, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    let classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.small]: small,
        [styles.large]: large,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
