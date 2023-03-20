import { faClockRotateLeft, faKeyboard, faMagnifyingGlass, faMicrophone, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { useState, useEffect, useRef } from 'react';
import Button from '../../../Button/Button';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                zIndex="9999"
                appendTo={() => document.body}
                placement="bottom-start"
                interactive
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search-item')}>
                                <div>
                                    <FontAwesomeIcon icon={faClockRotateLeft} />
                                    <span className={cx('search-title')}>Mixigaming</span>
                                </div>
                                <button className={cx('delete-btn')}>Xóa</button>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    <button className={cx('keyboard')}>
                        <FontAwesomeIcon icon={faKeyboard} />
                    </button>

                    {!!searchValue && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    )}

                    <button className={cx('seacrh-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            <Tippy content="Tìm kiếm bằng giọng nói" placement="bottom" arrow={false}>
                <div>
                    <Button circle voice>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
