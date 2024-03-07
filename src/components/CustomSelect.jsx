import React, { useState, useEffect, useRef } from 'react';

export const CustomSelect = ({ select, label, options, isrequired }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [openSelect, setOpenSelect] = useState(false);
    const selectRef = useRef(null);

    const handleOptionClick = (value) => {
        setSelectedValue(value !== null ? value : '');
        setOpenSelect(false);
    };

    const handleBodyClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setOpenSelect(false);
        }
    };
    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick);
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    return (
        <div className="custom-select" data-select={select} ref={selectRef}>
            <span className={`current ${selectedValue ? 'valid' : ''}`} onClick={() => setOpenSelect(!openSelect)}>
                {selectedValue || label || 'Select Value'}
            </span>
            <ul className={`list ${openSelect ? 'open' : ''}`}>
                {label && <li key={0} data-value={0} onClick={() => handleOptionClick(null)}>{label}</li>}
                {options.map((option, index) => (
                    <li key={label ? index + 1 : index} data-value={option} onClick={() => handleOptionClick(option)}>
                        {option}
                    </li>
                ))}
            </ul>
            <input type="text" required={isrequired ? true : false} data-select={select} defaultValue={selectedValue} />
        </div>
    );
};
