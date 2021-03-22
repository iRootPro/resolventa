import React from 'react';
import cn from 'classnames'
import {infoPageType} from "../../../../reducers/character";
import style from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../../app/store";

const Paginator = ({pagesInfo, changePage}: propsType) => {
    const search = useSelector<RootState, string>(state => state.character.search)
    const getCurrentPage = () => {
        if (pagesInfo.prev === null) return 1
        if (pagesInfo.next === null) return pagesInfo.pages
        if (pagesInfo.prev !== null) return getPrev() + 1

    }

    const getPrev = () => {
        if (pagesInfo.prev !== null)
            return +pagesInfo.prev.split('=')[1]
        return 1
    }

    const getNext = () => {
        if (pagesInfo.next !== null) {
            return +pagesInfo.next.split('=')[1]
        }
        return pagesInfo.pages
    }
    let content: Array<number> = []
    for (let i = 1; i <= pagesInfo.pages; i++) {
        content.push(i)
    }

    const handleChangePage = (page: number) => {
        changePage(page, search)
    }

    return (
        <div>
            <span className={style.item} onClick={() => handleChangePage(getPrev())}>{'<'}</span>
            {content.map((page, index) => <span key={index} onClick={() => handleChangePage(page)}
                                                className={cn(style.item, {[style.currentPage]: page === getCurrentPage()})}>{page}</span>)}
            <span className={style.item} onClick={() => handleChangePage(getNext())}>{'>'}</span>
        </div>
    );
};

export default Paginator;

type propsType = {
    pagesInfo: infoPageType
    changePage: (val: number, search: string) => void
}
