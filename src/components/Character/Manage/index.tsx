import React from 'react';
import Search from "./Search";
import styles from './styles.module.css'
import {useDispatch} from "react-redux";
import { setSearch } from '../../../reducers/character';
import { useHistory } from 'react-router-dom';
const Manage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleResetClick = () => {
        dispatch(setSearch(''))
        history.push('/')
    }
    return (
        <div className={styles.wrap}>
            <Search/>
            <button onClick={handleResetClick}>Reset Search/Filter</button>
        </div>
    );
};

export default Manage;
