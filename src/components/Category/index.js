import styles from './Category.module.scss';
import clsx from 'clsx';

function Category({cat}) {
    const {label, options} = cat
    return (
        <div className="col-md-6">
            <label htmlFor="size">{label}</label>
            <select id="size" name="size" className={clsx(styles['form-control'])}>
                {options.map((op, idx) => {
                    return (<option key={idx}>{op}</option>)
                })}
            </select>
        </div>
    );
}

export default Category;
