import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getCharacters} from "../../reducers/character";

const Character = () => {
    const dispatch = useDispatch()

    useEffect(() => {
           dispatch(getCharacters())
    }, [])

    return (
        <div>
            Character
        </div>
    );
};

export default Character;
