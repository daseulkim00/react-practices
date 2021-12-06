import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss';

const SearchBar = ({keyword,callback}) => {
    //const [keyword, setKeyword] = useState('');
    // 인라인으로 만들어주고 제거
    // const onInputChanged = (e) => {
    //      setKeyword(e.target.value); 
    //     callback(e.target.value);
    // };

    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' value={ keyword } onChange={ (e) => callback(e.target.value) } />
        </div>
    );
};

export default SearchBar;