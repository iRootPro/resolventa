import React from 'react';
import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.title}>
            <span className={styles.cell}>Name</span>
            <span className={styles.cell}>Image</span>
            <span className={styles.cell}>Gender</span>
            <span className={styles.cell}>Status</span>
        </div>
    );
};

export default Header;
