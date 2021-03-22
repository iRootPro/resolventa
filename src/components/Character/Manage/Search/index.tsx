import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState<string>('')
    const history = useHistory()
    const handleChange = (e: string) => {
        setSearch(e)
    }

    const handleClickButton = () => {
        history.push(`/search/${search}`)
        setSearch('')
    }

    return (
        <div>
            <input type="text" placeholder='search...' value={search}
                   onChange={(e) => handleChange(e.currentTarget.value)}/>
            <button onClick={handleClickButton}>Search</button>
        </div>
    );
};

export default Search;
